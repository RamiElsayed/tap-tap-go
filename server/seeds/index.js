const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");
const connectToDatabase = require("../config/connection");
const { User, Event, Rating, Review } = require("../models/index");

const init = async () => {
  try {
    await connectToDatabase();

    console.log("[INFO]: Database connection successful");

    await User.deleteMany({});
    await Event.deleteMany({});
    await Rating.deleteMany({});
    await Review.deleteMany({});
  } catch (error) {
    console.log(`[ERROR]: Failed to get all data | ${error.message}`);
  }

  process.exit(0);
};

init();
