import TMDPServies from '../services/TMDBServices'

export default () => {
  const config = useRuntimeConfig()
  return new TMDPServies(config.public.TMDP_TOKEN)
}
