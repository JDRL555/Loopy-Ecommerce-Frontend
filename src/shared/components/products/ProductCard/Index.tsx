import { Product } from '@/shared/interfaces/models/Product.interface'
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Button,
  Checkbox,
  Input
} from '@nextui-org/react'
import Quantity from './components/Quantity/Index'
import { useState } from 'react'
import { useUiStore } from '@/shared/store/ui/ui-store'

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const { addQuantity, rotate } = useUiStore(state => state)
  const [quantityProducts, setQuantityProducts] = useState<number>(0)
  const [quantityByMayor, setQuantityByMayor] = useState<string>('')
  const [buyByMayor, setBuyByMayor] = useState<boolean>(false)

  return (
    <Card 
      isPressable={!buyByMayor} 
      className={`transition-all hover:scale-105 p-5 h-[35rem] ${rotate ? "w-[16rem]" : "w-[17.7rem]"}`}
    >
      <CardBody className='overflow-y-hidden'>
        <Image 
          src={ product.img_url }
          alt='product_img'
          width="300px"
        />
      </CardBody>
      <CardFooter className='block text-left'>
        <h2 className='text-ellipsis w-full overflow-hidden whitespace-nowrap'>
          { product.name }
        </h2>
        <p className='text-lg mt-3'>
          { product.price }$
        </p>
        {
          buyByMayor
          ?
          <Input 
            type='number'
            min={12}
            value={quantityByMayor}
            onValueChange={setQuantityByMayor}
            placeholder='Agrega la cantidad que deseas vender al mayor'
          />
          :
          <Quantity quantity={quantityProducts} setQuantity={setQuantityProducts} />
        }
        <Button 
          className='w-full bg-primary-color text-secondary-color mt-5'
          onClick={() => addQuantity(parseInt(quantityByMayor) | quantityProducts)}
        >
          Agregar al carrito
        </Button>
        {
          quantityProducts >= 12   
          &&
          <Checkbox
            isSelected={buyByMayor}
            onValueChange={setBuyByMayor}
          >
            ¿Quieres comprar al mayor?
          </Checkbox>

        }
      </CardFooter>
    </Card>
  )
}