import type { IMenuItem } from '@/routes/types'
import { UnstyledButton } from '@mantine/core'
import { type FC } from 'react'
import { NavLink } from 'react-router'

interface IHeaderLinksProps {
  items: IMenuItem[]
}

const HeaderLinks:FC<IHeaderLinksProps> = ({ items }) => {
  return (
    <>
      {
        items.map((item) => (
          <UnstyledButton key={item.key} component={NavLink} to={item.link ?? ""}>{item.label}</UnstyledButton>
        ))
      }
    </>
  )
}

export default HeaderLinks