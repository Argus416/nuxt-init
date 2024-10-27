import { getServerSession } from '#auth'

export default eventHandler(async (event) => {
  const session = await getServerSession(event)
  return true
  // if (!session) {
  //   throw createError({
  //     statusMessage: 'Unauthenticated rrr',
  //     statusCode: 403,
  //   })
  // }
})
