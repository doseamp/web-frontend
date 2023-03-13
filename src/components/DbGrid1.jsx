import { Box, Stack, Typography } from "@mui/material";
import DonutChart from "./DonutChart";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const DbGrid1 = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        borderRadius: 2,
        px: 2,
        py: 2,
        boxSizing: "border-box",
      }}
    >
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Stack direction="row" spacing={1}>
            <AccountBalanceWalletIcon />
            <Stack direction="column">
              <Typography sx={{ fontSize: "0.8rem" }}>Wallet 1</Typography>
              <Typography sx={{ fontSize: "0.8rem" }}>$169.99</Typography>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={1}>
            <AccountBalanceWalletIcon />
            <Stack direction="column">
              <Typography sx={{ fontSize: "0.8rem" }}>Wallet 2</Typography>
              <Typography sx={{ fontSize: "0.8rem" }}>$169.99</Typography>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={1}>
            <AccountBalanceWalletIcon />
            <Stack direction="column">
              <Typography sx={{ fontSize: "0.8rem" }}>Wallet 3</Typography>
              <Typography sx={{ fontSize: "0.8rem" }}>$169.99</Typography>
            </Stack>
          </Stack>
        </Box>
        <DonutChart />
      </Box>
    </Box>
  );
};

export default DbGrid1;
