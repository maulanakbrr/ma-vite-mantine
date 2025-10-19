import { Container } from '@mantine/core'
import HeaderAbout from './components/header'
import ContentAbout from './components/content'
import TeamAbout from './components/teams'

const About = () => {
  return (
    <Container>
      <HeaderAbout/>
      <ContentAbout/>
      <TeamAbout/>
    </Container>
  )
}

export default About