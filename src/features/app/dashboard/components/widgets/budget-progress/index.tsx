import { Box, Card, Progress, Stack, Text } from '@mantine/core'
import { APP_DASHBOARD_BUDGET_PROGRESS_LIST } from '../../../dummy'
import { formatToIDR } from '@/utils/currency'

const AppDashboardBudgetProgress = () => {
  const getPercent = (num1: number, num2: number): number => {
    return (num2*100) / num1
  }
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Text fw={600} mb={2} size="lg">
        Budget Progress
      </Text>
      <Text mb={16}>
        Monitor your expenses to stay within your budget
      </Text>

      <Stack mih={275}>
        {
          APP_DASHBOARD_BUDGET_PROGRESS_LIST.map((item) => (
            <Box key={item.id}>
              <Text mb={4} fw={500}>{item.name}</Text>
              <Text size='sm' mb={8}>{`${formatToIDR(item.use)}/${formatToIDR(item.budget)}`}</Text>
              <Progress value={getPercent(item.budget, item.use)}/>
            </Box>
          ))

        }
      </Stack>
    </Card>
  )
}

export default AppDashboardBudgetProgress