import { env } from 'node:process'
import jwt from 'jsonwebtoken'
import { User } from '../generated/prisma'

export type AuthenticatedUser = Pick<User, 'id' | 'username'>

export function getUser(token: string): AuthenticatedUser | null {
  try {
    const payload = jwt.verify(token, env.JWT_SECRET!) as AuthenticatedUser
    return payload
  }
  catch {
    return null
  }
}
