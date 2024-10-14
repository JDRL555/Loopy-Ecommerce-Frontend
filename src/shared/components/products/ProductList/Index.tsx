import ProductCard from "../ProductCard/Index"
import { useProductsStore } from "@/shared/store/products/products-store"

export default function ProductList() {
  const products = useProductsStore(state => state.products)
  
  return (
    <div className="grid grid-cols-4 gap-10 m-10">
      {
        products.map(product => <ProductCard key={product.id} product={product} />)
      }
    </div>
  )
}
