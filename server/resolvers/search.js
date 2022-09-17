const { ApolloError } = require("apollo-server-express");
const { Event } = require("../models");

const search = async (_, { input }) => {
  try {
    const { city, tag } = input;

    const events = await Event.find({}).populate("tags");
    let arr = [];
    events.forEach((x) => {
      x.tags.forEach((y) => {
        if (y.tagName === tag && x.location.cityName === city) {
          arr.push(x);
        }
      });
    });

    return arr;
  } catch (err) {
    console.log(`[ERROR]: Failed to get events | ${err.message}`);
    throw new ApolloError("Failed to get events");
  }
};

module.exports = search;
