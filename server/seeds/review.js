const { Review } = require('../models');
const { faker } = require('@faker-js/faker');

const generateReviews = () => {
  const reviewsArr = [];
  for (let i = 0; i < 10; i++) {
    const title = faker.lorem.lines(1);
    const reviewText = faker.lorem.paragraph();
    const rating = faker.datatype.number({ min: 1, max: 10 });
    const password = faker.internet.password(5);
    usersArr.push({ username, email });
  }
  return usersArr;
};

const seedReviews = async () => {
  try {
    const users = generateUsers();
    const userPromises = users.map((user) => User.create(user));

    await Promise.all(userPromises);

    console.log('Successfully seeded reviews data.');
  } catch (err) {
    console.log(`Failed to seed reviews data || ${err.message}`);
  }
};

module.exports = seedReviews;
