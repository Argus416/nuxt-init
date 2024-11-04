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

  async getData(params: {
    page: number
    type: 'movie' | 'tv'
    query?: string
  }): Promise<{ results: TMDP_MOVIE[] } & TMDP_RESPONSE> {
    try {
      let data
      if (params.query || params.query === '') {
        data = await this.axiosInstance.get(`search/${params.type}`, {
          params: {
            query: params.query,
            page: params.page,
          },
        })
      } else {
        data = await this.axiosInstance.get(`discover/${params.type}`, {
          params: {
            page: params.page,
          },
        })
      }

      return data.data
    } catch (error) {
      if (error instanceof Error) {
        throw new TypeError(
          `Failed to fetch ${params.type}. Reason: ${error.message}`,
        )
      }
      throw new Error(`An unknown error occurred while fetching ${params.type}`)
    }
  }

  async searchData(params: {
    query: string
    type: 'movie' | 'tv'
  }): Promise<{ results: TMDP_MOVIE[] } & TMDP_RESPONSE> {
    try {
      return data
    } catch (error) {
      if (error instanceof Error) {
        throw new TypeError(
          `Failed to fetch ${params.type}. Reason: ${error.message}`,
        )
      }
      throw new Error(`An unknown error occurred while fetching ${params.type}`)
    }
  }
}

export default TMDPServies
