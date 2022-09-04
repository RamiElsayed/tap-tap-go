const { Event, User } = require('../models');
const { faker } = require('@faker-js/faker');

const generateEvents = async () => {
  const users = await User.find({});

  const ageGroup = ['children', 'Teenagers', 'Adults', 'Seniors'];
  const randomAgeGroup = ageGroup[Math.floor(Math.random() * ageGroup.length)];
  const tags = ['Latino', 'Break Dance', 'Ballet', 'Tap Dance'];
  const randomTag = tags[Math.floor(Math.random() * tags.length)];

  for (let i = 0; i < users.length; i++) {
    const eventName = faker.lorem.lines(1);
    const location = faker.address.cityName();
    const description = faker.lorem.paragraph(3);
    const date = formatDate(faker.date.future());
    const price = faker.commerce.price();
    const ageGroup = randomAgeGroup;
    const images = faker.image.abstract(300, 200);
    const tags = randomTag;
    const reviews = faker.datatype.array();
    const attendees = faker.datatype.number(100);
    const maxAttendees = faker.datatype.number(100);

    const event = {
      eventName,
      location,
      description,
      date,
      price,
      ageGroup,
      images,
      tags,
      reviews,
      attendees,
      maxAttendees,
    };

    const createdEvent = await Event.create({});
  }
};

const seedEvents = async () => {
  try {
    const users = generateUsers();
    const userPromises = users.map((user) => User.create(user));

    await Promise.all(userPromises);

    console.log('Successfully seeded events data.');
  } catch (err) {
    console.log(`Failed to seed events data || ${err.message}`);
  }
};

module.exports = seedEvents;
