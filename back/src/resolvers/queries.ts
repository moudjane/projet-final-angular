import { PrismaClient } from '@prisma/client'
import { GraphQLError } from 'graphql'
import { QueryResolvers } from '../types'

const prisma = new PrismaClient()

interface Context {
  user?: {
    id: string
  }
}

export const Query: QueryResolvers = {
  me: async (_, __, { user }: Context) => {
    if (!user)
      return null

    const me = await prisma.user.findUnique({ where: { id: user.id } })
    const comments = await prisma.comment.findMany({ where: { authorId: user.id } })
    const commentsIds = comments.map(comment => comment.id)

    const posts = await prisma.post.findMany({ where: { authorId: user.id } })
    const postsIds = posts.map(post => post.id)

    if (!me)
      throw new GraphQLError('User dont exists')

    return {
      ...me,
      comments: commentsIds,
      posts: postsIds,
    }
  },

  getPost: async (_, { id }) => {
    const post = await prisma.post.findUnique({ where: { id } })
    const comments = await prisma.comment.findMany({ where: { postId: id } })

    let authorName = { username: 'unknown' }
    if (post?.authorId)
      authorName = await prisma.user.findUnique({ where: { id: post.authorId } }) || { username: 'unknown' }
    return {
      ...post,
      authorName: authorName.username,
      comments,
    }
  },

  getPosts: async (_, { filter, pagination }) => {
    const where = filter?.author
      ? { author: { username: filter.author } }
      : undefined

    const orderBy = filter?.orderBy
      ? {
          [filter.orderBy.field === 'CREATED_AT' ? 'createdAt' : 'likes']:
              filter.orderBy.direction.toLowerCase(),
        }
      : undefined

    const prismaPosts = await prisma.post.findMany({
      where,
      orderBy,
      skip: pagination?.skip ?? 0,
      take: pagination?.take ?? 10,
    })
    const posts = prismaPosts.map(async (post) => {
      const authorName = await prisma.user.findUnique({ where: { id: post.authorId } })
      const comments = await prisma.comment.findMany({ where: { postId: post.id } })
      return {
        ...post,
        authorName: authorName?.username || 'unknown',
        comments,
      }
    })
    return Promise.all(posts)
  },

  getUser: async (_, { username }) => {
    const user = await prisma.user.findUnique({ where: { username } })

    if (!user)
      throw new GraphQLError('User dont exists')

    const comments = await prisma.comment.findMany({ where: { authorId: user.id } })
    const commentsIds = comments.map(comment => comment.id)

    const posts = await prisma.post.findMany({ where: { authorId: user.id } })
    const postsIds = posts.map(post => post.id)

    return {
      ...user,
      comments: commentsIds,
      posts: postsIds,
    }
  },
}
