const { Event, User } = require('../models');
const { faker } = require('@faker-js/faker');
const { formatDate } = require('../utils/index');

const generateEvents = async () => {
  const users = await User.find({});

  const ageGroup = ['Children', 'Teenagers', 'Adults', 'Seniors'];
  const randomAgeGroup = ageGroup[Math.floor(Math.random() * ageGroup.length)];
  const tags = ['Latino', 'Break Dance', 'Ballet', 'Tap Dance'];
  const randomTag = tags[Math.floor(Math.random() * tags.length)];

  for (let i = 0; i < users.length; i++) {
    const { username } = users[i];
    const { _id: userId } = users[i];

    const numberOfEvents = Math.floor(Math.random() * 3);

    for (let j = 0; j < numberOfEvents; j++) {
      const eventName = faker.lorem.lines(1);
      const location = faker.address.cityName();
      const description = faker.lorem.paragraph(3);
      const date = formatDate(faker.date.future());
      const price = faker.commerce.price();
      const ageGroup = randomAgeGroup;
      const images = faker.image.city(300, 200);
      const tags = randomTag;
      const attendees = faker.datatype.number(100);
      const maxAttendees = faker.datatype.number(100);

      const event = {
        username,
        eventName,
        location,
        description,
        date,
        price,
        ageGroup,
        images,
        tags,
        attendees,
        maxAttendees,
      };

      const createdEvent = await Event.create(event);
      const { _id: eventId } = createdEvent;
      await User.findByIdAndUpdate(userId, {
        $push: {
          events: eventId,
        },
      });
    }
  }
};

const seedEvents = async () => {
  try {
    const events = generateEvents();
    console.log('Successfully seeded events data.');
  } catch (err) {
    console.log(`Failed to seed events data || ${err.message}`);
  }
};

module.exports = seedEvents;
