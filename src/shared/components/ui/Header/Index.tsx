"use client"

import { 
  Input, 
  Select, 
  SelectItem,
  Checkbox 
} from '@nextui-org/react'
import { FaSearch } from 'react-icons/fa'
import { COLORS, CURRENCIES, SIZES } from '@/shared/constants/product.constants'

export default function Header() {
  
  return (
    <header className='bg-secondary-color w-full p-10 mb-6'>
      <Input
        type='text'
        placeholder='Busca lo que necesites'
        size='lg'
        endContent={
          <FaSearch 
            color='grey'
            cursor={"pointer"}
          />
        }
      />
      <div className='flex flex-wrap gap-5 pt-5 items-center flex-1'>
        <Checkbox classNames={{ 
          base: "bg-gray-100 rounded-xl transition-all hover:bg-white ml-[0.1rem] w-[11rem] h-12", 
          label: "text-gray-500 w-[11rem] text-left"  
        }}>
          En oferta
        </Checkbox>
        <Select placeholder='Color' size='lg' className='w-[11.4rem]'>
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
      </div>
    </header>
  )
}
