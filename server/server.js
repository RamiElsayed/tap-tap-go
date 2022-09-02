const express = require("express");
const { ApolloServer } = require("apollo-server");
const path = require("path");
const connectToDatabase = require("./config/connection");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const { authMiddleware } = require("./context/auth");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

const init = async () => {
  try {
    await connectToDatabase();
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      context: authMiddleware,
    });

    const { url } = await server.listen(PORT);
    console.log(`Server running on ${url}`);
  } catch (err) {
    console.log(`Failed to initiate apollo server || ${err.message}`);
  }
};

init();
