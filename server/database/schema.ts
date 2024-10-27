import { relations } from 'drizzle-orm'
import { boolean, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
  id: uuid().primaryKey().defaultRandom(),
  fullname: text('fullname').notNull(),
  email: text('email').notNull().unique(),
  password: text('password'),
  avatar: text('avatar').notNull(),
  created_at: timestamp({ withTimezone: true }).defaultNow(),
  refresh_token_expires_in: timestamp().notNull(),
})

export const posts = pgTable('posts', {
  id: uuid().primaryKey().defaultRandom(),
  title: text().notNull(),
  description: text().notNull(),
  user_id: uuid().notNull(),
  created_at: timestamp({ withTimezone: true }).defaultNow(),
  updated_at: timestamp({ withTimezone: true }).defaultNow(),
  is_deleted: boolean().default(false),
})

export const userRelations = relations(users, ({ many }) => ({
  posts: many(posts),
}))

export const postsRelations = relations(posts, ({ one }) => ({
  users: one(users),
}))
