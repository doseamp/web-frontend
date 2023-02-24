import { Stack, Menu, IconButton, Button } from "@mui/system";

import MenuIcon from "@mui/icons-material/Menu";

const MobileMenu = () => {
  return (
    <Stack
      direction="row"
      sx={{
        marginLeft: "auto",
        display: {
          xs: "flex",
          md: "none",
        },
      }}
    >
      <IconButton
        size="large"
        color="54adf3"
        aria-label="main menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={(e) => {}}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id="menu-appbar"
        // anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        // open={Boolean(anchorElNav)}
        // onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        <Button
          sx={{
            py: 1.5,
            px: 1,
            fontWeight: "bold",
            textTransform: "capitalize",
            color: "#000000",
            background: "#ffffff",
            ":hover": {
              boxShadow: "#54adf3",
            },
          }}
          //   onClick={navigate("/")}
        >
          Company
        </Button>
      </Menu>
    </Stack>
  );
};

export default MobileMenu;
