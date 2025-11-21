import { IconMoneybagMinus, IconMoneybagPlus, IconPig } from "@tabler/icons-react";
import type { TAppDashboardSummaryItem, TRecentTransactionItem } from "./types";

export const APP_DASHBOARD_SUMMARY_DATA:TAppDashboardSummaryItem[] = [
  {
    id: 'total-income',
    text: 'Total Income',
    value: 5000000,
    icon: <IconMoneybagPlus color="#fff"/>,
    color: "green.7"
  },
  {
    id: 'total-expenses',
    text: 'Total Expenses',
    value: 2000000,
    icon: <IconMoneybagMinus color="#fff"/>,
    color: "red.7"
  },
  {
    id: 'current-balance',
    text: 'Current Balance',
    value: 3000000,
    icon: <IconPig color="#fff"/>,
    color: "blue.7"
  },
]

export const APP_DASHBOARD_PROGRESS_SUMMARY_DATA = [
  { month: 'Jan', Income: 8000000, Expense: 5000000 },
  { month: 'Feb', Income: 9000000, Expense: 7000000 },
  { month: 'Mar', Income: 8500000, Expense: 4000000 },
  { month: 'Apr', Income: 12000000, Expense: 8000000 },
  { month: 'May', Income: 10000000, Expense: 6000000 },
  { month: 'Jun', Income: 9500000, Expense: 7000000 },
  { month: 'Jul', Income: 11000000, Expense: 9000000 },
  { month: 'Aug', Income: 10500000, Expense: 7500000 },
  { month: 'Sep', Income: 11500000, Expense: 8500000 },
  { month: 'Oct', Income: 12000000, Expense: 9500000 },
  { month: 'Nov', Income: 13000000, Expense: 10000000 },
  { month: 'Dec', Income: 14000000, Expense: 11000000 },
]

export const APP_DASHBOARD_TOP_TRANSACTIONS_COMBO_BOX_OPTIONS = [
  {
    label: 'Date',
    value: 'DATE'
  },
  {
    label: 'Month',
    value: 'MONTH'
  },
  {
    label: 'Year',
    value: 'YEAR'
  },
];

export const APP_DASHBOARD_TOP_TRANSACTIONS_LIST = [
  {
    label: "Highest Income",
    description: "Payment for Service A",
    amount: "$20,000",
  },
  {
    label: "Largest Expense",
    description: "Purchase of Office Equipment",
    amount: "$12,000",
  },
  {
    label: "Most Frequent Vendor",
    description: "Subscription to Cloud Service",
    amount: "$3,200",
  },
  {
    label: "Top Recurring Payment",
    description: "Monthly Lease Payment for Office Space",
    amount: "$4,500",
  },
]

export const APP_DASHBOARD_RECENT_TRANSACTIONS_LIST:TRecentTransactionItem[] = [
  {
    id: "1",
    date: "2025-01-15",
    description: "Payment for Service A",
    category: "Income",
    amount: 20000,
    type: "income",
  },
  {
    id: "2",
    date: "2025-01-12",
    description: "Office Equipment Purchase",
    category: "Expense",
    amount: 12000,
    type: "expense",
  },
  {
    id: "3",
    date: "2025-01-10",
    description: "Cloud Service Subscription",
    category: "Vendor",
    amount: 3200,
    type: "expense",
  },
  {
    id: "4",
    date: "2025-01-05",
    description: "Office Space Lease",
    category: "Recurring",
    amount: 4500,
    type: "expense",
  },
];

export const APP_DASHBOARD_BUDGET_PROGRESS_LIST = [
  {
    id: '1',
    name: 'Monthly Allowance',
    type: 'expenses',
    category: 'montly',
    budget: 5000000,
    use: 3500000
  },
  {
    id: '2',
    name: 'Work',
    type: 'expenses',
    category: 'work',
    budget: 2000000,
    use: 1500000
  }
]
