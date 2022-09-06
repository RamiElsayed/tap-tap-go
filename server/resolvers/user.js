const User = require("../models/User");

const user = async (_, { userId }) => {
  const user = await User.findById(userId);
  return user;
};

module.exports = user;
