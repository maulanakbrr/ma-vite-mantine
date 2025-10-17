import HeaderHome from './components/header'
import AboutHome from './components/about'
import { Container } from '@mantine/core'
import FeaturesHome from './components/features'
import TestimoniesHome from './components/testimonies'

const Home = () => {
  return (
    <Container>
      <HeaderHome/>
      <AboutHome/>
      <FeaturesHome/>
      <TestimoniesHome/>
    </Container>
  )
}

export default Home