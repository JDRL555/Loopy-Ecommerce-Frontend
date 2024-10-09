"use client"
import { useEffect, useState } from "react";
import { ApiResponse } from "@/shared/interfaces/api.interface";
import { Product } from "@/shared/interfaces/models/Product.interface";
import { ApiService } from "@/shared/services/api.service";
import ProductList from "@/shared/components/products/ProductList/Index";
import ProductPagination from "@/shared/components/products/ProductPagination/Index";

export default function StorePage() {

  const [products, setProducts] = useState<Product[]>([])
  const [total, setTotal] = useState<number>(0)

  useEffect(() => {
    async function main() {
      const apiService = new ApiService<Product>("products")
      const response: ApiResponse<Product> = await apiService.get()
      setProducts(response.data as Product[])
      setTotal(response.meta?.total as number)
    }
    main()
  }, [])

  if(products.length == 0) {
    return <h1>Cargando productos...</h1>
  }

  return (
    <div>
      <ProductPagination total={total} />
      <ProductList products={products} />
    </div>
  )
}
