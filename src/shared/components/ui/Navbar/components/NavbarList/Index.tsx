import { NavbarMenu, NavbarContent  } from "@nextui-org/react"
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
    <NavbarContent className='sm:flex hidden' justify="end">
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
    </NavbarContent>
  )
}
