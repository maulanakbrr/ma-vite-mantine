import { Card, Text } from "@mantine/core"
import { AreaChart } from '@mantine/charts';
import { APP_DASHBOARD_PROGRESS_SUMMARY_DATA } from "../../../dummy";
import { formatToIDRShort } from "@/utils/currency";

const AppDashboardProgressSummaryWidget = () => {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Text fw={600} mb={4} size="lg">
        Cash Flow Breakdown
      </Text>
      <Text mb="sm" size="sm">
        your yearly incomes vs expenses
      </Text>

      <AreaChart
        h={300}
        data={APP_DASHBOARD_PROGRESS_SUMMARY_DATA}
        dataKey="month"
        series={[
          { name: 'Income', color: 'green.6' },
          { name: 'Expense', color: 'red.6' },
        ]}
        valueFormatter={(v) => formatToIDRShort(v)}
        curveType="monotone"
        tooltipAnimationDuration={200}
        withLegend
        withGradient
        withXAxis
        withYAxis
        yAxisLabel="Amount (IDR)"
        yAxisProps={{
          tickMargin: -8
        }}
      />
    </Card>
  )
}

export default AppDashboardProgressSummaryWidget