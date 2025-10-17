import process from 'node:process'
import { PrismaClient } from '@prisma/client'
import * as bcrypt from 'bcrypt'
import { GraphQLError } from 'graphql'
import jwt from 'jsonwebtoken'
import { MutationResolvers } from '../types'

const prisma = new PrismaClient()

interface Context {
  user?: {
    id: string
  }
}

export const Mutation: MutationResolvers = {
  register: async (_, { input }) => {
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email: input.email }, { username: input.email }],
      },
    })

    if (existingUser) {
      throw new GraphQLError('User already exists')
    }

    const hashedPassword = await bcrypt.hash(input.password, 10)

    const user = await prisma.user.create({
      data: {
        email: input.email,
        username: input.email.split('@')[0],
        password: hashedPassword,
        createdAt: new Date().toISOString(),
      },
    })

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!)

    return { token, user: { ...user, comments: [], posts: [] } }
  },

  login: async (_, { input }) => {
    const user = await prisma.user.findUnique({
      where: { email: input.email },
    })

    if (!user) {
      throw new GraphQLError('Invalid credentials')
    }

    const valid = await bcrypt.compare(input.password, user.password)

    if (!valid) {
      throw new GraphQLError('Invalid credentials')
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!)

    const comments = await prisma.comment.findMany({ where: { authorId: user.id } })
    const commentsIds = comments.map(comment => comment.id)

    const posts = await prisma.post.findMany({ where: { authorId: user.id } })
    const postsIds = posts.map(post => post.id)

    return { token, user: { ...user, comments: commentsIds, posts: postsIds } }
  },

  logout: () => {
    return true
  },

  createPost: async (_, { input }, { user }: Context) => {
    if (!user)
      throw new GraphQLError('Not authenticated')

    return prisma.post.create({
      data: {
        ...input,
        authorId: user.id,
        createdAt: new Date().toISOString(),
      },
    })
  },

  updatePost: async (_, { id, input }, { user }: Context) => {
    if (!user)
      throw new GraphQLError('Not authenticated')

    const post = await prisma.post.findUnique({ where: { id } })

    if (!post)
      throw new GraphQLError('Post not found')
    if (post.authorId !== user.id)
      throw new GraphQLError('Not authorized')

    return await prisma.post.update({
      where: { id },
      data: {
        title: input.title!,
        content: input.content!,
        url: input.url!,
      },
    })
  },

  deletePost: async (_, { id }, { user }: Context) => {
    if (!user)
      throw new GraphQLError('Not authenticated')

    const post = await prisma.post.findUnique({ where: { id } })

    if (!post)
      throw new GraphQLError('Post not found')
    if (post.authorId !== user.id)
      throw new GraphQLError('Not authorized')

    await prisma.comment.deleteMany({ where: { postId: id } })

    await prisma.post.delete({ where: { id } })
    return true
  },

  addComment: async (_, { postId, content }, { user }: Context) => {
    if (!user)
      throw new GraphQLError('Not authenticated')

    const comment = await prisma.comment.create({
      data: {
        content,
        author: { connect: { id: user.id } },
        post: { connect: { id: postId } },
        createdAt: new Date().toISOString(),
      },
    })

    return comment
  },

  deleteComment: async (_, { id }, { user }: Context) => {
    if (!user)
      throw new GraphQLError('Not authenticated')

    const comment = await prisma.comment.findUnique({ where: { id } })

    if (!comment)
      throw new GraphQLError('Comment not found')
    if (comment.authorId !== user.id)
      throw new GraphQLError('Not authorized')

    await prisma.comment.delete({ where: { id } })
    return true
  },

  likePost: async (_, { postId }, { user }: Context) => {
    if (!user)
      throw new GraphQLError('Not authenticated')

    await prisma.post.update({
      where: { id: postId },
      data: { likes: { increment: 1 } },
    })

    return true
  },

  unlikePost: async (_, { postId }, { user }: Context) => {
    if (!user)
      throw new GraphQLError('Not authenticated')

    await prisma.post.update({
      where: { id: postId },
      data: { likes: { decrement: 1 } },
    })

    return true
  },
}
