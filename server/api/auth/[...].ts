// file: ~/server/api/auth/[...].ts
import GithubProvider from 'next-auth/providers/github'
import { NuxtAuthHandler } from '#auth'
import { users } from '../../database/schema'

interface GithubUser {
  name: string
  email: string
  image: string
}
interface GitHubSession {
  user: GithubUser
  expires: Date
}

export default NuxtAuthHandler({
  secret: 'toto titi tata',
  providers: [
    // @ts-expect-error Use .default here for it to work during SSR.
    GithubProvider.default({
      clientId: 'Ov23liSAItIdfE7q4boH',
      clientSecret: '573789c70ede7fad9544b8308241b7c047ad0a11',
    }),
  ],
  pages: {
    signIn: '/auth/signIn',
    signOut: '/auth/signOut',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
    newUser: '/auth/new-user',
  },

  callbacks: {
    // async signIn({ user, account, profile, email, credentials }) {
    //   console.log('totot signin')
    //   return true
    // },
    /* on redirect to another url */
    // async redirect({ url, baseUrl }) {
    //   return baseUrl
    // },
    /* on session retrival */
    async session({ session }: { session: GitHubSession }) {
      const additionalUserData = session.user

      const user = await useDrizzle()
        .insert(users)
        .values({
          avatar: additionalUserData.image,
          email: additionalUserData.email,
          fullname: additionalUserData.name,
          refresh_token_expires_in: new Date(session.expires),
        })
        .onConflictDoUpdate({
          target: users.email,
          set: {
            refresh_token_expires_in: new Date(session.expires),
          },
        })
        .returning()

      if (!user.length) return null

      return {
        user: user[0],
      }
    },
    /* on JWT token creation or mutation */
    // async jwt({ token, user, account, profile, isNewUser }) {
    //   if (account) {
    //     token.sessionToken = account.session_token
    //   }
    //   return token
    // },
  },
})
