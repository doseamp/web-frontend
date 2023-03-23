import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Avatar,
  IconButton,
} from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

const DashboardMenu = () => {
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
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              pt: 2,
            }}
          >
            Hi, Tolu
          </Typography>
          <Typography sx={{ fontSize: "0.7rem" }}>
            Tuesday, 7th March 2023
          </Typography>
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
          <IconButton>
            <Avatar
              alt="User"
              src="user.png"
              sx={{ height: "25px", width: "25px" }}
            />
            <Typography sx={{ ml: 1, fontWeight: "bold", color: "#000000" }}>
              Tolu
            </Typography>
          </IconButton>
          <IconButton sx={{ color: "#000000" }}>
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
