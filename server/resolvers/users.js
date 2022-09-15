const { User } = require('../models');

const users = async () => {
  try {
    const users = await User.find({});
    console.log(users);
    return users;
  } catch (err) {
    console.log(`[ERROR]: Failed to get users | ${err.message}`);
    throw new ApolloError('Failed to get users');
  }
};

module.exports = users;
