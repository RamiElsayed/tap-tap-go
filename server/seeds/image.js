const { Event, Image } = require('../models');
const { faker } = require('@faker-js/faker/locale/en_GB');

const generateImages = async () => {
  const events = await Event.find({});

  for (let i = 0; i < events.length; i++) {
    const { _id: eventId } = events[i];

    const numberOfImages = Math.floor(Math.random() * 5 + 1);

    for (let j = 0; j < numberOfImages; j++) {
      const imageLink = faker.image.city(200, 300, true);

      const image = { imageLink };

      const createdImage = await Image.create(image);

      const { _id: imageId } = createdImage;

      await Event.findByIdAndUpdate(eventId, {
        $push: {
          images: imageId,
        },
      });
    }
  }
};

const seedImages = async () => {
  try {
    await generateImages();

    console.log('Successfully seeded Images data.');
  } catch (err) {
    console.log(`Failed to seed Images data || ${err.message}`);
  }
};

module.exports = seedImages;
