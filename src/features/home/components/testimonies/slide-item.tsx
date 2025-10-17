import { Avatar, Blockquote, Center, Flex } from '@mantine/core';
import { type FC } from 'react';

interface ITestimonyItemProps {
  item: {
    name: string;
    role: string;
    testimony: string;
  }
}

const TestimonyItem:FC<ITestimonyItemProps> = ({item}) => {
  const { name, role, testimony } = item
  return (
    <Center h="100%" px={64}>
      <Blockquote color="blue" cite={`- ${name} , ${role}`}>
        <Flex gap={16}>
          <Avatar
            src="https://i.pravatar.cc/100"
            radius="xl"
            size={30}
          />
          {testimony}
        </Flex>
      </Blockquote>
    </Center>
  )
}

export default TestimonyItem