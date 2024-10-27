import { defineConfig } from 'drizzle-kit'

const { POSTGRES_URI } = useRuntimeConfig()

export default defineConfig({
  dialect: 'postgresql',
  schema: './server/database/schema.ts',
  out: './server/database/migrations',
  dbCredentials: {
    url: POSTGRES_URI,
  },
})
