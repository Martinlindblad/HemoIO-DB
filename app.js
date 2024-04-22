const { ApolloServer, gql } = require('apollo-server');
require('dotenv').config();
const { CosmosClient } = require('@azure/cosmos');

// Initialize Cosmos DB client
const client = new CosmosClient({
  endpoint: process.env.COSMOS_ENDPOINT,
  key: process.env.COSMOS_KEY
});
const database = client.database(process.env.DATABASE_ID);
const container = database.container(process.env.CONTAINER_ID);

// GraphQL type definitions
const typeDefs = gql`
  type User {
    id: ID!
    name: String
    email: String
  }

  input CreateUserInput {
    name: String!
    email: String!
  }

  type Query {
    getUserById(id: ID!): User
  }

  type Mutation {
    createUser(input: CreateUserInput): User
  }
`;

// Resolvers define the technique for fetching the types in the schema
const resolvers = {
  Query: {
    getUserById: async (_, { id }) => {
      const { resource } = await container.item(id, id).read();
      return resource;
    },
  },
  Mutation: {
    createUser: async (_, { input }) => {
      const { resource: createdUser } = await container.items.create({
        id: new Date().getTime().toString(), // Generate a simple unique ID
        ...input
      });
      return createdUser;
    },
  },
};

// Create and start the Apollo server
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
