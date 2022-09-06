const { Event, User } = require('../models');
const { faker } = require('@faker-js/faker');
const { formatDate } = require('../utils/index');
const Tag = require('../models/Tag');

const generateEvents = async () => {
  const users = await User.find({});
  const ageGroupArr = ['Children', 'Teenagers', 'Adults', 'Seniors'];

  for (let i = 0; i < users.length; i++) {
    const { username } = users[i];
    const { _id: userId } = users[i];

    const numberOfEvents = Math.floor(Math.random() * 10);

    for (let j = 0; j < numberOfEvents; j++) {
      const randomAgeGroup =
        ageGroupArr[Math.floor(Math.random() * ageGroupArr.length)];

      const eventName = faker.lorem.lines(1);
      const location = faker.address.cityName();
      const description = faker.lorem.paragraph(3);
      const date = formatDate(faker.date.future());
      const price = faker.commerce.price();
      const ageGroup = randomAgeGroup;
      const images = faker.image.city(300, 200);
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
    const events = await generateEvents();
    console.log('Successfully seeded events data.');
  } catch (err) {
    console.log(`Failed to seed events data || ${err.message}`);
  }
};

module.exports = seedEvents;
