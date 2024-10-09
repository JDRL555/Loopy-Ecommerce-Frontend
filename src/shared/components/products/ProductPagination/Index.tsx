import {
  Pagination
} from '@nextui-org/react'

interface Props {
  total: number
}

export default function ProductPagination({ total }: Props) {
  return (
    <Pagination 
      total={total} 
      variant='bordered'  
      showControls 
      className='flex justify-center w-full'
      classNames={{
        cursor: "bg-third-color",
      }}
      size='lg'
    />
  )
}