const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");
const connectToDatabase = require("../config/connection");
const { User, Event, Rating, Review } = require("../models/index");

const generateUsers = (numberOfUsers) => {
  const usersArray = new Array(numberOfUsers).fill("");

  return usersArray.map(() => {
    const firstName = faker.name.firstName();
    console.log(firstName);
    const lastName = faker.name.lastName();
    console.log(lastName);
    const email = faker.internet.email(firstName, lastName);
    console.log(email);
    return {
      firstName: firstName,
      lastName: lastName,
      age: +faker.random.numeric(2),
      number: faker.phone.number("####-###-####"),
      email: faker.internet.email(firstName, lastName),
      applications: [],
    };
  });
};

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
  generateUsers(8);
  process.exit(0);
};

init();
