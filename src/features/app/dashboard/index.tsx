import { Grid, Title } from "@mantine/core"
import AppDashboardSummaryCard from "./components/cards/summary-card"
import { APP_DASHBOARD_SUMMARY_DATA } from "./dummy" 

const AppDashboard = () => {
  return (
    <>
      <Title order={1} fw={500} mb={16}>Dashboard</Title> 
      <Grid>
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
    </>
  )
}

export default AppDashboard