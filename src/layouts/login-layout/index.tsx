import { AppShell, Burger, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Outlet } from 'react-router';
import HeaderLinks from '../main-layout/components/header-links';
import ThemeToggleButton from '@/components/theme-toggle-button';
import { loginMenuItems } from '@/routes/constants/login-menu-items';
import NavLinks from '../main-layout/components/nav-links';

const LoginLayout = () => {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ 
        width: 300, 
        breakpoint: 'sm', 
        collapsed: { desktop: true, mobile: !opened } 
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>
            Brand Title
            <Group ml="xl" gap={16} visibleFrom="sm">
              <HeaderLinks items={loginMenuItems}/>
            </Group>
          </Group>
          <ThemeToggleButton/>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md" px={4}>
        <NavLinks items={loginMenuItems} toggle={toggle}/>
      </AppShell.Navbar>
      
      <AppShell.Main >
        <Outlet/>
      </AppShell.Main>
    </AppShell>
  )
}

export default LoginLayout