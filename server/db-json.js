const fs = require("fs/promises");
const path = require("path");

const DB_FILE = path.resolve(__dirname, "db.json");
const defaultData = { users: [], websites: [] };

async function loadDb() {
  try {
    const raw = await fs.readFile(DB_FILE, "utf8");
    return JSON.parse(raw);
  } catch (err) {
    if (err.code === "ENOENT") {
      await fs.writeFile(DB_FILE, JSON.stringify(defaultData, null, 2), "utf8");
      return { ...defaultData };
    }
    throw err;
  }
}

async function saveDb(data) {
  await fs.writeFile(DB_FILE, JSON.stringify(data, null, 2), "utf8");
}

async function findUserByEmail(email) {
  const db = await loadDb();
  return db.users.find((user) => user.email === email);
}

async function addUser(user) {
  const db = await loadDb();
  const newUser = {
    id: `user-${Date.now()}`,
    ...user,
    createdAt: new Date().toISOString(),
  };
  db.users.push(newUser);
  await saveDb(db);
  return newUser;
}

async function listWebsitesByUser(userId) {
  const db = await loadDb();
  return db.websites
    .filter((site) => site.user === userId)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

async function findWebsiteById(id) {
  const db = await loadDb();
  return db.websites.find((site) => site.id === id);
}

async function addWebsite(site) {
  const db = await loadDb();
  const newWebsite = {
    id: `site-${Date.now()}`,
    ...site,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  db.websites.push(newWebsite);
  await saveDb(db);
  return newWebsite;
}

async function updateWebsite(id, userId, updates) {
  const db = await loadDb();
  const index = db.websites.findIndex((site) => site.id === id && site.user === userId);
  if (index === -1) return null;
  const existing = db.websites[index];
  const updated = {
    ...existing,
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  db.websites[index] = updated;
  await saveDb(db);
  return updated;
}

async function deleteWebsite(id, userId) {
  const db = await loadDb();
  const index = db.websites.findIndex((site) => site.id === id && site.user === userId);
  if (index === -1) return null;
  const [deleted] = db.websites.splice(index, 1);
  await saveDb(db);
  return deleted;
}

module.exports = {
  findUserByEmail,
  addUser,
  listWebsitesByUser,
  findWebsiteById,
  addWebsite,
  updateWebsite,
  deleteWebsite,
};
