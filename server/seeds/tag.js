const { Review, Event, Tag } = require('../models');
const { faker } = require('@faker-js/faker');

const generateTags = async () => {
  const events = await Event.find({});
  const danceTypes = [
    'Ballet',
    'Hip Hop',
    'Tap Dance',
    'Folk Dance',
    'Line Dance',
    'Irish Dance',
    'Medieval Dance',
    'Disco',
    'Jazz',
    'Swing',
  ];

  for (let i = 0; i < events.length; i++) {
    const { _id: eventId } = events[i];

    const numberOfTags = Math.floor(Math.random() * 5);

    for (let j = 0; j < numberOfTags; j++) {
      const tagName = danceTypes[Math.floor(Math.random() * danceTypes.length)];

      const createdTag = await Tag.create({ tagName });

      const { _id: tagId } = createdTag;

      await Tag.findByIdAndUpdate(tagId, {
        $addToSet: {
          events: eventId,
        },
      });

      await Event.findByIdAndUpdate(eventId, {
        $push: {
          tags: tagId,
        },
      });
    }
  }
};
const seedTags = async () => {
  try {
    const Tags = await generateTags();

    console.log('Successfully seeded Tags data.');
  } catch (err) {
    console.log(`Failed to seed Tags data || ${err.message}`);
  }
};

module.exports = seedTags;
