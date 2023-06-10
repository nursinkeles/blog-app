import { useNavigate } from "react-router-dom";
import { ValidationSchema } from "../utils/ValidationSchema";
import { RegisterInputFields } from "../constants/Constant";
import useCustomDispatch from "../hooks/useCustomDispatch";
import AuthForm from "../components/AuthForm";

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const { handleAddUser } = useCustomDispatch();

  const onSubmit = (values: any) => {
    const { confirmPassword, ...data } = values;
    handleAddUser(data);
    navigate("/login");
  };

  return (
    <AuthForm
      initialValues={{
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
      }}
      validationSchema={ValidationSchema}
      onSubmit={onSubmit}
      inputFields={RegisterInputFields}
      buttonText="Sign Up"
    />
  );
};

export default RegisterPage;
