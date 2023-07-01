import { AppBar, Toolbar, Container, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import MainMenu from "./MainMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const pages = [
    {
      name: "Company",
      route: "/",
    },
    {
      name: "Payments",
      route: "/",
    },
    {
      name: "Trade",
      route: "/",
    },
    {
      name: "Help Center",
      route: "/",
    },
    {
      name: "English",
      route: "/",
    },
  ];

  return (
    <Container maxWidth="xl">
      <AppBar
        display="flex"
        sx={{
          background: "#ffffff",
          boxShadow: 1,
          justifyContent: "center",
          position: "fixed",
          py: 0.5,
        }}
      >
        <Toolbar>
          <Link to="/">
            <Box
              component="img"
              src="logo.png"
              alt="logo"
              style={{ width: 175, height: 50 }}
            />
          </Link>

          <MainMenu pages={pages} />
          <MobileMenu pages={pages} />

          {/* cta  */}

          <Box
            sx={{
              ml: "auto",
              display: {
                xs: "none",
                md: "block",
              },
            }}
          >
            <Link
              to={"/login"}
              style={{
                textDecoration: "none",
                margin: "0px 16px 0px 40px",
              }}
            >
              <Button
                className="buttonStyle"
                size="small"
                sx={{
                  py: 1,
                  color: "#000000",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                  background: "#ffffff",
                  ":hover": {
                    boxShadow: "#54adf3",
                    background: "#ffffff",
                  },
                }}
              >
                Login
              </Button>
            </Link>

            <Link
              to="/signup"
              style={{
                textDecoration: "none",
              }}
            >
              <Button
                className="buttonStyle"
                size="small"
                sx={{
                  py: 1,
                  px: 2,
                  mx: 1,
                  color: "#000000",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                  background: "#54adf3",
                  ":hover": {
                    background: "#54adf3",
                  },
                }}
              >
                Sign up
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Navbar;
