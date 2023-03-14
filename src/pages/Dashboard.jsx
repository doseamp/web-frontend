import { Box, Grid, Toolbar } from "@mui/material";
import { useState } from "react";

import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import PaymentsIcon from "@mui/icons-material/Payments";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import ToggleOffOutlinedIcon from "@mui/icons-material/ToggleOffOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import DbGrid1 from "../components/DbGrid1";
import DashboardMenu from "../components/DashboardMenu";
import DbCardsComp from "../components/DbCardsComp";
import DbGrid2 from "../components/DbGrid2";
import DbGrid3 from "../components/DbGrid3";
import Sidebar from "../components/Sidebar";
import MobileSidebar from "../components/MobileSidebar";
import DbColumn1 from "../components/DbColumn1";

const pages = [
  {
    name: "Dashboard",
    icon: <DashboardCustomizeIcon />,
    link: "/dashboard",
  },
  {
    name: "Transaction",
    icon: <PaymentsIcon />,
    link: "/transactions",
  },
  {
    name: "Wallet",
    icon: <AccountBalanceWalletIcon />,
    link: "/wallets",
  },
  {
    name: "My Cards",
    icon: <CreditCardIcon />,
    link: "/cards",
  },
  {
    name: "Help",
    icon: <ContactSupportIcon />,
    link: "/help",
  },
];

const utils = [
  {
    name: "Light mode",
    icon: <ToggleOffOutlinedIcon />,
  },
  {
    name: "Setting",
    icon: <SettingsIcon />,
  },
  {
    name: "Log out",
    icon: <LogoutIcon />,
  },
];

const Dashboard = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <Box sx={{ background: "#0000000" }}>
      <DashboardMenu openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      <Sidebar pages={pages} utils={utils} />
      <MobileSidebar
        pages={pages}
        utils={utils}
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
      />
      <Box
        sx={{
          ml: {
            xs: 0,
            md: "250px",
          },
        }}
      >
        <Toolbar />

        <Box sx={{ px: 4, py: 2, mt: 4 }}>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            sx={{ mt: 8 }}
          >
            <Grid item lg={2.8} md={5.6} xs={11}>
              <Box>
                <DbColumn1 />
              </Box>
            </Grid>
            <Grid item lg={5.6} md={5.6} xs={11}>
              Grid 2
            </Grid>
            <Grid item lg={2.8} md={5.6} xs={11}>
              Grid 3
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
