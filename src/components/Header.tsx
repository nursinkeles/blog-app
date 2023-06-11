import Typography from "@mui/material/Typography";
import { useCurrentRoute } from "../hooks/useCurrentRoute";

export const Header = () => {
  const { currentRoute } = useCurrentRoute();

  return (
    <Typography variant="h4" component="header">
      {currentRoute?.title}
    </Typography>
  );
};
