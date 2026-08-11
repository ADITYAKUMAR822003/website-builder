const User = require("./models/User");
const Website = require("./models/Website");
const jsonDb = require("./db-json");

async function findUserByEmail(email) {
  if (process.env.USE_MONGODB === "false") {
    return jsonDb.findUserByEmail(email);
  }
  return User.findOne({ email }).lean({ virtuals: true });
}

async function addUser(user) {
  if (process.env.USE_MONGODB === "false") {
    return jsonDb.addUser(user);
  }
  const created = await User.create(user);
  return created.toObject({ virtuals: true });
}

async function listWebsitesByUser(userId) {
  if (process.env.USE_MONGODB === "false") {
    return jsonDb.listWebsitesByUser(userId);
  }
  return Website.find({ user: userId })
    .sort({ createdAt: -1 })
    .lean({ virtuals: true });
}

async function findWebsiteById(id) {
  if (process.env.USE_MONGODB === "false") {
    return jsonDb.findWebsiteById(id);
  }
  return Website.findById(id).lean({ virtuals: true });
}

async function addWebsite(site) {
  if (process.env.USE_MONGODB === "false") {
    return jsonDb.addWebsite(site);
  }
  const created = await Website.create(site);
  return created.toObject({ virtuals: true });
}

async function updateWebsite(id, userId, updates) {
  if (process.env.USE_MONGODB === "false") {
    return jsonDb.updateWebsite(id, userId, updates);
  }
  return Website.findOneAndUpdate(
    { _id: id, user: userId },
    updates,
    { new: true, lean: true, virtuals: true }
  );
}

async function deleteWebsite(id, userId) {
  if (process.env.USE_MONGODB === "false") {
    return jsonDb.deleteWebsite(id, userId);
  }
  return Website.findOneAndDelete({ _id: id, user: userId }).lean({ virtuals: true });
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
