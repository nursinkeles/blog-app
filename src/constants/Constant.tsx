import { CustomContainer } from "../components/Container";
import HomePage from "../pages/HomePage";
import { InputField, RouteType } from "../types/Type";

export const ROUTE: RouteType[] = [
  {
    pathname: "/login",
    component: <CustomContainer />,
    title: "Sign In",
  },
  {
    pathname: "/register",
    component: <CustomContainer />,
    title: "Sign Up",
  },
  { pathname: "/", component: <HomePage /> },
];

export const RegisterInputFields: InputField[] = [
  {
    id: "username",
    name: "username",
    type: "text",
    label: "User Name",
    placeholder: "User Name",
  },
  {
    id: "password",
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "Choose Password",
  },
  {
    id: "confirmPassword",
    name: "confirmPassword",
    type: "password",
    label: "Confirm Password",
    placeholder: "Choose Password",
  },
  {
    id: "email",
    name: "email",
    type: "email",
    label: "E-mail Address",
    placeholder: "Enter your email address",
  },
];

export const LoginInputFields: InputField[] = [
  {
    id: "username",
    name: "username",
    type: "text",
    label: "Username",
    placeholder: "Enter your username",
  },
  {
    id: "password",
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "Enter your password",
  },
];
