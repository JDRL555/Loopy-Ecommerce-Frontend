export type Endpoints = "users" | "categories" | "carts" | "products"

interface Error {
  field: string,
  error: string
}

interface Meta<T> {
  total: number,
  page: number,
  lastPage: number,
  limit: number,
  filter: T
}

export interface ApiResponse<T> {
  data: T | T[],
  message: Error[],
  meta?: Meta<T>
}