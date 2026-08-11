const User = require("./models/User");
const Website = require("./models/Website");

async function findUserByEmail(email) {
  return User.findOne({ email }).lean({ virtuals: true });
}

async function addUser(user) {
  const created = await User.create(user);
  return created.toObject({ virtuals: true });
}

async function listWebsitesByUser(userId) {
  return Website.find({ user: userId })
    .sort({ createdAt: -1 })
    .lean({ virtuals: true });
}

async function findWebsiteById(id) {
  return Website.findById(id).lean({ virtuals: true });
}

async function addWebsite(site) {
  const created = await Website.create(site);
  return created.toObject({ virtuals: true });
}

async function updateWebsite(id, userId, updates) {
  return Website.findOneAndUpdate(
    { _id: id, user: userId },
    updates,
    { new: true, lean: true, virtuals: true }
  );
}

async function deleteWebsite(id, userId) {
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
