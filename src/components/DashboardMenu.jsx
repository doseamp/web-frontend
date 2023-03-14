import { styled } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Stack,
  Avatar,
  IconButton,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#ffffff",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const DashboardMenu = ({ openDrawer, setOpenDrawer }) => {
  return (
    <AppBar
      className="headingStyle"
      sx={{
        width: {
          xs: "100%",
          md: "calc(100% - 250px)",
        },
        background: "inherit",
        boxShadow: "none",
        color: "#000000",
      }}
    >
      <Toolbar sx={{ display: "flex" }}>
        <IconButton
          onClick={() => setOpenDrawer(!openDrawer)}
          size="large"
          sx={{ display: { xs: "inline", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            py: 2,
            px: 1,
          }}
        >
          Welcome back, Tolu
        </Typography>
        <Stack direction="row" sx={{ ml: "auto" }}>
          <Search sx={{ mr: 5 }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <IconButton sx={{ color: "#000000" }}>
            <NotificationsIcon />
          </IconButton>
          <IconButton sx={{ color: "#000000" }}>
            <SettingsIcon />
          </IconButton>
          <IconButton>
            <Avatar
              alt="User"
              src="tiktok.png"
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
      </Toolbar>
    </AppBar>
  );
};

export default DashboardMenu;
