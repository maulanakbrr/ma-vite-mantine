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