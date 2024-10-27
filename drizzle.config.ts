import { defineConfig } from 'drizzle-kit'

const env = useRuntimeConfig()
console.log({ env })

export default defineConfig({
  dialect: 'postgresql',
  schema: './server/database/schema.ts',
  out: './server/database/migrations',
  dbCredentials: {
    url: 'postgres://postgres:123321@localhost:5432/nuxt-todo',
  },
})
