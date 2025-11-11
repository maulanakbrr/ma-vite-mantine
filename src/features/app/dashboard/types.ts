import type { JSX } from "react";

export type TAppDashboardSummaryItem = {
  id: string;
  text: string;
  value: number;
  icon: JSX.Element;
  color?: string; 
}