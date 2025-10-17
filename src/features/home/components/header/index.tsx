import { Button, Center, Stack, Text, Title } from '@mantine/core'

const HeaderHome = () => {
  return (
    <Center h={570}>
      <Stack>
        <Title size="50px" ta="center">
          <Text size='50px' c="blue" fw={700}>Think, Plan and Track</Text>
          your money here
        </Title>
        <Text size="md" ta="center" mb={16}>You don't have to worry how to manage your money, we do it here</Text>
        <Center>
          <Button component='a' href='#about'>Get to know more</Button>
        </Center>
      </Stack>
    </Center>
  )
}

export default HeaderHome