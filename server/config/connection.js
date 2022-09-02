require("dotenv").config();
const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    const connectionString =
      process.env.MONGODB_URI ||
      `mongodb://127.0.0.1:27017/${process.env.MONGODB_NAME}`;

    const options = {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    };

    await mongoose.connect(connectionString, options);

    console.log(
      `Successfully connected to the database || ${process.env.MONGODB_NAME}`
    );
  } catch (err) {
    console.log(`Failed to connect to the database || ${err.message}`);
    throw new Error("Failed to connect to the database");
  }
};

module.exports = connectToDatabase;
