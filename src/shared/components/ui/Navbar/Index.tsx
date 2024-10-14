"use client"

import { 
  Navbar as Nav,
  NavbarBrand,
  NavbarMenuToggle
} from '@nextui-org/navbar'
import { FaCartShopping } from 'react-icons/fa6'

import { NAVBAR_ITEMS } from './constants/navbar.constants'

import NavbarList from './components/NavbarList/Index'
import { useUiStore } from '@/shared/store/ui/ui-store'

export default function Navbar() {
  const { openMenu, setOpenMenu } = useUiStore(state => state)

  return (
    <Nav onMenuOpenChange={setOpenMenu} className='bg-primary-color'>
      <NavbarBrand>
        <FaCartShopping color='white' fontSize={40} />
      </NavbarBrand>
      <NavbarMenuToggle
        aria-label={openMenu ? "Close menu" : "Open menu"}
        className="sm:hidden text-secondary-color"
      />
      <NavbarList items={NAVBAR_ITEMS} />
      <NavbarList items={NAVBAR_ITEMS} isMenu />
    </Nav>
  )
}
