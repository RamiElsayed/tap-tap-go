const { User } = require("../models");
const { faker } = require("@faker-js/faker/locale/en_GB");

const generateUsers = () => {
  const usersArr = [];
  for (let i = 0; i < 10; i++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const username = faker.internet.userName(firstName, lastName);
    const number = +faker.phone.number("###########");
    console.log(number);
    const email = faker.internet.email(firstName, lastName);
    const password = faker.internet.password(5);
    usersArr.push({ firstName, lastName, username, number, email, password });
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
