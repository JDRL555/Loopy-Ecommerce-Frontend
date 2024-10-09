import { 
  Navbar as Nav,
  NavbarBrand,
  NavbarItem
} from '@nextui-org/navbar'
import { FaCartShopping } from 'react-icons/fa6'
import Link from 'next/link'

import { NAVBAR_ITEMS } from './constants/navbar.constants'

export default function Navbar() {
  const quantity = 0
  return (
    <Nav className='bg-primary-color'>
      <NavbarBrand>
        <FaCartShopping color='white' fontSize={40} />
      </NavbarBrand>
      <div className='flex w-1/2 justify-end items-center gap-5 box-border'>
        {
          NAVBAR_ITEMS.map((item, index) => (
            <NavbarItem key={index}> 
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
                      fontSize: 30,
                      className: "relative"
                    })
                  }
                  <span className={
                    `absolute top-[19px] right-[30px] ${quantity < 10 && 'pr-1'} text-primary-color text-xs`
                  }>
                    { quantity }
                  </span>
                </div>
              }
              </Link>
            </NavbarItem>
          ))
        }
      </div>
    </Nav>
  )
}
