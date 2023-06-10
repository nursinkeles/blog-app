import * as Yup from "yup";

export const ValidationSchema = Yup.object({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters.")
    .required("Username is required."),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters.")
    .required("Password is required."),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Passwords must match.")
    .required("Confirm Password is required."),
  email: Yup.string()
    .email("Enter a valid email address.")
    .required("Email is required."),
});

export const ValidationSchemaOfLogin = Yup.object({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters.")
    .required("Username is required."),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters.")
    .required("Password is required."),
});
