const { Review, Event, Tag } = require("../models");
const { faker } = require("@faker-js/faker");

const generateTags = async () => {
  const events = await Event.find({});

  for (let i = 0; i < events.length; i++) {
    const numberOfTags = Math.floor(Math.random() * 5);
    const { _id: eventId } = events[i];

    for (let j = 0; j < numberOfTags; j++) {
      const { _id: tagId } = numberOfTags[i];
      const tagName = faker.lorem.lines(1);

      await Event.findByIdAndUpdate(eventId, {
        $push: {
          reviews: reviewId,
        },
      });
    }
  }
};
const seedTags = async () => {
  try {
    const Tags = await generateTags();

    console.log("Successfully seeded Tags data.");
  } catch (err) {
    console.log(`Failed to seed Tags data || ${err.message}`);
  }
};

module.exports = seedTags;
