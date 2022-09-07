const { User } = require("../models");

const users = async () => {
  const users = await User.find({});
  console.log(users);
  return users;
};

module.exports = users;
