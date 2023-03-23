import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import PaymentsIcon from "@mui/icons-material/Payments";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import ToggleOffOutlinedIcon from "@mui/icons-material/ToggleOffOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

export const pages = [
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

export const utils = [
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

export const mobilePages = [
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
    name: "Setting",
    icon: <SettingsIcon />,
    to: "",
  },
];
