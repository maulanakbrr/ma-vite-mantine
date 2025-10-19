import HeaderHome from './components/header'
import AboutHome from './components/about'
import { Container } from '@mantine/core'
import FeaturesHome from './components/features'
import TestimoniesHome from './components/testimonies'
import AdsHome from './components/footer'

const Home = () => {
  return (
    <Container>
      <HeaderHome/>
      <AboutHome/>
      <FeaturesHome/>
      <TestimoniesHome/>
      <AdsHome/>
    </Container>
  )
}

export default Home