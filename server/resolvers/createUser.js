const { ApolloError } = require('apollo-server');
const { User } = require('../models');

const createUser = async (_, { createUserInput }) => {
  try {
    const createdUser = await User.create(createUserInput);
    return { success: true, createdUser };
  } catch (err) {
    console.log(`[ERROR]: Failed to create user | ${error.message}`);
    throw new ApolloError('Failed to create user');
  }
};

module.exports = createUser;
