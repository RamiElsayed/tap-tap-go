const { User } = require('../models');

const user = async (_, { userId }) => {
  const userFromDatabase = await User.findById({ userId });
  console.log(user);
  return userFromDatabase;
};

module.exports = user;
