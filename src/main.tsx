import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { MantineProvider } from '@mantine/core'
import { theme } from './theme.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import './index.css'
import { Notifications } from '@mantine/notifications'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme} defaultColorScheme='auto'>
      <QueryClientProvider client={queryClient}>
        <Notifications />
        <App />
      </QueryClientProvider>
    </MantineProvider>
  </StrictMode>,
)
