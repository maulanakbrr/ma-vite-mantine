import { Avatar, Box, Card, Divider, Flex, Text } from '@mantine/core';
import { IconQuote } from '@tabler/icons-react';
import { type FC } from 'react';

interface ITestimonyCardProps {
  item: {
    name: string;
    role: string;
    image: string;
    testimony: string;
  }
}

const TestimonyCard:FC<ITestimonyCardProps> = ({item}) => {
  const { name, role, image, testimony } = item

  return (
    <Card>
      <Box>
        <IconQuote/>
      </Box>
      <Text mb={16} h={150}>{testimony}</Text>
      <Divider/>
      <Flex gap={16} align="center">
        <Avatar
          src={image}
          radius="xl"
          size={30}
        />
        <Box>
          <Text>{name}</Text>
          <Text size='sm' c="gray.6">{role}</Text>
        </Box>
      </Flex>
    </Card>
  )
}

export default TestimonyCard