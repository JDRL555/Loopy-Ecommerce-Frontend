/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { useEffect, useState } from "react";
import { ApiResponse } from "@/shared/interfaces/api.interface";
import { Product } from "@/shared/interfaces/models/Product.interface";
import { ApiService } from "@/shared/services/api.service";
import ProductList from "@/shared/components/products/ProductList/Index";
import ProductPagination from "@/shared/components/products/ProductPagination/Index";
import { useProductsStore } from "@/shared/store/products/products-store";

export default function StorePage() {

  const { 
    products, 
    setProducts,
    reload,
    params
  } = useProductsStore(state => state)
  const [total, setTotal] = useState<number>(4)

  useEffect(() => {
    async function main() {
      setProducts([])
      const apiService = new ApiService<Product>("products")
      const response: ApiResponse<Product> = await apiService.get(params)
      setProducts(response.data as Product[])
      setTotal(response.meta?.lastPage as number)
    }
    main()
  }, [ reload, params ])

  return (
    <div>
      <ProductPagination total={total} />
      {
        products.length === 0
        ?
        <h1>Cargando...</h1>
        :
        <ProductList />
      }
    </div>
  )
}
