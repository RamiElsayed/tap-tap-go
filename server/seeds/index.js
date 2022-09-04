const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');
const connectToDatabase = require('../config/connection');
const { User, Event, Rating, Review } = require('../models/index');
const seedUsers = require('./user');
const seedEvents = require('./event');
const seedReviews = require('./review');

const init = async () => {
  try {
    await connectToDatabase();

    console.log('[INFO]: Database connection successful');

    await User.deleteMany({});
    await Event.deleteMany({});
    await Rating.deleteMany({});
    await Review.deleteMany({});

    await seedUsers();
    await seedEvents();
    await seedReviews();

    process.exit(0);
  } catch (error) {
    console.log(`[ERROR]: Failed to get all data | ${error.message}`);
  }
};

init();
