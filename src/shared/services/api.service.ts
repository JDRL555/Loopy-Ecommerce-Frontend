import { API_URL, API_VERSION } from "../constants/api.constants"
import { ApiResponse, Endpoints, Param } from "../interfaces/api.interface"
import { ApiUtils } from "../utils/api.utils"

export class ApiService<T> extends ApiUtils<T> {
  private endpoint

  constructor(endpoint: Endpoints) {
    super()
    this.endpoint = endpoint
  }

  async get(params: Param<T> = {} as Param<T>): Promise<ApiResponse<T>> {
    try {
      const endpoint = Object.keys(params).length > 0 
        ? this.paramsToString(this.endpoint, params) 
        : this.endpoint
      
      const response = await fetch(
        `${API_URL}/${API_VERSION}/${endpoint}`
      )
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