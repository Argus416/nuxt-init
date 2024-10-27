import { posts } from '../../database/schema'

export default defineEventHandler(async (event) => {
  const { title, description } = await readBody(event)
  const { data } = useAuth()

  const newPost = await useDrizzle()
    .insert(posts)
    .values({
      title,
      description,
      user_id: data?.user?.id,
    })
    .returning()

  return newPost[0]
})
