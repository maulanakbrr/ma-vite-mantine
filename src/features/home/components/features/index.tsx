import { Accordion, Box, Grid, Text, Title } from '@mantine/core'
import { FEATURES_BENEFITS_DATA } from './constants'

const featuresItems = FEATURES_BENEFITS_DATA.map((item) => (
  <Accordion.Item key={item.value} value={item.value}>
    <Accordion.Control>{item.title}</Accordion.Control>
    <Accordion.Panel>{item.description}</Accordion.Panel>
  </Accordion.Item>
))

const FeaturesHome = () => {
  return (
    <Box h={500} pt={100}>

      <Grid gutter="lg" >
        <Grid.Col
          span={{ base: 12, md: 4 }}
          pr={{ base: 10, md: 26 }}
        >
          <Title order={2} mb={16}>What will you get</Title>
          <Text ta="left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, debitis? Non voluptates, dolores ratione culpa inventore ut mollitia nam quidem.
          </Text>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 8}}>
          <Accordion mt={{base: 0, md:38 }}>
            {featuresItems}
          </Accordion>
        </Grid.Col>
      </Grid>
    </Box>
  )
}

export default FeaturesHome