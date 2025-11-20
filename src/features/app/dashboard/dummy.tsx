import { IconMoneybagMinus, IconMoneybagPlus, IconPig } from "@tabler/icons-react";
import type { TAppDashboardSummaryItem } from "./types";

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