import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";

import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import PaymentsIcon from "@mui/icons-material/Payments";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

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
    link: "/wallet",
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
    icon: <ToggleOnIcon />,
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

const Sidebar = () => {
  return (
    <Box component="nav">
      <Drawer
        variant="permanent"
        PaperProps={{
          style: {
            width: "19%",
            borderTopRightRadius: "48px",
            borderBottomRightRadius: "48px",
          },
        }}
      >
        <Toolbar>
          <img src="logo.png" alt="logo" style={{ width: 175, height: 90 }} />
        </Toolbar>

        <Box display="flex" flexDirection="column">
          <List>
            {pages.map((page) => (
              <ListItem key={page.name} sx={{ py: 0 }}>
                <ListItemButton>
                  <ListItemIcon>{page.icon}</ListItemIcon>
                  <ListItemText>{page.name}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <List sx={{ mt: "auto" }}>
            {utils.map((util) => (
              <ListItem key={util.name} sx={{ py: 0 }}>
                <ListItemButton>
                  <ListItemIcon>{util.icon}</ListItemIcon>
                  <ListItemText>{util.name}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
