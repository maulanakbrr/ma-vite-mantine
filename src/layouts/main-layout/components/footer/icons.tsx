import { Flex, UnstyledButton } from '@mantine/core'
import { FOOTER_ICONS } from './constants'

const icons = FOOTER_ICONS.map(item => (
  <UnstyledButton key={item.key}>
    {item.icon}
  </UnstyledButton>
))

const LayoutFooterIcons = () => {
  return (
    <Flex gap={8}>
      {icons}
    </Flex>
  )
}

export default LayoutFooterIcons