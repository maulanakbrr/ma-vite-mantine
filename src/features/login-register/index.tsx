import { Grid, Stack, Title } from '@mantine/core'
import LoginFormWrapper from './components/form-wrapper'
import SimpleLoginForm from './components/forms/simple-login'
import { useLocation } from 'react-router'
import SimpleRegisterForm from './components/forms/simple-register'

const LoginRegister = () => {
  const { pathname } = useLocation()
  const isRegister = pathname.includes('register')
  return (
    <>
      <Grid>
        <Grid.Col span={{ base: 12, sm: 6}}>
          <LoginFormWrapper>
            <Stack>
              <Title ta="left" order={1} w={340} mx="auto">
                Lorem ipsum dolor sit amet consectetur.
              </Title>
              <Title ta='left' order={4} w={340} mx="auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus molestias consequuntur est repellendus quos quidem totam mollitia laudantium enim suscipit.
              </Title>
            </Stack>
          </LoginFormWrapper>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6}}>
          <LoginFormWrapper>
            {
              isRegister ? (
                <SimpleRegisterForm/>
              ) : (
                <SimpleLoginForm/>
              )
            }
          </LoginFormWrapper>
        </Grid.Col>
      </Grid>
    </>
  )
}

export default LoginRegister