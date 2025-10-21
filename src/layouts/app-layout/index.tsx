import ThemeToggleButton from "@/components/theme-toggle-button";
import {
  AppShell,
  AppShellFooter,
  AppShellHeader,
  AppShellMain,
  AppShellNavbar,
  Burger,
  Group
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "react-router";
import AppProfile from "./components/profile";
import AppNavbarLinks from "./components/navbar-links";

const AppLayout = () => {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      footer={{ height: 50 }}
      padding="md"
      transitionDuration={500}
      transitionTimingFunction="ease"
    >
      <AppShellHeader>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>
            Brand App
            <Group ml="xl" gap={16} visibleFrom="sm">
              <AppProfile/>
            </Group>
          </Group>
          <ThemeToggleButton/>
        </Group>
      </AppShellHeader>

      <AppShellNavbar py="md" px={4}>
        <AppNavbarLinks/>
      </AppShellNavbar>

      <AppShellMain>
        <Outlet/>
      </AppShellMain>

      <AppShellFooter p="sm">
        footer
      </AppShellFooter>
    </AppShell>
  )
}

export default AppLayout