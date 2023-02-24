import { AppBar, Toolbar } from "@mui/material";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import MainMenu from "./MainMenu";

const MainNavbar = () => {
  return (
    <Container maxWidth="xl">
      <AppBar
        position="static"
        display="flex"
        sx={{
          background: "#ffffff",
          boxShadow: "none",
          // alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Toolbar>
          <Link to="/">
            <img src="logo.png" alt="logo" style={{ width: 175, height: 90 }} />
          </Link>

          <MainMenu />
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default MainNavbar;
