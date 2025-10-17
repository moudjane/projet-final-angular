import { gql } from 'graphql-tag'

export const typeDefs = gql`
  type Query {
    me: User
    getPost(id: ID!): Post
    getPosts(filter: PostFilterInput, pagination: PaginationInput): [Post!]!
    getUser(username: String!): User
  }

  type Mutation {
    register(input: AuthInput!): AuthPayload!
    login(input: AuthInput!): AuthPayload!
    logout: Boolean

    createPost(input: CreatePostInput!): Post!
    updatePost(id: ID!, input: UpdatePostInput!): Post!
    deletePost(id: ID!): Boolean!

    addComment(postId: ID!, content: String!): Comment!
    deleteComment(id: ID!): Boolean!

    likePost(postId: ID!): Boolean!
    unlikePost(postId: ID!): Boolean!
  }

  type User {
    id: ID!
    username: String!
    email: String!
    posts: [String!]!
    comments: [String!]!
    createdAt: String!
  }

  type Post {
    id: ID
    title: String
    url: String
    content: String
    authorId: String
    authorName: String
    comments: [Comment!]
    likes: Int
    createdAt: String
  }

  type Comment {
    id: ID
    content: String
    authorId: String
    authorName: String
    postId: String
    createdAt: String
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  input AuthInput {
    email: String!
    password: String!
  }

  input CreatePostInput {
    title: String!
    url: String
    content: String
  }

  input UpdatePostInput {
    title: String
    url: String
    content: String
  }

  input PostFilterInput {
    author: String
    orderBy: PostOrderByInput
  }

  input PostOrderByInput {
    field: PostOrderField!
    direction: OrderDirection!
  }

  enum PostOrderField {
    CREATED_AT
    LIKES
  }

  enum OrderDirection {
    ASC
    DESC
  }

  input PaginationInput {
    skip: Int
    take: Int
  }
`
