const generateEvents = (numberOfEvents, tags) => {
  const eventsArray = new Array(numberOfEvents).fill("");

  return eventsArray.map(() => {
    const ageGroup = ["children", "Teenagers", "Adults", "Seniors"];
    const randomAgeGroup =
      ageGroup[Math.floor(Math.random() * ageGroup.length)];
    const tags = ["Latino", "Break Dance", "Ballet", "Tap Dance"];
    const randomTag = tags[Math.floor(Math.random() * tags.length)];
    return {
      eventName: faker.lorem.lines(1),
      location: faker.address.cityName(),
      description: faker.lorem.paragraph(3),
      date: formatDate(faker.date.future()),
      price: faker.commerce.price(),
      ageGroup: randomAgeGroup,
      images: faker.image.abstract(200, 300),
      tags: randomTag,
      reviews: faker.datatype.array(),
      attendees: faker.datatype.number(100),
      maxAttendees: faker.datatype.number(100),
    };
  });
};

module.exports = generateEvents;
