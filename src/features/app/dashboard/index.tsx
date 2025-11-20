import { Grid, Title } from "@mantine/core"
import AppDashboardSummaryCard from "./components/cards/summary-card"
import { APP_DASHBOARD_SUMMARY_DATA } from "./dummy" 
import AppDashboardProgressSummaryWidget from "./components/widgets/progress-summary"

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
      <Grid>
        <Grid.Col span={{ base: 12, sm: 8 }}>
          <AppDashboardProgressSummaryWidget/>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 4 }}>
          
        </Grid.Col>
      </Grid>
    </>
  )
}

export default AppDashboard