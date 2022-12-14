const { User } = require("../models");
const { faker } = require("@faker-js/faker/locale/en_GB");

const generateUsers = () => {
  const usersArr = [];
  for (let i = 0; i < 10; i++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const username = faker.internet.userName(firstName, lastName);
    const address = faker.address.streetAddress(true);
    const createdAt = faker.date.past(5);
    const profileAvatar = faker.image.avatar();
    const aboutMe = faker.lorem.paragraphs(1);
    const websiteUrl = faker.internet.domainName();
    const number = faker.phone.number("###########");
    const email = faker.internet.email(firstName, lastName);
    const password = "password";
    usersArr.push({
      firstName,
      lastName,
      username,
      number,
      email,
      address,
      createdAt,
      profileAvatar,
      aboutMe,
      websiteUrl,
      password,
    });
  }
  return usersArr;
};

const seedUsers = async () => {
  try {
    const users = generateUsers();
    const userPromises = users.map((user) => User.create(user));

    await Promise.all(userPromises);

    console.log("Successfully seeded users data.");
  } catch (err) {
    console.log(`Failed to seed users data || ${err.message}`);
  }
};

module.exports = seedUsers;
