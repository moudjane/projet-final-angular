import { gql } from 'graphql-tag'

// Define your GraphQL schema using SDL
export const typeDefs = gql`
  scalar DateTime

  type Query {
    hello: String!
  }

  type Mutation {
    echo(message: String!): String!
  }
`
