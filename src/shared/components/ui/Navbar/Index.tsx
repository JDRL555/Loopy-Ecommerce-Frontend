"use client"

import { 
  Navbar as Nav,
  NavbarBrand,
  NavbarMenuToggle
} from '@nextui-org/navbar'
import { FaCartShopping } from 'react-icons/fa6'

import { NAVBAR_ITEMS } from './constants/navbar.constants'

import { useState } from 'react'
import NavbarList from './components/NavbarList/Index'

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<boolean>(false)

  const quantity = 0

  return (
    <Nav onMenuOpenChange={setOpenMenu} className='bg-primary-color'>
      <NavbarBrand>
        <FaCartShopping color='white' fontSize={40} />
      </NavbarBrand>
      <NavbarMenuToggle
        aria-label={openMenu ? "Close menu" : "Open menu"}
        className="sm:hidden text-secondary-color"
      />
      <NavbarList items={NAVBAR_ITEMS} quantity={quantity} />
      <NavbarList items={NAVBAR_ITEMS} quantity={quantity} isMenu />
    </Nav>
  )
}
