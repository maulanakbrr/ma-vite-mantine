import MoneyManager from '@/assets/people-with-money.svg?react'
import { Grid, Text, Title } from "@mantine/core"

const AboutHome = () => {
  return (
    <Grid id="about" gutter="lg" pt={60}>
      <Grid.Col 
        span={{ base: 12, md: 8}} 
        pr={{base: "10", md: "26"}}
      >
        <Title order={1} mb={16}>What is Brand</Title>
        <Text ta="justify" mb={16}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A similique eaque, porro veniam laborum perferendis ipsam quasi maxime ab minus architecto harum dolor! Aliquid ipsum dicta quis dolores minima sint?
        </Text>
        <Text ta="justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid repellat minus est consequuntur soluta odio minima voluptate molestias, consectetur ducimus ipsam quia nemo repellendus. Eos recusandae debitis totam beatae officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium necessitatibus iusto distinctio, enim deleniti qui delectus labore corporis? Voluptatibus, fugiat maiores saepe consectetur eius possimus aperiam molestiae earum asperiores nemo
        </Text>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 4}}>
        <MoneyManager className="w-full h-auto"/>
      </Grid.Col>
    </Grid>
  )
}

export default AboutHome