const { ApolloError } = require('apollo-server');
const { User } = require('../models');
const { signToken } = require('../context/auth');

const createUser = async (_, { input }) => {
  // destructure input from args object. since input is already an object. just pass this directly into below.
  try {
    const user = await User.create(input);
    return {
      token: signToken(user),
      user,
    };
  } catch (err) {
    console.log(`[ERROR]: Failed to create user | ${err.message}`);
    throw new ApolloError('Failed to create user');
  }
};

module.exports = createUser;
