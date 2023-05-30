import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Avatar,
  IconButton,
} from "@mui/material";

import { AuthContext } from "../contexts/AuthContext";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useContext } from "react";
import { signout } from "../utils/AuthFn";
import { useNavigate } from "react-router-dom";

const DashboardMenu = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(user);
  const getDate = () => {
    const date = new Date();

    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return date.toLocaleString("en-IN", options);
  };

  return (
    <AppBar
      className="headingStyle"
      sx={{
        width: {
          xs: "100%",
          md: "calc(100% - 250px)",
        },
        background: "#ffffff",
        boxShadow: "none",
        color: "#000000",
      }}
    >
      <Toolbar sx={{ display: "flex" }}>
        <IconButton
          sx={{
            display: {
              xs: "inline",
              md: "none",
            },
          }}
        >
          <Avatar
            alt="User"
            src="user.png"
            sx={{ height: "25px", width: "25px" }}
          />
        </IconButton>
        <Stack direction="column" sx={{ ml: 1 }}>
          {user && (
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                pt: 2,
              }}
            >
              Hi, {user.displayName.split(" ")[0]}
            </Typography>
          )}
          <Typography sx={{ fontSize: "0.7rem" }}>{getDate()}</Typography>
        </Stack>
        <Stack
          direction="row"
          sx={{
            ml: "auto",
            display: {
              xs: "none",
              md: "flex",
            },
          }}
        >
          <IconButton sx={{ color: "#000000" }}>
            <NotificationsIcon />
          </IconButton>
          <IconButton sx={{ color: "#000000" }}>
            <SettingsIcon />
          </IconButton>
          <IconButton onClick={() => navigate("/account")}>
            <Avatar
              alt="User"
              src="user.png"
              sx={{ height: "25px", width: "25px" }}
            />
            <Typography sx={{ ml: 1, fontWeight: "bold", color: "#000000" }}>
              {user.displayName.split(" ")[0]}
            </Typography>
          </IconButton>
          <IconButton
            sx={{ color: "#000000" }}
            onClick={() => {
              navigate("/");
              signout();
            }}
          >
            <LogoutIcon />
          </IconButton>
        </Stack>
        <IconButton
          sx={{
            color: "#000000",
            ml: "auto",
            display: {
              xs: "flex",
              md: "none",
            },
          }}
        >
          <NotificationsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default DashboardMenu;
