import { NavbarMenu } from "@nextui-org/react"
import { NavbarItem as NavItem } from "../../interfaces/navbar.interfaces"
import NavbarItem from "../NavbarItem/Index"

interface Props {
  items: NavItem[],
  isMenu?: boolean
}

export default function NavbarList({ items, isMenu = false }: Props) {
  if(isMenu) {
    return (
      <NavbarMenu className="bg-third-color">
        {
          items.map(
            (item, index) => 
              <NavbarItem 
                key={index} 
                item={item} 
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
              isMenu={isMenu} 
            />
        )
      }
    </div>
  )
}
