// navLinks.ts
import {
  IconLayoutDashboard,
  IconWallet,
  IconChartPie,
  IconHistory,
} from "@tabler/icons-react";

export const NAV_LINKS = [
  {
    label: "Dashboard",
    icon: IconLayoutDashboard,
    path: "/app/dashboard",
  },
  {
    label: "Money Tracking",
    icon: IconWallet,
    children: [
      { label: "Expenses", path: "/app/money-tracking/expenses" },
      { label: "Income", path: "/app/money-tracking/income" },
    ],
  },
  {
    label: "Budgeting",
    icon: IconChartPie,
    path: "/app/budgeting",
  },
  {
    label: "Transaction History",
    icon: IconHistory,
    path: "/app/transactions",
  },
];
