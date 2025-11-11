import { Box, Flex, Text } from '@mantine/core'
import { type FC } from 'react'
import type { TAppDashboardSummaryItem } from '../../types'
import { formatToIDR } from '@/utils/currency'

interface IAppDashboardSummaryCardProps {
  item: TAppDashboardSummaryItem;
}

const AppDashboardSummaryCard:FC<IAppDashboardSummaryCardProps> = ({item}) => {
  const bgColor = item.color || 'gray.7'
  return (
    <Box bg={bgColor} px={16} py={16} bdrs={8}>
      <Flex gap={8} mb={16}>
        <Flex align="center">{item.icon}</Flex> <Text c="white" size='lg'>{item.text}</Text>
      </Flex>
      
      <Text c="white" size='xl'>{formatToIDR(item.value)}</Text>
    </Box>
  )
}

export default AppDashboardSummaryCard