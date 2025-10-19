import { Grid, Text, Title } from '@mantine/core'

const ContentAbout = () => {
  return (
    <Grid gutter="xl" pt={120}>
      <Grid.Col span={{ base: 12, md: 6 }}>
        <Title order={2}>Our Vision</Title>
        <Text ta="justify">
          To make financial peace accessible to everyone by providing a simple yet powerful tool that helps people stay in control of their money. We believe personal finance shouldn’t be complicated or stressful—it should be clear, manageable, and empowering for both individuals and families.
        </Text>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6 }}>
        <Title order={2}>Our Mission</Title>
        <Text ta="justify">
          To help people build better financial habits through everyday simplicity. Our app is designed with a user-first experience in mind—no complex finance terms, no unnecessary features. Just practical tools that help users track spending, stay organized, and achieve financial goals step by step with confidence.
        </Text>
      </Grid.Col>
    </Grid>
  )
}

export default ContentAbout