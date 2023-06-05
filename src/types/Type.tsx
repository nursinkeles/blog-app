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

export interface QuestionRequestParams {
  amount: number;
  difficulty: string;
  type: string;
  category: number;
  [key: string]: string | number;
}

export type Question = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type RouteType = {
  pathname: string;
  component: JSX.Element;
};

export type ErrorProps = {
  text: string | undefined;
};
