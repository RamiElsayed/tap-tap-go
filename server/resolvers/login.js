const { AuthenticationError } = require("apollo-server");
const { User } = require("../models");
const { signToken } = require("../context/auth");

const login = async (_, { input }) => {
  try {
    const { email, password } = input;
    const user = await User.findOne({ email });

    if (!user) {
      throw new AuthenticationError("Failed to login");
    }

    const correctPassword = await user.isCorrectPassword(password);

    if (!correctPassword) {
      throw new AuthenticationError("Failed to login");
    }

    console.log("You have successfully logged in");

    const token = signToken(user);

    return {
      token,
      user,
    };
  } catch (err) {
    console.log(`[ERROR]: Failed to login | ${err.message}`);
    throw new AuthenticationError(`[ERROR]: Failed to login | ${err.message}`);
  }
};

module.exports = login;
