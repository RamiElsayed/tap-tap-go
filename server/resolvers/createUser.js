const { ApolloError } = require('apollo-server');
const { User } = require('../models');

const createUser = async (_, { input }) => {
  try {
    const createdUser = await User.create(input);
    return createdUser;
  } catch (err) {
    console.log(`[ERROR]: Failed to create user | ${err.message}`);
    throw new ApolloError('Failed to create user');
  }
};

module.exports = createUser;
