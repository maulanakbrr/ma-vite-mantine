import { Box, Divider, Flex, SimpleGrid, Stack, Text, Title, UnstyledButton } from '@mantine/core'
import { NavLink } from 'react-router'
import { FOOTER_NAV } from './constants'
import LayoutFooterIcons from './icons'

const footerNav = FOOTER_NAV.map(item => (
  <Box key={item.key} ta="right">
    <UnstyledButton component={NavLink} to={item.link}>
      <Text component='span' size='sm'>
        {item.text}
      </Text>
    </UnstyledButton>
  </Box>
))

const LayoutFooter = () => {
  return (
    <Stack px="md" pt="sm" pb="lg">
      <Flex align="center" justify="space-between">
        <Title order={2}>Brand</Title>
        <Text size='sm'>this is just footer, nothing else</Text>
      </Flex>
      <Divider/>
      <SimpleGrid  cols={2}>
        <Stack gap="sm">
          <Text size='sm' ta="justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aliquid nulla qui totam ducimus eius nobis mollitia recusandae quo similique delectus quod rerum autem est repellendus corrupti, illum vel ut.
          </Text>
          <LayoutFooterIcons/>
        </Stack>
        <Stack>
          {footerNav}
        </Stack>
      </SimpleGrid>
    </Stack>
  )
}

export default LayoutFooter