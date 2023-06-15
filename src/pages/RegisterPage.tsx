import { Link, useNavigate } from "react-router-dom";
import { ValidationSchema } from "../utils/ValidationSchema";
import { RegisterInputFields } from "../constants/Constant";
import useCustomDispatch from "../hooks/useCustomDispatch";
import AuthForm from "../components/AuthForm";
import { Typography } from "@mui/material";

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const { handleAddUser } = useCustomDispatch();

  const onSubmit = (values: any) => {
    const { confirmPassword, ...data } = values;
    handleAddUser(data);
    navigate("/");
  };

  return (
    <>
      <Typography component="span">
        Enter your details to create a new account:
      </Typography>

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

      <Typography component="p" align="center">
        Already have an account? <Link to="/">Login</Link>
      </Typography>
    </>
  );
};

export default RegisterPage;
