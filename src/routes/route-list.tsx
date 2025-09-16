import { createBrowserRouter } from "react-router";
import BaseRouteLoader from "./base-route";
import HomePage from "@/pages/home";

export const routeList = createBrowserRouter([
  {
    path: '/',
    loader: BaseRouteLoader,
  },
  {
    path: '/home',
    Component: HomePage
  },
])