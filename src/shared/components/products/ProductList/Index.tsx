import { Product } from "@/shared/interfaces/models/Product.interface"
import ProductCard from "../ProductCard/Index"

interface Props {
  products: Product[]
}

export default function ProductList({ products }: Props) {
  return (
    <div className="grid grid-cols-4 gap-10 m-10">
      {
        products.map(product => <ProductCard key={product.id} product={product} />)
      }
    </div>
  )
}
