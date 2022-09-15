const { ApolloError } = require("apollo-server");
const { User } = require("../models");
const { signToken } = require("../context/auth");

const createUser = async (_, { input }) => {
  try {
    const user = await User.create(input);
    return {
      token: signToken(user),
      user,
    };
  } catch (err) {
    console.log(`[ERROR]: Failed to create user | ${err.message}`);
    throw new ApolloError("Failed to create user");
  }
};

module.exports = createUser;
