import { useState, FC } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { InputProps } from "../types/Type";

export const Input: FC<InputProps> = ({
  id,
  name,
  type,
  label,
  value,
  onChange,
  error,
  placeholder,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => setShowPassword(!showPassword);

  return (
    <>
      {label && (
        <label htmlFor={name}>
          {label} <sup>*</sup>
        </label>
      )}
      <TextField
        fullWidth
        id={id}
        name={name}
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        value={value}
        onChange={onChange}
        error={error}
        placeholder={placeholder}
        InputProps={
          type === "password"
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={handleTogglePassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : {}
        }
      />
      {error && <p className="error-message">{error}</p>}
    </>
  );
};
