import { posts } from '../../database/schema'

export default defineEventHandler(async (event) => {
  try {
    const allPosts = await useDrizzle().select().from(posts)

    return allPosts
  } catch (error) {
    createError({
      statusMessage: `Error fetching posts: ${error.message}`,
      statusCode: 500,
    })
  }
})
