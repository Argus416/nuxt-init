import axios from 'axios'
import type { TMDP_RESPONSE, TMDP_SERIES, TMDP_MOVIE } from '~/types/tmdp'

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

  async getMovies(
    page = 1,
  ): Promise<{ results: TMDP_MOVIE[] } & TMDP_RESPONSE> {
    try {
      const { data } = await this.axiosInstance.get('discover/movie', {
        params: {
          page,
        },
      })
      return data
    } catch (err) {
      if (err instanceof Error) {
        throw new TypeError(`Failed to fetch movies. Reason: ${err.message}`)
      }
      throw new Error('An unknown error occurred while fetching movies')
    }
  }

  async getSeries(): Promise<{ results: TMDP_SERIES[] } & TMDP_RESPONSE> {
    try {
      const { data } = await this.axiosInstance.get('discover/tv')
      return data
    } catch (error) {
      if (error instanceof Error) {
        throw new TypeError(`Failed to fetch series. Reason: ${error.message}`)
      }
      throw new Error('An unknown error occurred while fetching series')
    }
  }
}

export default TMDPServies
