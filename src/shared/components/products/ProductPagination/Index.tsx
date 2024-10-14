import { useProductsStore } from '@/shared/store/products/products-store'
import {
  Pagination
} from '@nextui-org/react'

interface Props {
  total: number
}

export default function ProductPagination({ total }: Props) {
  const { setParams, params } = useProductsStore(state => state)

  return (
    <Pagination 
      total={total} 
      initialPage={1}
      variant='bordered'  
      showControls 
      className='flex justify-center w-full'
      classNames={{
        cursor: "bg-third-color",
      }}
      size='lg'
      page={params.page}
      onChange={page => setParams({ page })}
    />
  )
}