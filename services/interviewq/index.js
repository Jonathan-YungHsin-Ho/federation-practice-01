const { ApolloServer, gql } = require('apollo-server');
const { buildFederatedSchema } = require('@apollo/federation');

const typeDefs = gql`
  type Query {
    interviewQMessage: String!
  }
`;

const resolvers = {
  Query: {
    interviewQMessage: () => `Hello World from Interview Q Backend API!`,
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

const port = process.env.PORT || 4002;

server.listen(port, () =>
  console.log(`\n** Interview Q server listening on port ${port} **\n`),
);
