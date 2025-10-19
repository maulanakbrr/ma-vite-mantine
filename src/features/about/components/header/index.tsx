import AnalysisImage from '@/assets/analysis.svg?react'
import { Grid, Stack, Text, Title } from "@mantine/core"

const HeaderAbout = () => {
  return (
    <Grid gutter="lg" pt={80}>
      <Grid.Col
        span={{ base: 12, md: 6}} 
        pr={{base: "10", md: "26"}}
      >
        <AnalysisImage className="w-full h-auto"/>
      </Grid.Col>
      <Grid.Col
         span={{ base: 12, md: 6}}
         ta="right"
      >
        <Stack gap={8} justify="center" h="100%">
          <Title size={50}>About Us</Title>
          <Text size="xl">Track your money and make your life easier</Text>
          <Text size="md">
            We created this app to make money management easier for everyone—individuals, couples, and families. No complex finance terms, no confusing features—just a simple tool to help you track spending, build better money habits, and reach your financial goals with confidence.
          </Text>
        </Stack>
      </Grid.Col>
    </Grid>
  )
}

export default HeaderAbout