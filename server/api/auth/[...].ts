// file: ~/server/api/auth/[...].ts
import GithubProvider from 'next-auth/providers/github'
import { NuxtAuthHandler } from '#auth'

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

  async signIn({ user, account, profile, email, credentials }) {
    return true
  },
  /* on redirect to another url */
  async redirect({ url, baseUrl }) {
    return baseUrl
  },

  /* on session retrival */
  async session({ session, token }) {
    // Token we injected into the JWT callback above.
    const token = token.sessionToken

    // Fetch data OR add previous data from the JWT callback.
    const additionalUserData = await $fetch(`/api/session/${token}`)

    // Return the modified session
    return {
      ...session,
      user: {
        name: additionalUserData.name,
        avatar: additionalUserData.avatar,
        role: additionalUserData.role,
      },
    }
  },

  /* on JWT token creation or mutation */
  async jwt({ token, user, account, profile, isNewUser }) {
    if (account) {
      token.sessionToken = account.session_token
    }
    return token
  },
})
