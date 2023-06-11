import { FC } from "react";
import Button from "@mui/material/Button";
import { ButtonProps } from "../types/Type";

export const CustomButton: FC<ButtonProps> = ({
  type,
  variant,
  color,
  children,
  onClick,
}) => {
  return (
    <Button
      type={type}
      variant={variant}
      color={color}
      onClick={onClick}
      className="btn btn-primary"
    >
      {children}
    </Button>
  );
};
