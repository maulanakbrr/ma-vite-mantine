import { Center, Stack, Text, Title } from '@mantine/core'

const HeaderGallery = () => {
  return (
    <Center h={400}>
      <Stack align='center'>
        <Title c="blue">See It in Action</Title>
        <Text>A collection of screenshots and previews from our app features</Text>
      </Stack>
    </Center>
  )
}

export default HeaderGallery