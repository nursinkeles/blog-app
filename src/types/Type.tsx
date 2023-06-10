import { FormikValues } from "formik";

export interface CurrentRoute {
  pathname: string;
  title?: string;
  class?: string;
}

export interface HeaderProps {
  currentRoute: CurrentRoute | undefined;
}

export enum ApiStatus {
  IDLE = "idle",
  LOADING = "loading",
  SUCCESS = "succeeded",
  FAILED = "failed",
}

export interface Article {
  id: number;
  title: string;
  content: string;
  date: string;
  comments: Comment[];
  author: Author;
}

export interface Comment {
  id: number;
  content: string;
}

export interface Author {
  name: string;
  email: string;
}

export interface RootState {
  article: ArticleState;
}

export interface ArticleState {
  items: Article[];
  status: ApiStatus;
  error?: string | null;
}

export const initialState: ArticleState = {
  items: [],
  status: ApiStatus.IDLE,
  error: null,
};

export interface Post {
  id?: number;
  title: string;
  content: string;
  date: string;
  comments: Comment[];
  author: Author;
}

export interface PostState {
  items: Post[];
  status: ApiStatus;
  error: string | null;
}

export const postInitialState: PostState = {
  items: [],
  status: ApiStatus.IDLE,
  error: null,
};

export interface User {
  username: string;
  password: string;
  email: string;
}

export interface UserState {
  items: User[];
  status: ApiStatus;
  error: string | null;
}

export const userInitialState: UserState = {
  items: [],
  status: ApiStatus.IDLE,
  error: null,
};

export type RouteType = {
  pathname: string;
  component: JSX.Element;
};

export type ErrorProps = {
  text: string | undefined;
};

export interface InputProps {
  id: string;
  name: string;
  type: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: any;
  placeholder: string;
}

export interface ButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  variant: "text" | "outlined" | "contained";
  color:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error"
    | "info";
  children: React.ReactNode;
  onClick?: () => void;
}

export interface RegisterFormValues {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
}

export interface LoginFormValues {
  username: string;
  password: string;
}

export interface AuthFormProps {
  initialValues: FormikValues;
  validationSchema: any;
  onSubmit: (values: FormikValues) => void;
  inputFields: Array<{
    id: string;
    name: string;
    type: string;
    label: string;
    placeholder: string;
    [key: string]: any;
  }>;
  buttonText: string;
}

export interface InputField {
  id: string;
  name: string;
  type: string;
  label: string;
  placeholder: string;
}
