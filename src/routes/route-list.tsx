import { createBrowserRouter } from "react-router";
import BaseRouteLoader from "./base-route";
import HomePage from "@/pages/home";
import MainLayout from "@/layouts/main-layout";
import AboutPage from "@/pages/about";
import TestimonyPage from "@/pages/testimony";
import GalleryPage from "@/pages/gallery";
import LoginLayout from "@/layouts/login-layout";
import LoginRegisterPage from "@/pages/login-register";

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
    element: <LoginLayout/>,
    path: 'app',
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
  }
])