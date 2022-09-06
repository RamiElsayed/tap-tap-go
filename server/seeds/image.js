const { Event, Image } = require('../models');
const { faker } = require('@faker-js/faker/locale/en_GB');

const generateLocations = async () => {
  const events = await Event.find({});

  for (let i = 0; i < events.length; i++) {
    const { _id } = events[i];

    const buildingNumber = faker.address.buildingNumber();
    const streetName = faker.address.streetName();
    const cityName = faker.address.city();
    const county = faker.address.county();
    const latitude = faker.address.latitude(50.10319, 60.15456, 5);
    const longitude = faker.address.longitude(-7.64133, 1.75159, 5);
    const state = faker.address.state();
    const postcode = faker.address.zipCodeByState(state);
    const eventId = _id;

    const location = {
      buildingNumber,
      streetName,
      cityName,
      county,
      latitude,
      longitude,
      state,
      postcode,
      eventId,
    };

    const createdLocation = await Location.create(Location);

    const { _id: locationId } = createdLocation;

    await Event.findByIdAndUpdate(eventId, {
      $set: {
        location: locationId,
      },
    });
  }
};

const seedLocations = async () => {
  try {
    const reviews = await generateLocations();

    console.log('Successfully seeded locations data.');
  } catch (err) {
    console.log(`Failed to seed locations data || ${err.message}`);
  }
};

module.exports = seedLocations;
