import { Button } from '@nextui-org/react'
import { Dispatch, SetStateAction } from 'react'

interface Props {
  quantity: number,
  setQuantity: Dispatch<SetStateAction<number>>
}

export default function Quantity({ quantity, setQuantity }: Props) {
  return (
    <div className='flex items-center justify-between mt-3'>
      <Button 
        size='sm'
        className='bg-white text-3xl hover:bg-red-600 hover:text-white'
        onClick={() => setQuantity(quantity != 0 ? quantity - 1 : quantity)}
      >
        -
      </Button>
      <p>{ quantity }</p>
      <Button 
        size='sm'
        className='bg-white text-3xl hover:bg-green-600 hover:text-white'
        onClick={() => setQuantity(quantity + 1)}
      >
        +
      </Button>
    </div>
  )
}