import { Button, Card, Text } from "@mantine/core"
import TopTransactionsDateComboFilter from "./combo-box"
import { TopTransactionsList } from "./list"
import { APP_DASHBOARD_TOP_TRANSACTIONS_LIST } from "../../../dummy"


const AppDashboardTopTransactions = () => {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Text fw={600} mb={8} size="lg">
        Top Transactions
      </Text>
      <TopTransactionsDateComboFilter/>
      <TopTransactionsList
        data={APP_DASHBOARD_TOP_TRANSACTIONS_LIST}
      />
      <Button mt={10}>See More</Button>
    </Card>
  )
}



export default AppDashboardTopTransactions