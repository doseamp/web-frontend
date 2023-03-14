import {
  Box,
  Card,
  CardContent,
  Typography,
  Icon,
  Stack,
  Divider,
  Button,
  IconButton,
} from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DonutChart from "./DonutChart";

const DbColumn1 = () => {
  return (
    <Box justifyContent="center">
      <Box>
        <Card sx={{ mb: 10 }}>
          <CardContent>
            <Box sx={{ position: "relative", height: "100px" }}>
              <Box display="flex" flexDirection="row">
                <Box display="flex" justifyContent="center">
                  <Icon sx={{ mr: 1, color: "#FF9800" }}>
                    <AccountBalanceWalletIcon />
                  </Icon>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    Wallet 1
                  </Typography>
                </Box>
                <Box sx={{ ml: "auto" }}>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    Bitcoin
                  </Typography>
                  <Typography sx={{ fontSize: "0.7rem" }}>BTC</Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  left: 0,
                  textAlign: "center",
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                  Total
                </Typography>
                <Typography sx={{ fontSize: "0.7rem" }}>$169.99</Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
        <Card sx={{ mb: 10 }}>
          <CardContent>
            <Typography sx={{ fontWeight: "bold", mb: 2 }}>
              Balance Details
            </Typography>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>
                <Stack direction="row" spacing={1} sx={{ pb: 1 }}>
                  <Icon sx={{ color: "#FF9800" }}>
                    <AccountBalanceWalletIcon />
                  </Icon>
                  <Stack direction="column">
                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                      Wallet 1
                    </Typography>
                    <Typography sx={{ fontSize: "0.7rem" }}>$169.99</Typography>
                  </Stack>
                </Stack>
                <Stack direction="row" spacing={1} sx={{ pb: 1 }}>
                  <Icon sx={{ color: "#54ADF3" }}>
                    <AccountBalanceWalletIcon />
                  </Icon>
                  <Stack direction="column">
                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                      Wallet 2
                    </Typography>
                    <Typography sx={{ fontSize: "0.7rem" }}>$123.67</Typography>
                  </Stack>
                </Stack>
                <Stack direction="row" spacing={1} sx={{ pb: 1 }}>
                  <Icon sx={{ color: "#817E7E" }}>
                    <AccountBalanceWalletIcon />
                  </Icon>
                  <Stack direction="column">
                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                      Wallet 3
                    </Typography>
                    <Typography sx={{ fontSize: "0.7rem" }}>
                      $3942.54
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
              <DonutChart />
            </Box>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Box display="flex" sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                Exchange
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  ml: "auto",
                  fontWeight: "bold",
                  textDecoration: "underline",
                  ":hover": {
                    cursor: "pointer",
                  },
                }}
              >
                Wallet
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: "#000000", mb: 4 }}>
              1 ETH ⇌ $1,301.28
            </Typography>
            <Box sx={{ background: "#d9d9d9", p: 2, borderRadius: 2 }}>
              <Typography variant="body2 " sx={{ fontWeight: "bold" }}>
                You send
              </Typography>
              <Box display="flex" sx={{ my: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                  0.003
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ ml: "auto", fontWeight: "bold" }}
                >
                  ETH
                </Typography>
              </Box>
              <Divider sx={{ my: 1, backgroundColor: "#000000" }} />
              <Typography variant="body2" sx={{ mt: 1, fontWeight: "bold" }}>
                You receive
              </Typography>
              <Box display="flex" sx={{ my: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                  0.0002
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ ml: "auto", fontWeight: "bold" }}
                >
                  BTC
                </Typography>
              </Box>
            </Box>
            <Typography variant="body2" sx={{ fontWeight: "bold", mt: 4 }}>
              ETH Address
            </Typography>
            <Box
              display="flex"
              sx={{
                background: "#d9d9d9",
                borderRadius: 1,
                px: 1,
                py: 0.5,
                mb: 4,
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                124D5q765EC7ab214Dot
              </Typography>
              <IconButton size="small">
                <ContentCopyIcon sx={{ fontSize: "12px" }} />
              </IconButton>
            </Box>
            <Button
              size="small"
              sx={{
                color: "#ffffff",
                textTransform: "capitalize",
                fontWeight: "bold",
                backgroundColor: "#54adf3",
                px: 2,
                ":hover": {
                  boxShadow: 1,
                  backgroundColor: "#54adf3",
                },
              }}
            >
              Proceed to exchange
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default DbColumn1;
