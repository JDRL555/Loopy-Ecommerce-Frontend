"use client"

import { 
  Navbar as Nav,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarContent,
  Input,
  NavbarItem
} from '@nextui-org/react'
import { FaCartShopping } from 'react-icons/fa6'
import { FaSearch } from 'react-icons/fa'

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
      <NavbarContent className='w-full mx-5' justify='center'>
        <Input
          type='text'
          placeholder='Busca lo que necesites'
          size='lg'
          endContent={
            <FaSearch 
              color='grey'
              cursor={"pointer"}
            />
          }
        />
        <NavbarItem>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenuToggle
        aria-label={openMenu ? "Close menu" : "Open menu"}
        className="sm:hidden text-secondary-color"
      />
      <NavbarList items={NAVBAR_ITEMS} />
      <NavbarList items={NAVBAR_ITEMS} isMenu />
    </Nav>
  )
}
