import { Grid, Title } from "@mantine/core"
import AppDashboardSummaryCard from "./components/cards/summary-card"
import { APP_DASHBOARD_RECENT_TRANSACTIONS_LIST, APP_DASHBOARD_SUMMARY_DATA } from "./dummy" 
import AppDashboardProgressSummaryWidget from "./components/widgets/progress-summary"
import AppDashboardTopTransactions from "./components/widgets/top-transactions"
import AppDashboardRecentTransactions from "./components/widgets/recent-transactions"

const AppDashboard = () => {
  return (
    <>
      <Title order={1} fw={500} mb={24}>Dashboard</Title> 
      <Grid mb={24}>
        {
          APP_DASHBOARD_SUMMARY_DATA.map((item) => (
            <Grid.Col span={{ base: 12, sm: 4 }}key={item.id}>
              <AppDashboardSummaryCard
                item={item}
              />
            </Grid.Col>
          ))
        }
      </Grid>
      
      <Grid mb={24}>
        <Grid.Col span={{ base: 12, sm: 8 }}>
          <AppDashboardProgressSummaryWidget/>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 4 }}>
          <AppDashboardTopTransactions/>
        </Grid.Col>
      </Grid>

      <Grid>
        <Grid.Col span={{ base: 12, sm: 8 }}>
          <AppDashboardRecentTransactions
            data={APP_DASHBOARD_RECENT_TRANSACTIONS_LIST}
          />
        </Grid.Col>
      </Grid>
    </>
  )
}

export default AppDashboard