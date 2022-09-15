const { Review, Event, Tag } = require("../models");
const { faker } = require("@faker-js/faker/locale/en_GB");

const generateTags = async () => {
  const events = await Event.find({});
  const typesOfDance = [
    "Ballet",
    "Hip Hop",
    "Tap Dance",
    "Folk Dance",
    "Line Dance",
    "Irish Dance",
    "Medieval Dance",
    "Disco",
    "Jazz",
    "Swing",
    "Salsa",
  ];

  const tagPromises = typesOfDance.map((type) =>
    Tag.create({ tagName: type, events: [] })
  );
  await Promise.all(tagPromises);

  for (let i = 0; i < events.length; i++) {
    const { _id: eventId } = events[i];

    const numberOfTags = Math.floor(Math.random() * 5);
    const tags = await Tag.find({});

    for (let j = 0; j < numberOfTags; j++) {
      const randomTag = tags[Math.floor(Math.random() * tags.length)];

      const { _id: tagId } = randomTag;

      await Event.findByIdAndUpdate(eventId, {
        $addToSet: {
          tags: tagId,
        },
      });
    }
  }
};
const seedTags = async () => {
  try {
    await generateTags();

    console.log("Successfully seeded Tags data.");
  } catch (err) {
    console.log(`Failed to seed Tags data || ${err.message}`);
  }
};

module.exports = seedTags;
