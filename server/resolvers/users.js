const { User } = require("../models");
const { DateTime, PhoneNumber } = require("graphql-scalars");

const users = async () => {
  const users = await User.find({});
  console.log(users);
  return users;
};

module.exports = users;
