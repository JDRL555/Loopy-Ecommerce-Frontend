import { NavbarMenu } from "@nextui-org/react"
import { NavbarItem as NavItem } from "../../interfaces/navbar.interfaces"
import NavbarItem from "../NavbarItem/Index"

interface Props {
  items: NavItem[],
  quantity: number,
  isMenu?: boolean
}

export default function NavbarList({ items, quantity, isMenu = false }: Props) {

  if(isMenu) {
    return (
      <NavbarMenu className="bg-third-color">
        {
          items.map(
            (item, index) => 
              <NavbarItem 
                key={index} 
                item={item} 
                quantity={quantity} 
                isMenu={isMenu} 
              />
          )
        }
      </NavbarMenu>
    )
  }

  return (
    <div className='sm:flex hidden w-1/2 justify-end items-center gap-5 box-border'>
      {
        items.map(
          (item, index) => 
            <NavbarItem 
              key={index} 
              item={item} 
              quantity={quantity} 
              isMenu={isMenu} 
            />
        )
      }
    </div>
  )
}
