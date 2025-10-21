import AppLayout from "@/layouts/app-layout";
import LoginLayout from "@/layouts/login-layout";
import MainLayout from "@/layouts/main-layout";
import AboutPage from "@/pages/about";
import AppDashboardPage from "@/pages/app/dashboard";
import GalleryPage from "@/pages/gallery";
import HomePage from "@/pages/home";
import LoginRegisterPage from "@/pages/login-register";
import TestimonyPage from "@/pages/testimony";
import { createBrowserRouter } from "react-router";
import BaseRouteLoader from "./base-route";
import AppExpensesPage from "@/pages/app/expenses";
import AppIncomePage from "@/pages/app/income";
import AppBudgetingPage from "@/pages/app/budgeting";
import AppTransactionPage from "@/pages/app/transaction";

export const routeList = createBrowserRouter([
  {
    path: '/',
    loader: BaseRouteLoader,
  },
  {
    element: <MainLayout/>,
    children: [
      {
        path: '/home',
        Component: HomePage
      },
      {
        path: '/about',
        Component: AboutPage
      },
      {
        path: '/testimony',
        Component: TestimonyPage
      },
      {
        path: '/gallery',
        Component: GalleryPage
      },
    ]
  },
  {
    path: 'app',
    children: [
      {
        element: <LoginLayout/>,
        children: [
          {
            path: 'login',
            Component: LoginRegisterPage
          },
          {
            path: 'register',
            Component: LoginRegisterPage
          },
        ]
      },
      {
        element: <AppLayout/>,
        children: [
          {
            path: 'dashboard',
            Component: AppDashboardPage
          },
          {
            path: 'money-tracking/expenses',
            Component: AppExpensesPage
          },
          {
            path: 'money-tracking/income',
            Component: AppIncomePage
          },
          {
            path: 'budgeting',
            Component: AppBudgetingPage
          },
          {
            path: 'transactions',
            Component: AppTransactionPage
          },
        ]
      }
    ]
  }
])