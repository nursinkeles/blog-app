import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { RouteType } from "../types/Type";

export const ROUTE: RouteType[] = [
  {
    pathname: "/login",
    component: <LoginPage />,
  },
  {
    pathname: "/register",
    component: <RegisterPage />,
  },
  { pathname: "/", component: <HomePage /> },
];
