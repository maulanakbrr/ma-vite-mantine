import type { JSX } from "react";

export type TAppDashboardSummaryItem = {
  id: string;
  text: string;
  value: number;
  icon: JSX.Element;
  color?: string; 
}

export type TRecentTransactionItem = {
  id: string;
  date: string;
  description: string;
  category: string;
  amount: number;
  type: "income" | "expense";
};