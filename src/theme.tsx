import { createTheme, virtualColor  } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'blue',
  primaryShade: 8,
  colors: {
    primary: virtualColor({
      name: 'primary',
      dark: 'teal',
      light: 'blue',
    }),
  },
});