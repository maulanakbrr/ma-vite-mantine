import { Center } from '@mantine/core'
import { type FC, type ReactNode } from 'react'

interface ILoginFormWrapper {
  children: ReactNode
}

const LoginFormWrapper:FC<ILoginFormWrapper> = ({children}) => {
  return (
    <Center mih='calc(100vh - 92px)'>{children}</Center>
  )
}

export default LoginFormWrapper