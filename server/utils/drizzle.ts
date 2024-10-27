import { drizzle } from 'drizzle-orm/postgres-js'

import * as schema from '../database/schema'
export { sql, eq, and, or } from 'drizzle-orm'

export const tables = schema

export function useDrizzle() {
  return drizzle('postgres://postgres:123321@localhost:5432/nuxt-todo')
}

export type User = typeof schema.users.$inferSelect
export type Post = typeof schema.posts.$inferSelect
