"use client"

import { 
  Slider, 
  Select, 
  SelectItem,
  Checkbox 
} from '@nextui-org/react'
import { IoIosArrowBack } from "react-icons/io";
import { COLORS, CURRENCIES, SIZES } from '@/shared/constants/product.constants'
import { useUiStore } from '@/shared/store/ui/ui-store';
import { useProductsStore } from '@/shared/store/products/products-store';

export default function Sidebar() {
  const { rotate, handleRotate } = useUiStore(state => state)
  const categories = useProductsStore(state => state.categories)
  
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
      <Select placeholder='Categoria' size='lg' className='w-[11.4rem] p-0'>
        {
          categories.map(category => (
            <SelectItem key={category.id}>
              { category.name }
            </SelectItem>
          ))
        }
      </Select>
      <Select placeholder='Color' size='lg' className='w-[11.4rem] p-0'>
        {
          Object.values(COLORS).map(color => (
            <SelectItem key={color}>
              { color }
            </SelectItem>
          ))
        }
      </Select>
      <Select placeholder="Tamaños" size='lg' className='w-[11.4rem]'>
        {
          Object.values(SIZES).map(size => (
            <SelectItem key={size}>
              { size }
            </SelectItem>
          ))
        }
      </Select>
      <Slider 
        label="Rango de precio"
        step={10} 
        minValue={0} 
        maxValue={500} 
        defaultValue={[0, 300]} 
        formatOptions={{style: "currency", currency: "USD"}}
        className="max-w-md bg-gray-100 p-3 rounded-lg text-gray-500"
        classNames={{
          filler: "bg-third-color",
          mark: "text-secondary-color"
        }}
        renderThumb={(props) => (
          <div
            {...props}
            className='group p-1 top-1/2 bg-third-color border-small border-default-200 dark:border-default-400/50 shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing'
          >
            <span className='transition-transform shadow-small bg-secondary-color rounded-full w-5 h-5 block group-data-[dragging=true]:scale-80'></span>
          </div>
        )}
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
