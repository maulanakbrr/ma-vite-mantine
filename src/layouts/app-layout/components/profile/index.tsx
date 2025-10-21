import { ActionIcon, Avatar, Flex, Menu } from '@mantine/core'
import { IconLogout, IconSettings, IconUser } from '@tabler/icons-react'

const AppProfile = () => {
  return (
    <Flex gap={8}>
      <Flex align="center" fw={500}>Welcome, people</Flex>
      <Menu shadow="md">
        <Menu.Target>
          <ActionIcon
            radius="xl"
            variant="light"
            size="lg"
          >
            <Avatar
              src="https://i.pravatar.cc/40"
              radius="xl"
              size={30}
            />
          </ActionIcon>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Profile</Menu.Label>
          <Menu.Item leftSection={<IconUser size={16} />}>My Account</Menu.Item>
          <Menu.Item leftSection={<IconSettings size={16} />}>Settings</Menu.Item>
          <Menu.Divider />
          <Menu.Item color="red" leftSection={<IconLogout size={16} />}>
            Logout
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Flex>
  )
}

export default AppProfile