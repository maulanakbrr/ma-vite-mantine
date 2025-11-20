import { Stack, Group, Text, Divider } from "@mantine/core";

type TransactionItem = {
  label: string;
  description: string;
  amount: string;
};

interface TopTransactionsListProps {
  data: TransactionItem[];
}

export function TopTransactionsList({ data }: TopTransactionsListProps) {
  return (
    <Stack gap="sm" mt={16}>
      {data.map((item, index) => (
        <Stack key={index} gap={4}>
          <Group justify="space-between" align="flex-start">
            <div>
              <Text fw={600}>{item.label}</Text>
              <Text size="sm" c="dimmed">{item.description}</Text>
            </div>

            <Text fw={600} c="red.6">{item.amount}</Text>
          </Group>

          {index < data.length - 1 && <Divider />}
        </Stack>
      ))}
    </Stack>
  );
}