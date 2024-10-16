"use client"

import { 
  Input, 
  Select, 
  SelectItem,
  Checkbox 
} from '@nextui-org/react'
import { IoIosArrowBack } from "react-icons/io";
import { COLORS, CURRENCIES, SIZES } from '@/shared/constants/product.constants'
import { useUiStore } from '@/shared/store/ui/ui-store';

export default function Sidebar() {
  const { rotate, handleRotate } = useUiStore(state => state)
  return (
    <aside className={
      `bg-secondary-color w-[20%] h-[90vh] fixed p-10 mb-6 flex flex-col justify-between transition duration-300 ${rotate && "-translate-x-56"}`
    }>
      <IoIosArrowBack 
        className={
          `absolute top-2 right-1 cursor-pointer text-primary-color transition ${rotate && "rotate-[180deg]"}`
        }
        onClick={handleRotate} 
      />
      <Checkbox classNames={{ 
        base: "bg-gray-100 rounded-xl transition-all hover:bg-white ml-[0.1rem] w-[11.3rem] h-12", 
        label: "text-gray-500 w-[11rem] text-left"  
      }}>
        En oferta
      </Checkbox>
      <Select placeholder='Color' size='lg' className='w-[11.4rem] p-0'>
        {
          Object.values(COLORS).map(color => (
            <SelectItem key={color}>
              { color }
            </SelectItem>
          ))
        }
      </Select>
      <Select placeholder="Tamanos" size='lg' className='w-[11.4rem]'>
        {
          Object.values(SIZES).map(size => (
            <SelectItem key={size}>
              { size }
            </SelectItem>
          ))
        }
      </Select>
      <Input
        type='number'
        placeholder='Precio minimo'
        size='lg'
        className='w-[11.4rem]'
      />
      <Input
        type='number'
        placeholder='Precio maximo'
        size='lg'
        className='w-[11.4rem]'
      />
      <Select placeholder="Moneda" size='lg' className='w-[11.4rem]'>
        {
          Object.values(CURRENCIES).map(currency => (
            <SelectItem key={currency}>
              { currency }
            </SelectItem>
          ))
        }
      </Select>
    </aside>
  )
}
