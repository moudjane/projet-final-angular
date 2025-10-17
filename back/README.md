# GraphQL API Backend

This is a GraphQL API backend built with Apollo Server, Prisma ORM, and Bun runtime. The application provides a social media-like platform where users can create posts, add comments, and interact with other users' content.

## Features

- User authentication (register, login, logout)
- Posts management (create, read, update, delete)
- Comments system
- Like/Unlike posts
- GraphQL API with TypeScript type safety

## Prerequisites

- [Bun](https://bun.sh) v1.1.17 or higher
- Node.js and npm (for some development tools)
- SQLite (included by default)

## Getting Started

1. Clone the repository and navigate to the project directory:
```bash
cd back
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
(You can use the `.env.example` file as a template)
Create a `.env` file in the root directory with:
```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="your-secret-key"
```

4. Initialize the database:
```bash
bunx prisma generate
bunx prisma db push
```

5. Start the development server:
```bash
bun run start
```

The GraphQL server will be available at `http://localhost:4000/graphql`

## Project Structure

- `/src`
  - `/resolvers` - GraphQL resolvers (queries and mutations)
  - `schema.ts` - GraphQL schema definition
  - `auth.ts` - Authentication utilities
  - `index.ts` - Server entry point
- `/prisma`
  - `schema.prisma` - Database schema definition
- `/generated` - Auto-generated TypeScript types

## Available Scripts

- `bun run start` - Start the development server
- `bun run lint` - Run ESLint
- `bun run lint:fix` - Fix ESLint issues
- `bun run codegen` - Generate TypeScript types from GraphQL schema

## API Features

### Queries
- `me` - Get current user information
- `getPost` - Get a single post by ID
- `getPosts` - Get a list of posts with filtering and pagination
- `getUser` - Get user information by username

### Mutations
- `register` - Create a new user account
- `login` - Authenticate user and get JWT token
- `logout` - End user session
- `createPost` - Create a new post
- `updatePost` - Update an existing post
- `deletePost` - Delete a post
- `addComment` - Add a comment to a post
- `deleteComment` - Delete a comment
- `likePost` - Like a post
- `unlikePost` - Remove like from a post

## Authentication

The API uses JWT (JSON Web Tokens) for authentication. Include the JWT token in the Authorization header:
```
Authorization: Bearer <your-token>
```

## Development

This project uses:
- TypeScript for type safety
- ESLint for code linting
- GraphQL CodeGen for type generation
- Prisma for database management

To modify the database schema:
1. Edit `prisma/schema.prisma`
2. Run `bunx prisma generate`
3. Run `bunx prisma db push`
