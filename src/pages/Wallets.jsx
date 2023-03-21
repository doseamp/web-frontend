import { Box, Toolbar } from "@mui/material";
import { useState } from "react";

import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import PaymentsIcon from "@mui/icons-material/Payments";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import ToggleOffOutlinedIcon from "@mui/icons-material/ToggleOffOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardMenu from "../components/DashboardMenu";
import Sidebar from "../components/Sidebar";
import MobileSidebar from "../components/MobileSidebar";

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

const Wallets = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <Box sx={{ background: "#D9D9D9" }}>
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

        <Box sx={{ px: 4, py: 2, mt: 4 }}> Wallets</Box>
      </Box>
    </Box>
  );
};

export default Wallets;
