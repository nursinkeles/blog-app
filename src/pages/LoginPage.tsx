import { useNavigate } from "react-router-dom";
import { ValidationSchemaOfLogin } from "../utils/ValidationSchema";
import { LoginInputFields } from "../constants/Constant";
import useCustomDispatch from "../hooks/useCustomDispatch";
import AuthForm from "../components/AuthForm";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { users } = useCustomDispatch();

  const onSubmit = (values: any) => {
    const { username, password } = values;
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    user && navigate("/");
  };

  return (
    <AuthForm
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={ValidationSchemaOfLogin}
      onSubmit={onSubmit}
      inputFields={LoginInputFields}
      buttonText="Sign In"
    />
  );
};

export default LoginPage;
