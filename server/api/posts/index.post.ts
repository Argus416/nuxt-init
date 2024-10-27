import { posts } from '../../database/schema'
import { getServerSession } from '#auth'

export default defineEventHandler(async (event) => {
  try {
    const { title, description } = await readBody(event)
    const { user } = await getServerSession(event)

    const newPost = await useDrizzle()
      .insert(posts)
      .values({
        title,
        description,
        user_id: user?.id,
      })
      .returning()

    return newPost[0]
  } catch (e) {
    createError({
      statusMessage: `Error creating post: ${e.message}`,
      statusCode: 500,
    })
  }
})
