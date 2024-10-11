import { IconType } from "react-icons";
import { NavbarItem } from "../interfaces/navbar.interfaces";
import { FaCartShopping } from 'react-icons/fa6'

export const NAVBAR_ITEMS: NavbarItem[] = [
  {
    link: "/",
    label: "Home"
  },
  {
    link: "/store",
    label: "Store"
  },
  {
    link: "/store/cart",
    label: FaCartShopping as IconType
  }
]