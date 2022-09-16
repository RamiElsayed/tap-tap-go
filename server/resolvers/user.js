const { User } = require("../models");

const user = async (_, { userId }) => {
  try {
    const userFromDatabase = await User.findById(userId)
      .populate("bookmarks")
      .populate("reviews")
      .populate("events")
      .populate({
        path: "bookmarks",
        populate: [
          { path: "location" },
          { path: "images" },
          { path: "tags" },
          { path: "reviews" },
        ],
      });
    console.log(userFromDatabase);
    return userFromDatabase;
  } catch (err) {
    console.log(`[ERROR]: Failed to get user | ${err.message}`);
    throw new ApolloError("Failed to get user");
  }
};
const me = async (parents, args, { user }) => {
  try {
    const userFromDatabase = await User.findById(user.userId)
      .populate("bookmarks")
      .populate("reviews")
      .populate("events")
      .populate({ path: "bookmarks", populate: "location" });

    return userFromDatabase;
  } catch (err) {
    console.log(`[ERROR]: Failed to get user | ${err.message}`);
    throw new ApolloError("Failed to get user");
  }
};
module.exports = user;
