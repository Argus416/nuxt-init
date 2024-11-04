import axios from 'axios'

class TMDPServies {
  private axiosInstance

  constructor(TMDP_TOKEN: string) {
    this.axiosInstance = axios.create({
      baseURL: 'https://api.themoviedb.org/3/',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TMDP_TOKEN}`,
      },
    })
  }

  async getMovies() {
    try {
      const { data } = await this.axiosInstance.get('discover/movie')
      return data
    } catch (err) {
      console.log({ err, message: err.message })
      throw new Error(`Error fetching films: ${err.message}`)
    }
  }

  async getSeries() {
    try {
      const { data } = await this.axiosInstance.get('discover/tv')
      return data
    } catch (err) {
      console.log({ err, message: err.message })
      throw new Error(`Error fetching series: ${err.message}`)
    }
  }
}

export default TMDPServies
