const { Review, Event, User } = require('../models');
const { faker } = require('@faker-js/faker/locale/en_GB');

const generateReviews = async () => {
  const users = await User.find({});
  const events = await Event.find({});

  for (let i = 0; i < events.length; i++) {
    const { username: hostUsername } = events[i];
    const { _id: eventId } = events[i];

    const numberOfReviews = Math.floor(Math.random() * 5);

    for (let j = 0; j < numberOfReviews; j++) {
      const title = faker.lorem.lines(1);
      const reviewText = faker.lorem.paragraph();
      const rating = faker.datatype.number({ min: 1, max: 10 });

      const nonHostAttendees = users.filter(
        (user) => user.username !== hostUsername,
      );

      const reviewer =
        nonHostAttendees[Math.floor(Math.random() * nonHostAttendees.length)];

      const { username, _id: postedBy } = reviewer;

      const review = {
        username,
        title,
        reviewText,
        rating,
        postedBy,
      };

      const createdReview = await Review.create(review);

      const { _id: reviewId } = createdReview;

      await Event.findByIdAndUpdate(eventId, {
        $push: {
          reviews: reviewId,
        },
      });
    }
  }
};
const seedReviews = async () => {
  try {
    await generateReviews();

    console.log('Successfully seeded reviews data.');
  } catch (err) {
    console.log(`Failed to seed reviews data || ${err.message}`);
  }
};

module.exports = seedReviews;
