import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useNavigate } from "react-router-dom";
import { CustomSearch } from "./CustomSearch";
import { NavBarProps } from "../types/Type";

export const NavBar: React.FC<NavBarProps> = ({ handleSearchChange }) => {
  const navigate = useNavigate();

  const handleGoToHomePage = () => navigate("/home");
  const logoImage = require("../assets/images/nav-logo.png");
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          background: "#fff",
          color: "#000",
          boxShadow: "none",
          borderBottom: "1px solid #f5f5f5",
        }}
      >
        <Toolbar>
          <img
            src={logoImage}
            style={{ cursor: "pointer", width: "80px" }}
            onClick={handleGoToHomePage}
          />
          <CustomSearch placeholder="Search..." onChange={handleSearchChange} />
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <MailIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <NotificationsIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
