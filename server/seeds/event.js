const { Event, User } = require("../models");
const { faker } = require("@faker-js/faker/locale/en_GB");
const { formatDate } = require("../utils/index");
const Tag = require("../models/Tag");

const generateEvents = async () => {
  const users = await User.find({});
  const ageGroupArr = ["Children", "Teenagers", "Adults", "Seniors"];
  const citiesGroupArr = [
    "London",
    "Birmingham",
    "Brighton",
    "Surrey",
    "Nottingham",
    "Bristol",
    "Liverpool",
    "Bath",
    "Leicester",
    "Cardiff",
    "Exeter",
    "York",
  ];
  for (let i = 0; i < users.length; i++) {
    const { username } = users[i];
    const { _id: userId } = users[i];

    const numberOfEvents = Math.floor(Math.random() * 10);

    for (let j = 0; j < numberOfEvents; j++) {
      const randomAgeGroup =
        ageGroupArr[Math.floor(Math.random() * ageGroupArr.length)];

      const eventName = faker.lorem.words(3);
      const description = faker.lorem.paragraph(3);
      const createdById = userId;
      const date = formatDate(faker.date.future());
      const price = faker.commerce.price();
      const ageGroup = randomAgeGroup;
      const attendees = faker.datatype.number(100);
      const maxAttendees = faker.datatype.number(100);
      const images = [
        { imageLink: faker.image.city() },
        { imageLink: faker.image.city() },
        { imageLink: faker.image.city() },
        { imageLink: faker.image.city() },
      ];
      const location = {
        cityName:
          citiesGroupArr[Math.floor(Math.random() * citiesGroupArr.length)],
        buildingNumber: faker.address.buildingNumber(),
        streetName: faker.address.street(),
        postcode: faker.address.zipCodeByState(),
      };

      const event = {
        username,
        eventName,
        description,
        createdById,
        date,
        price,
        ageGroup,
        createdById: userId,
        attendees,
        maxAttendees,
        location,
        images,
      };

      const createdEvent = await Event.create(event);

      const { _id: eventId } = createdEvent;

      await User.findByIdAndUpdate(userId, {
        $push: {
          events: eventId,
          bookmarks: eventId,
        },
      });
    }
  }
};

const seedEvents = async () => {
  try {
    await generateEvents();
    console.log("Successfully seeded events data.");
  } catch (err) {
    console.log(`Failed to seed events data || ${err.message}`);
  }
};

module.exports = seedEvents;
