import { menuItems } from "@/routes/constants/menu-items";
import {
  AppShell,
  AppShellFooter,
  AppShellHeader,
  AppShellMain,
  AppShellNavbar,
  Burger,
  Group
} from "@mantine/core";
import { useDisclosure, useHeadroom } from '@mantine/hooks';
import { Outlet } from 'react-router';
import HeaderLinks from "./components/header-links";
import NavLinks from "./components/nav-links";
import ThemeToggleButton from "@/components/theme-toggle-button";

const MainLayout = () => {
  const [opened, { toggle }] = useDisclosure();
  const pinned = useHeadroom({ fixedAt: 120 });

  return (
    <AppShell
      header={{ height: 60, collapsed: !pinned }}
      navbar={{ 
        width: 300, 
        breakpoint: 'sm', 
        collapsed: { desktop: true, mobile: !opened } 
      }}
      padding="md"
      footer={{ height: 50 }}
      transitionDuration={500}
      transitionTimingFunction="ease"
    >
      <AppShellHeader>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>
            Header
            <Group ml="xl" gap={16} visibleFrom="sm">
              <HeaderLinks items={menuItems}/>
            </Group>
          </Group>
          <ThemeToggleButton/>
        </Group>
      </AppShellHeader>

      <AppShellNavbar py="md" px={4}>
        <NavLinks items={menuItems} toggle={toggle}/>
      </AppShellNavbar>

      <AppShellMain pt="calc(var(--app-shell-header-height) + 16px)">
        <Outlet/>
      </AppShellMain>

      <AppShellFooter p="sm">
        <div className="flex justify-center font-bold">
          Some Copyright
        </div>
      </AppShellFooter>
    </AppShell>
  )
}

export default MainLayout