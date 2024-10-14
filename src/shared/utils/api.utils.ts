import { Param } from "../interfaces/api.interface";

export class ApiUtils<T> {
  paramsToString(route: string, params: Param<T>): string {
    let newRoute = `${route}?`

    if(params.limit) {
      newRoute += `limit=${params.limit}`
      if(params.page || params.filter) {
        newRoute += "&"
      }
    }
    
    if(params.page) {
      newRoute += `page=${params.page}`
      if(params.filter) {
        newRoute += "&"
      }
    }

    if(params.filter) {
      newRoute += `filter=${JSON.stringify(params.filter)}`
    }

    return newRoute
  }
}