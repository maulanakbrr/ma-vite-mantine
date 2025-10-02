import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';

const ThemeToggleButton = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <ActionIcon variant='transparent' onClick={() => toggleColorScheme()}>
      { dark ? <IconSun color='#c9c9c9'/> : <IconMoon color='#000' stroke={1.5}/> }
    </ActionIcon>
  )
}

export default ThemeToggleButton