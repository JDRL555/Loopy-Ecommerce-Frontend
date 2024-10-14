import { Button } from "@nextui-org/react"
import ProductCard from "../ProductCard/Index"
import { useProductsStore } from "@/shared/store/products/products-store"
import { IoReload } from "react-icons/io5";

export default function ProductList() {
  const { products, handleReload } = useProductsStore(state => state)
  
  return (
    <>
      <Button 
        onClick={handleReload} 
        className="float-right mr-10 bg-third-color text-secondary-color [&>*]:transition [&>*]:hover:rotate-[360deg]"
      >
        <IoReload />
      </Button>
      <div className="grid grid-cols-4 gap-10 m-10 mt-16">
        {
          products.map(product => <ProductCard key={product.id} product={product} />)
        }
      </div>
    </>
  )
}
