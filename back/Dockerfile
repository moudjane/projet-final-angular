FROM oven/bun:1.1-alpine

WORKDIR /app

# Copy package files
COPY package.json bun.lockb ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy prisma schema
COPY prisma ./prisma

# Generate Prisma Client
RUN bunx prisma generate

# Copy source code
COPY . .

# Expose port
EXPOSE 4000

# Run migrations and start server
CMD bunx prisma migrate deploy && bun run src/index.ts
