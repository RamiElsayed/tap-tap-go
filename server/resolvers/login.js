const { AuthenticationError } = require('apollo-server');
const { User } = require('../models');
const { signToken } = require('../context/auth');

const login = async (_, { input }) => {
  try {
    const { email, password } = input;
    const user = await User.findOne({ email });

    if (!user) {
      console.log('[ERROR]: Failed to login | Cannot find user');
      throw new AuthenticationError('Failed to login');
    }

    const correctPassword = await user.isCorrectPassword(password);

    if (!correctPassword) {
      console.log('[ERROR]: Failed to login | Incorrect password');
      throw new AuthenticationError('Failed to login');
    }
    console.log('You have successfully logged in', user);
    return {
      token: signToken(user),
      user,
    };
  } catch (err) {
    console.log(`[ERROR]: Failed to login | ${err.message}`);
  }
};

module.exports = login;
