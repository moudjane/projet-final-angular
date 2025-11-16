# Projet Final Angular

A full-stack web application built with Angular frontend and a GraphQL backend, featuring user authentication, posts, and comments functionality.

# Members

- **Nao MAUSSERVEY**
- **Mathis OUDJANE**
- **Jonathan HAYOT**

## 🚀 Technologies Used

### Frontend
- **Angular 20** - Modern web framework
- **Apollo Client** - GraphQL client for Angular
- **TailwindCSS 4** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript
- **Nginx** - Web server for production deployment

### Backend
- **Bun** - Fast JavaScript runtime
- **Apollo Server** - GraphQL server
- **Prisma** - Next-generation ORM
- **SQLite** - Lightweight database
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing

## 📋 Features

- User authentication (register/login)
- Create, read, and manage posts
- Comment system
- Filter posts by category
- User profile management
- Responsive design

## 🐳 Quick Start with Docker

### Prerequisites
- Docker
- Docker Compose

### Launch the Application

1. Clone the repository:
```bash
git clone <repository-url>
cd projet-final-angular
```

2. Build and start the containers:
```bash
docker-compose up --build
```

3. Access the application:
   - **Frontend**: http://localhost
   - **Backend GraphQL API**: http://localhost:4000/graphql

### Stop the Application
```bash
docker-compose down
```

### Stop and Remove Volumes (including database)
```bash
docker-compose down -v
```

## 🛠️ Development Setup

### Backend (without Docker)

1. Navigate to the backend directory:
```bash
cd back
```

2. Install dependencies:
```bash
bun install
```

3. Set up the database:
```bash
bunx prisma migrate dev
```

4. Start the server:
```bash
bun start
```

The GraphQL server will be available at http://localhost:4000/graphql

### Frontend (without Docker)

1. Navigate to the frontend directory:
```bash
cd front
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The Angular app will be available at http://localhost:4200

## 📁 Project Structure

```
.
├── back/                    # Backend application
│   ├── prisma/             # Database schema and migrations
│   ├── src/                # Source code
│   │   ├── resolvers/      # GraphQL resolvers
│   │   ├── utils/          # Utility functions
│   │   ├── auth.ts         # Authentication logic
│   │   ├── schema.ts       # GraphQL schema
│   │   └── index.ts        # Server entry point
│   ├── Dockerfile          # Backend Docker configuration
│   └── package.json        # Backend dependencies
│
├── front/                   # Frontend application
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/ # Reusable components
│   │   │   ├── pages/      # Page components
│   │   │   ├── core/       # Core services and guards
│   │   │   └── app.ts      # App component
│   │   └── styles.scss     # Global styles
│   ├── Dockerfile          # Frontend Docker configuration
│   ├── nginx.conf          # Nginx configuration
│   └── package.json        # Frontend dependencies
│
└── docker-compose.yml       # Docker Compose configuration
```

## 🗄️ Database

The application uses **SQLite** as its database, which is persisted in a Docker volume named `sqlite-data`. This ensures your data is preserved between container restarts.

### Database Schema

- **User**: User accounts with authentication
- **Post**: User-generated posts with title, content, and URL
- **Comment**: Comments on posts

## 🔐 Environment Variables

### Backend
- `DATABASE_URL`: SQLite database file location
- `JWT_SECRET`: Secret key for JWT token generation (change in production!)
- `NODE_ENV`: Environment mode

## 📝 API Documentation

The GraphQL API provides the following main operations:

### Queries
- `posts`: Get all posts
- `post(id)`: Get a specific post
- `me`: Get current user information

### Mutations
- `register`: Create a new user account
- `login`: Authenticate and get JWT token
- `createPost`: Create a new post
- `createComment`: Add a comment to a post
- `updatePost`: Update an existing post
- `deletePost`: Delete a post

## 🚀 Production Deployment

For production deployment, make sure to:

1. Change the `JWT_SECRET` in `docker-compose.yml`
2. Use environment-specific configuration
3. Consider using a more robust database (PostgreSQL, MySQL)
4. Set up proper SSL/TLS certificates
5. Configure proper CORS settings
