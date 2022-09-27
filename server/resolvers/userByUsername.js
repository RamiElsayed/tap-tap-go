const { User } = require("../models");

const usernameExist = async (_, { userId }) => {
  try {
    const userFromDatabase = await User.findOne({ username: "" });

    return userFromDatabase;
  } catch (err) {
    console.log(`[ERROR]: Failed to get user | ${err.message}`);
    throw new ApolloError("Failed to get user");
  }
};

module.exports = usernameExist;
