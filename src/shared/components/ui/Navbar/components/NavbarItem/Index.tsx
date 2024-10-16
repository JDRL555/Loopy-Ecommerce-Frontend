import { NavbarItem as NavItem, NavbarMenuItem } from '@nextui-org/react'
import { NavbarItem as NavItemInterface } from '../../interfaces/navbar.interfaces'
import NavbarContent from './components/NavbarContent/Index'

interface Props {
  item: NavItemInterface,
  isMenu?: boolean
}

export default function NavbarItem({ item, isMenu = false }: Props) {
  if(isMenu) {
    return (
      <NavbarMenuItem>
        <NavbarContent item={item} isMenu />
      </NavbarMenuItem>
    )
  }

  return (
    <NavItem> 
      <NavbarContent item={item} />
    </NavItem>
  )
}
