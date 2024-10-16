import ProductCard from "../ProductCard/Index"
import { useProductsStore } from "@/shared/store/products/products-store"

export default function ProductList() {
  const products = useProductsStore(state => state.products)
  
  return (
    <section className="flex flex-wrap gap-10 m-10 mt-4 transition justify-center">
      {
        products.map(product => <ProductCard key={product.id} product={product} />)
      }
    </section>
  )
}
