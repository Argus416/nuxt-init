export const useUser = () => {
  const user = useAuth().data.value

  if (!user) return { isLoggedIn: false }

  return {
    isLoggedIn: true,
    userSession: { ...user },
  }
}
