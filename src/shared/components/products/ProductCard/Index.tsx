import { Product } from '@/shared/interfaces/models/Product.interface'
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Button
} from '@nextui-org/react'
import Quantity from './components/Quantity/Index'
import { useState } from 'react'
import { useUiStore } from '@/shared/store/ui/ui-store'

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const addQuantity = useUiStore(state => state.addQuantity)
  const [quantityProducts, setQuantityProducts] = useState<number>(0)

  return (
    <Card isPressable className='transition-all hover:scale-105 p-5'>
      <CardBody>
        <Image 
          src={ product.img_url }
          alt='product_img'
          className='object-cover'
          width="100%"
        />
      </CardBody>
      <CardFooter className='block text-left'>
        <h2 className='text-ellipsis w-full overflow-hidden whitespace-nowrap'>
          { product.name }
        </h2>
        <p className='text-lg mt-3'>
          { product.price }$
        </p>
        <Quantity quantity={quantityProducts} setQuantity={setQuantityProducts} />
        <Button 
          className='w-full bg-primary-color text-secondary-color mt-5'
          onClick={() => addQuantity(quantityProducts)}
        >
          Agregar al carrito
        </Button>
      </CardFooter>
    </Card>
  )
}