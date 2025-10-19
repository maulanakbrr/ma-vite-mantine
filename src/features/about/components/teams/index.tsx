import { Box, Grid, Title } from '@mantine/core'
import { PersonCard } from './card'
import { TEAM_PEOPLE } from './constants'

const teamPeople = TEAM_PEOPLE.map((person) => (
  <Grid.Col span={{ base: 12, md: 3 }} key={person.name}>
    <PersonCard
      name={person.name}
      image={person.image}
      role={person.role}
    />
  </Grid.Col>
))

const TeamAbout = () => {
  return (
    <Box pt={120}>
      <Title order={1} ta="center" mb={24}>Meet our team</Title>
      <Grid gutter="xl">
        {teamPeople}
      </Grid>
    </Box>
  )
}

export default TeamAbout