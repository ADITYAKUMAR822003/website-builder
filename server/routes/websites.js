const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  listWebsitesByUser,
  addWebsite,
  updateWebsite,
  deleteWebsite,
  findWebsiteById,
} = require("../db");

router.get("/", auth, async (req, res) => {
  const sites = await listWebsitesByUser(req.user.id);
  res.json(sites);
});

router.post("/", auth, async (req, res) => {
  const site = await addWebsite({
    user: req.user.id,
    name: req.body.name,
    components: req.body.components || [],
  });
  res.status(201).json(site);
});

router.put("/:id", auth, async (req, res) => {
  const site = await updateWebsite(req.params.id, req.user.id, {
    name: req.body.name,
    components: req.body.components || [],
  });
  if (!site) return res.status(404).json({ message: "Website not found" });
  res.json(site);
});

router.delete("/:id", auth, async (req, res) => {
  const site = await deleteWebsite(req.params.id, req.user.id);
  if (!site) return res.status(404).json({ message: "Website not found" });
  res.json({ message: "Deleted" });
});

router.get("/:id/preview", async (req, res) => {
  try {
    const site = await findWebsiteById(req.params.id);
    if (!site) return res.status(404).send("<h1>Website not found</h1>");
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${site.name}</title>
  <style>*{box-sizing:border-box;margin:0;padding:0;}body{font-family:system-ui,sans-serif;}</style>
</head>
<body>
  ${site.components.map((b) => b.html).join("\n")}
</body>
</html>`;
    res.setHeader("Content-Type", "text/html");
    res.send(html);
  } catch (err) {
    console.error("Preview error:", err.message);
    res.status(500).send("<h1>Server error: " + err.message + "</h1>");
  }
});

module.exports = router;
