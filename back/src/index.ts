import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { getUser } from './auth'
import { resolvers } from './resolvers'
import { typeDefs } from './schema'

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({ req }) => {
    const authorization = req.headers.authorization?.split('Bearer ')?.[1]
    const user = authorization ? getUser(authorization) : null
    return { user }
  },
})
