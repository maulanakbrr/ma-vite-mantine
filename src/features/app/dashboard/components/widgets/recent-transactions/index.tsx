import { useState, useMemo } from "react";
import { DataTable, type DataTableSortStatus } from "mantine-datatable";
import {
  ActionIcon,
  Badge,
  Button,
  Card,
  Group,
  Text,
  TextInput,
} from "@mantine/core";
import { IconSearch, IconPencil, IconTrash, IconDownload } from "@tabler/icons-react";
import type { FC } from "react";
import type { TRecentTransactionItem } from "../../../types";

interface AppDashboardRecentTransactionsProps {
  data: TRecentTransactionItem[];
}

const AppDashboardRecentTransactions:FC<AppDashboardRecentTransactionsProps> = ({ data }) => {
  // --- Search ---
  const [search, setSearch] = useState("");

  const filteredRecords = useMemo(() => {
    return data.filter((item) => {
      const q = search.toLowerCase();
      return (
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.date.toLowerCase().includes(q)
      );
    });
  }, [search, data]);

  // --- Sorting ---
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
    columnAccessor: "date",
    direction: "desc",
  });

  const sortedRecords = useMemo(() => {
    return [...filteredRecords].sort((a, b) => {
      const accessor = sortStatus.columnAccessor as keyof TRecentTransactionItem;

      const aValue = a[accessor];
      const bValue = b[accessor];

      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortStatus.direction === "asc" ? aValue - bValue : bValue - aValue;
      }

      return sortStatus.direction === "asc"
        ? String(aValue).localeCompare(String(bValue))
        : String(bValue).localeCompare(String(aValue));
    });
  }, [filteredRecords, sortStatus]);

  // --- Pagination ---
  const PAGE_SIZE = 5;
  const [page, setPage] = useState(1);

  const paginatedRecords = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return sortedRecords.slice(start, start + PAGE_SIZE);
  }, [page, sortedRecords]);

  // --- CSV Export ---
  const exportCSV = () => {
    const header = "Date,Description,Category,Amount,Type\n";
    const rows = data
      .map(
        (t) =>
          `${t.date},${t.description},${t.category},${t.amount},${t.type}`
      )
      .join("\n");

    const blob = new Blob([header + rows], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "recent-transactions.csv";
    a.click();
  };

  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Text fw={600} mb={8} size="lg">
        Recent Transactions
      </Text>
      <div>
        {/* Header Tools */}
        <Group justify="space-between" mb="md">
          <TextInput
            placeholder="Search transactions..."
            leftSection={<IconSearch size={16} />}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            w={250}
          />

          <Button
            variant="light"
            leftSection={<IconDownload size={16} />}
            onClick={exportCSV}
          >
            Export CSV
          </Button>
        </Group>

        {/* DataTable */}
        <DataTable
          withTableBorder
          striped
          highlightOnHover
          minHeight={250}
          records={paginatedRecords}
          totalRecords={sortedRecords.length}
          recordsPerPage={PAGE_SIZE}
          page={page}
          onPageChange={setPage}
          sortStatus={sortStatus}
          onSortStatusChange={setSortStatus}
          noRecordsText={data.length > 0 ? "" : "No recent transactions"}
          noRecordsIcon={null}
          columns={[
            { accessor: "date", title: "Date", sortable: true, width: 120 },

            {
              accessor: "description",
              title: "Description",
              sortable: true,
              render: (row) => <strong>{(row as TRecentTransactionItem).description}</strong>,
            },
            {
              accessor: "category",
              title: "Category",
              sortable: true,
              width: 140,
              render: (row) => (
                <Badge variant="light" color="blue">
                  {(row as TRecentTransactionItem).category}
                </Badge>
              ),
            },

            {
              accessor: "amount",
              title: "Amount",
              textAlign: "right",
              sortable: true,
              width: 140,
              render: (row) => (
                <span
                  style={{
                    fontWeight: 600,
                    color: row.type === "income" ? "green" : "red",
                  }}
                >
                  {(row as TRecentTransactionItem).amount.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </span>
              ),
            },

            // Actions column
            {
              accessor: "actions",
              title: "",
              width: 90,
              render: (row) => (
                <Group gap={6}>
                  <ActionIcon variant="light" color="blue" onClick={() => console.log("Edit", row)}>
                    <IconPencil size={16} />
                  </ActionIcon>

                  <ActionIcon variant="light" color="red" onClick={() => console.log("Delete", row)}>
                    <IconTrash size={16} />
                  </ActionIcon>
                </Group>
              ),
            },
          ]}
        />
      </div>
    </Card>
  );
}

export default AppDashboardRecentTransactions