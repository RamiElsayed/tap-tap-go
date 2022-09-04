const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const connectToDatabase = require('./config/connection');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const { authMiddleware } = require('./context/auth');

const app = express();
const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/'));
});

const init = async (typeDefs, resolvers) => {
  try {
    await connectToDatabase();
    await server.start();
    server.applyMiddleware({ app });

    app.listen(PORT, () => {
      console.log(`API server listening on http://localhost:${PORT}`),
        console.log(
          `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`,
        );
    });
  } catch (err) {
    console.log(`Failed to initiate API server || ${err.message}`);
  }
};

init(typeDefs, resolvers);
