const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');
const connectToDatabase = require('../config/connection');
const { User, Event, Review, Tag } = require('../models/index');
const seedUsers = require('./user');
const seedEvents = require('./event');
const seedReviews = require('./review');
const seedTags = require('./tag');

const init = async () => {
  try {
    await connectToDatabase();

    console.log('[INFO]: Database connection successful');

    await User.deleteMany({});
    await Event.deleteMany({});
    await Review.deleteMany({});
    await Tag.deleteMany({});

    await seedUsers();
    await seedEvents();
    await seedReviews();
    await seedTags();

    process.exit(0);
  } catch (error) {
    console.log(`[ERROR]: Failed to seed all data | ${error.message}`);
  }
};

init();
