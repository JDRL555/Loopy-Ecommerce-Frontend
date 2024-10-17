/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react"
import { IoReload } from "react-icons/io5";
import { ApiResponse } from "@/shared/interfaces/api.interface";
import { Product } from "@/shared/interfaces/models/Product.interface";
import { ApiService } from "@/shared/services/api.service";
import ProductList from "@/shared/components/products/ProductList/Index";
import ProductPagination from "@/shared/components/products/ProductPagination/Index";
import { useProductsStore } from "@/shared/store/products/products-store";
import ProductSkeleton from "@/shared/components/products/ProductCard/components/Skeleton/Index";

export default function StorePage() {
  const { 
    products, 
    setProducts,
    handleReload,
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
    <div className="mt-5">
      <ProductPagination total={total} />
      <Button 
        onClick={handleReload} 
        className="absolute right-10 top-[5rem] bg-third-color text-secondary-color [&>*]:transition [&>*]:hover:rotate-[360deg]"
      >
        <IoReload />
      </Button>
      {
        products.length === 0
        ?
        <div className="flex flex-wrap m-10 gap-10 mt-4 justify-center">
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
        </div>
        :
        <ProductList />
      }
    </div>
  )
}
