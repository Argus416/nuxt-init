import axios from 'axios'
const runtimeConfig = useRuntimeConfig()

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer ${runtimeConfig.TMDP_TOKEN}`,
  },
})

class TMDPServies {
  async getMovies() {
    try {
      const { data } = await axiosInstance.get('discover/movie')
      console.log('movie', data.results)
      return data.results
    } catch (err) {
      console.log({ err, message: err.message })
      throw new Error(`Error fetching films: ${err.message}`)
    }
  }

  async getSeries() {
    try {
      const { data } = await axiosInstance.get('discover/tv')
      console.log('series', data.results)
      return data.results
    } catch (err) {
      console.log({ err, message: err.message })
      throw new Error(`Error fetching series: ${err.message}`)
    }
  }
}

const TmdbServicesInstance = new TMDPServies()

export default TmdbServicesInstance
