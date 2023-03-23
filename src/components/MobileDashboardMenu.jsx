import { AppBar, Box, IconButton, Stack, Typography } from "@mui/material";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import PaymentsIcon from "@mui/icons-material/Payments";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SettingsIcon from "@mui/icons-material/Settings";

const MobileDashboardMenu = () => {
  return (
    <AppBar position="fixed" sx={{ top: "auto", bottom: 0, px: 4, pb: 1 }}>
      <Stack direction="row" justifyContent="space-between">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <IconButton size="large">
            <DashboardCustomizeIcon sx={{ color: "#ffffff" }} />
          </IconButton>
          <Typography sx={{ fontSize: "0.5rem" }}>Dashboard</Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <IconButton size="large">
            <PaymentsIcon />
          </IconButton>
          <Typography sx={{ fontSize: "0.5rem", color: "#000000" }}>
            Transaction
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <IconButton size="large">
            <AccountBalanceWalletIcon />
          </IconButton>
          <Typography sx={{ fontSize: "0.5rem", color: "#000000" }}>
            Wallet
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <IconButton size="large">
            <SettingsIcon />
          </IconButton>
          <Typography sx={{ fontSize: "0.5rem", color: "#000000" }}>
            Settings
          </Typography>
        </Box>
      </Stack>
    </AppBar>
  );
};

export default MobileDashboardMenu;
