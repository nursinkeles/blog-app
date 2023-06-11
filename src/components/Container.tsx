import LoginPage from "../pages/LoginPage";
import { useCurrentRoute } from "../hooks/useCurrentRoute";
import RegisterPage from "../pages/RegisterPage";
import Container from "@mui/material/Container";
import { Header } from "../components/Header";

export const CustomContainer = () => {
  const { currentPathname } = useCurrentRoute();

  return (
    <Container className="container">
      <Header />
      {currentPathname === "/register" && <RegisterPage />}
      {currentPathname === "/login" && <LoginPage />}
    </Container>
  );
};
