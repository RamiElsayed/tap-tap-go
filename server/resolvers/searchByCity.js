const { ApolloError } = require("apollo-server-express");
const { Event } = require("../models");

const searchByCity = async (_, { input }) => {
  try {
    const { city } = input;
    const events = await Event.find({}).populate("tags").populate("reviews");
    const eventsArr = [];
    events.forEach((x) => {
      if (x.location.cityName === city) {
        eventsArr.push(x);
      }
    });
    return eventsArr;
  } catch (err) {
    console.log(`[ERROR]: Failed to get events | ${err.message}`);
    throw new ApolloError("Failed to get events");
  }
};

module.exports = searchByCity;
