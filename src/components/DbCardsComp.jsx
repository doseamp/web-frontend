import { Box, Grid, Icon, Stack, Typography } from "@mui/material";

import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const DbCardsComp = () => {
  return (
    <Grid container alignItems="center" justifyContent="space-between">
      <Grid
        item
        md={2.8}
        sx={{
          backgroundColor: "#ffffff",
          position: "relative",
          height: "120px",
          borderRadius: 2,
          py: 1,
          px: 2,
        }}
      >
        <Stack direction="row" sx={{ position: "relative", mt: 1 }}>
          <Icon sx={{ mr: 1 }}>
            <AccountBalanceWalletIcon />
          </Icon>
          <Typography>Wallet 1</Typography>
        </Stack>
        <Box sx={{ position: "absolute", right: "24px", top: "16px" }}>
          <Typography>Bitcoin</Typography>
          <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
            BTC
          </Typography>
        </Box>
        <Box sx={{ position: "absolute", bottom: "8px", left: "104px" }}>
          <Typography>Total</Typography>
          <Typography sx={{ fontSize: "14px" }}>$123.77</Typography>
        </Box>
      </Grid>
      <Grid
        item
        md={2.8}
        sx={{
          backgroundColor: "#ffffff",
          position: "relative",
          height: "120px",
          borderRadius: 2,
          py: 1,
          px: 2,
        }}
      >
        <Stack direction="row" sx={{ position: "relative", mt: 1 }}>
          <Icon sx={{ mr: 1 }}>
            <AccountBalanceWalletIcon />
          </Icon>
          <Typography>Wallet 2</Typography>
        </Stack>
        <Box sx={{ position: "absolute", right: "24px", top: "16px" }}>
          <Typography>Ethereum</Typography>
          <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
            ETHER
          </Typography>
        </Box>
        <Box sx={{ position: "absolute", bottom: "8px", left: "104px" }}>
          <Typography>Total</Typography>
          <Typography sx={{ fontSize: "14px" }}>$123.77</Typography>
        </Box>
      </Grid>
      <Grid
        item
        md={2.8}
        sx={{
          backgroundColor: "#ffffff",
          position: "relative",
          height: "120px",
          borderRadius: 2,
          py: 1,
          px: 2,
        }}
      >
        <Stack direction="row" sx={{ position: "relative", mt: 1 }}>
          <Icon sx={{ mr: 1 }}>
            <AccountBalanceWalletIcon />
          </Icon>
          <Typography>Wallet 3</Typography>
        </Stack>
        <Box sx={{ position: "absolute", right: "24px", top: "16px" }}>
          <Typography>Avalanche</Typography>
          <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
            AVL
          </Typography>
        </Box>
        <Box sx={{ position: "absolute", bottom: "8px", left: "104px" }}>
          <Typography>Total</Typography>
          <Typography sx={{ fontSize: "14px" }}>$123.77</Typography>
        </Box>
      </Grid>
      <Grid
        item
        md={2.8}
        sx={{
          backgroundColor: "#ffffff",
          position: "relative",
          height: "120px",
          borderRadius: 2,
          py: 1,
          px: 2,
        }}
      >
        <Stack direction="row" sx={{ position: "relative", mt: 1 }}>
          <Icon sx={{ mr: 1 }}>
            <AccountBalanceWalletIcon />
          </Icon>
          <Typography>Wallet 4</Typography>
        </Stack>
        <Box sx={{ position: "absolute", right: "24px", top: "16px" }}>
          <Typography>Solana</Typography>
          <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
            SOL
          </Typography>
        </Box>
        <Box sx={{ position: "absolute", bottom: "8px", left: "104px" }}>
          <Typography>Total</Typography>
          <Typography sx={{ fontSize: "14px" }}>$123.77</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DbCardsComp;
