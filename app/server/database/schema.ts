import { relations } from 'drizzle-orm'
import { boolean, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
  id: uuid().primaryKey().defaultRandom(),
  first_name: text('first_name').notNull(),
  last_name: text('last_name').notNull(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  avatar: text('avatar').notNull(),
  created_at: timestamp({ withTimezone: true }).defaultNow(),
  refresh_token_expires_in: timestamp().notNull(),
})

export const todos = pgTable('todos', {
  id: uuid().primaryKey().defaultRandom(),
  title: text().notNull(),
  description: text().notNull(),
  user_id: uuid().notNull(),
  created_at: timestamp({ withTimezone: true }).defaultNow(),
  updated_at: timestamp({ withTimezone: true }).defaultNow(),
  is_deleted: boolean().default(false),
})

export const userRelations = relations(users, ({ many }) => ({
  todos: many(todos),
}))

export const todosRelations = relations(todos, ({ one }) => ({
  users: one(users),
}))
