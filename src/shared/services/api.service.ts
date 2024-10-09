import { API_URL, API_VERSION } from "../constants/api.constants"
import { ApiResponse, Endpoints } from "../interfaces/api.interface"

export class ApiService<T> {
  private endpoint

  constructor(endpoint: Endpoints) {
    this.endpoint = endpoint
  }

  async get(): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${API_URL}/${API_VERSION}/${this.endpoint}`)
      const data: ApiResponse<T> = await response.json()
      return data
    } catch (error) {
      return {
        data: {} as T,
        message: [{
          field: "server",
          error: error as string
        }]
      }
    }
  }

}