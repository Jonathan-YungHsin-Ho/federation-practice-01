const { ApolloServer, gql } = require('apollo-server');
const { buildFederatedSchema } = require('@apollo/federation');

const typeDefs = gql`
  type Query {
    coreMessage: String!
  }
`;

const resolvers = {
  Query: {
    coreMessage: () => `Hello World from Core Backend API!`,
  },
};

const server = new ApolloServer({
  schema: buildFederatedSchema([
    {
      typeDefs,
      resolvers,
    },
  ]),
});

const port = process.env.PORT || 4001;

server.listen(port, () =>
  console.log(`\n** Core server listening on port ${port} **\n`),
);
