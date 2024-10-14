import Link from 'next/link'
import { NavbarMenuItem, NavbarItem as NavItem } from '@nextui-org/react'
import { NavbarItem as NavItemInterface } from '../../interfaces/navbar.interfaces'
import { useUiStore } from '@/shared/store/ui/ui-store'

interface Props {
  item: NavItemInterface,
  isMenu?: boolean
}

export default function NavbarItem({ item, isMenu = false }: Props) {

  const { quantity } = useUiStore(state => state)

  if(isMenu) {
    return (
      <NavbarMenuItem>
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
                `absolute top-[5.15rem] left-[2.3rem] ${quantity < 10 && 'pr-1'} text-primary-color text-xs`
              }>
                { quantity }
              </span>
            </div>
          }
          </Link>
      </NavbarMenuItem>
    )
  }

  return (
    <NavItem> 
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
    </NavItem>
  )
}
