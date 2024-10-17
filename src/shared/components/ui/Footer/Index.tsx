"use client"
import { useUiStore } from '@/shared/store/ui/ui-store'
import { FaInstagram } from 'react-icons/fa6'
import { usePathname } from 'next/navigation'

export default function Index() {
  const pathname = usePathname()
  const rotate = useUiStore(state => state.rotate)
  return (
    <footer className={`bg-primary-color text-secondary-color p-3 flex flex-col items-center ${!rotate && pathname === "/store" ? "w-[80%] float-right" : "w-full"}`}>
      <p className='pb-2'>
        © Todos los derechos reservados a Loopy
      </p>
      <a href="https://www.instagram.com/itsloopy_sc/profilecard/?igsh=MTB1MDNuM3ptbzV0Zg==" target='blank'>
        <FaInstagram fontSize={20} />
      </a>
    </footer>
  )
}
