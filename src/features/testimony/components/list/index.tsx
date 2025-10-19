import { Grid } from '@mantine/core'
import { TESTIMONIES_LIST } from '../../constants'
import TestimonyCard from '../card'

const testimonyList = TESTIMONIES_LIST.map((item) => (
  <Grid.Col span={{ base: 12, md: 4 }}>
    <TestimonyCard key={item.name} item={item}/>
  </Grid.Col>
))

const ListTestimony = () => {
  return (
    <Grid>
      {testimonyList}
    </Grid>
  )
}

export default ListTestimony