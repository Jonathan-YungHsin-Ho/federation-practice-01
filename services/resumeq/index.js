const { ApolloServer, gql } = require('apollo-server');
const { buildFederatedSchema } = require('@apollo/federation');

const typeDefs = gql`
  type Query {
    resumeQMessage: String!
  }
`;

const resolvers = {
  Query: {
    resumeQMessage: () => `Hello World from Resume Q Backend API!`,
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

const port = process.env.PORT || 4003;

server.listen(port, () =>
  console.log(`\n** Resume Q server listening on port ${port} **\n`),
);
