import WebAppImage from '@/assets/web-app.svg?react'
import { AspectRatio, Box, Button, Center, Grid, Text, Title } from '@mantine/core'
import { useNavigate } from 'react-router'

const AdsHome = () => {
  const navigate = useNavigate()
  const onTryApp = () => {
    navigate('/app/login')
  }
  return (
    <Center>
      <Grid gutter="xl">
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Center h="100%">
            <Box>
              <Title mb={16}>Your Money, Finally Under Control</Title>
              <Text mb={16}>Browse our gallery and imagine how effortless managing your expenses can be.</Text>
              <Button onClick={onTryApp}>Try app</Button>
            </Box>
              
          </Center>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <AspectRatio>
            <WebAppImage/>
          </AspectRatio>
        </Grid.Col>
      </Grid>
    </Center>
  )
}

export default AdsHome