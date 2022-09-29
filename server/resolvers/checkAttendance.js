const { ApolloError, AuthenticationError } = require("apollo-server");

const { User } = require("../models");
const mongoose = require("mongoose");

const checkAttendance = async (_, { eventId }, { user, event }) => {
  try {
    if (user) {
      const userData = await User.findOne({
        _id: user._id,
        events: { $in: [eventId] },
      });

      // console.log(eventId);
      const isFound = userData?.events?.length ? true : false;

      console.log(isFound);
      return { attending: isFound };
    } else {
      throw new AuthenticationError("You must be logged in to delete a user.");
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to delete user | ${error.message}`);
    throw new ApolloError("Failed to delete user");
  }
};

module.exports = checkAttendance;
