import type { IMenuItem } from '@/routes/types'
import { NavLink } from '@mantine/core'
import { type FC } from 'react'
import { NavLink as RouterNavLink } from 'react-router'

interface INavLinksProps {
  items: IMenuItem[]
  toggle: () => void
}

const NavLinks:FC<INavLinksProps> = ({items, toggle}) => {
  return items.map((item) => (
    <NavLink key={item.key} component={RouterNavLink} to={item.link || ""} onClick={toggle} label={item.label}/>
  ))
}

export default NavLinks