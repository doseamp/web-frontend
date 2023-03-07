import { AppBar, Toolbar, Container } from "@mui/material";
import { Link } from "react-router-dom";
import MainMenu from "./MainMenu";
import MobileMenu from "./MobileMenu";

import BusinessIcon from "@mui/icons-material/Business";
import PaymentsIcon from "@mui/icons-material/Payments";
import PaidIcon from "@mui/icons-material/Paid";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import LanguageIcon from "@mui/icons-material/Language";
import LoginIcon from "@mui/icons-material/Login";

const MainNavbar = () => {
  const pages = [
    {
      name: "Company",
      route: "/",
      icon: <BusinessIcon />,
    },
    {
      name: "Payments",
      route: "/",
      icon: <PaymentsIcon />,
    },
    {
      name: "Trade",
      route: "/",
      icon: <PaidIcon />,
    },
    {
      name: "Help Center",
      route: "/",
      icon: <HelpCenterIcon />,
    },
    {
      name: "English",
      route: "/",
      icon: <LanguageIcon />,
    },
    {
      name: "Login",
      route: "/login",
      icon: <LoginIcon />,
    },
  ];

  return (
    <Container maxWidth="xl">
      <AppBar
        display="flex"
        sx={{
          background: "#ffffff",
          boxShadow: "none",
          justifyContent: "center",
          position: "static",
        }}
      >
        <Toolbar>
          <Link to="/">
            <img src="logo.png" alt="logo" style={{ width: 175, height: 80 }} />
          </Link>

          <MainMenu pages={pages} />
          <MobileMenu pages={pages} />
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default MainNavbar;
