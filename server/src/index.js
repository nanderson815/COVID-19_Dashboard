const { models, startDB } = require("./db");
const resolvers = require("./graphql/resolvers");
const { GraphQLServer } = require("graphql-yoga");

const db = startDB({
  user: "nanderson",
  pwd: "Q8tMSx4YfYmk5L66"
});

const context = {
  models,
  db
};

const Server = new GraphQLServer({
  typeDefs: "./server/src/graphql/schema.graphql",
  resolvers,
  context
});

const opts = {
  port: 4000
};

Server.start(opts, () => {
  console.log(`Server is running on http://localhost:${opts.port}`);
});
