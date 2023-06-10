import { useFormik } from "formik";
import { Input } from "./Input";
import { CustomButton } from "./Button";
import { FormikErrors } from "formik";
import { AuthFormProps } from "../types/Type";

const AuthForm: React.FC<AuthFormProps> = ({
  initialValues,
  validationSchema,
  onSubmit,
  inputFields,
  buttonText,
}) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const { handleSubmit, handleChange, values, touched, errors } = formik;

  return (
    <form onSubmit={handleSubmit}>
      {inputFields.map((field) => {
        const { id, name, type, label, placeholder, ...rest } = field;
        const value = values[name as keyof typeof values];
        const error =
          touched[name as keyof typeof touched] &&
          errors[name as keyof FormikErrors<typeof initialValues>];

        return (
          <Input
            key={id}
            id={id}
            name={name}
            type={type}
            label={label}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            error={error}
            {...rest}
          />
        );
      })}
      <CustomButton type="submit" variant="contained" color="primary">
        {buttonText}
      </CustomButton>
    </form>
  );
};

export default AuthForm;
