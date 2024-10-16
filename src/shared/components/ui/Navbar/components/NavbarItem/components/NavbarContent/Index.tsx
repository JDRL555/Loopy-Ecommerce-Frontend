import Link from "next/link"
import { NavbarItem } from "@/shared/components/ui/Navbar/interfaces/navbar.interfaces"
import { useUiStore } from "@/shared/store/ui/ui-store"

interface Props {
  item: NavbarItem,
  isMenu?: boolean
}

export default function NavbarContent({ item, isMenu = false }: Props) {
  const { quantity } = useUiStore(state => state)

  const navbarSize = 
  quantity < 10 
  ? "top-[0.85rem] right-[2.23rem]" 
  : quantity >= 10 && quantity < 100 
  ? "top-[0.85rem] right-[2.1rem]" 
  : "top-[0.85rem] right-[1.9rem]"

  const menuSize = 
  quantity < 10 
  ? "top-[4.8rem] left-[2.5rem]" 
  : quantity >= 10 && quantity < 100 
  ? "top-[4.8rem] left-[2.4rem]" 
  : "top-[4.8rem] left-[2.2rem]"

  const size = isMenu ? menuSize : navbarSize

  return (
    <Link href={item.link} className='text-secondary-color hover:text-light-secondary-color font-bold transition'>
      {
        typeof item.label == 'string'
        ?
        item.label
        :
        <div>
          {
            item.label({ 
              color: "text-secondary-color", 
              fontSize: 36,
              className: "relative"
            })
          }
          <div className={
            `absolute ${size}`}>
            <span className={
              `text-primary-color text-xs`
            }>
              { quantity }
            </span>
          </div>
        </div>
      }
    </Link>
  )
}
