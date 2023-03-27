import { Link } from "react-router-dom";
import { Box, Card, CardContent, Typography, Stack, Icon } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import DonutChart from "./DonutChart";

const MobileDashboard = () => {
  return (
    <Box>
      {/* Wallets  */}

      <Card sx={{ my: 2 }}>
        <CardContent>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Icon sx={{ color: "#FF9800", mr: 1 }}>
              <AccountBalanceWalletIcon />
            </Icon>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Wallet 1
            </Typography>
          </Box>
          <Typography
            variant="body2"
            sx={{ textAlign: "center", fontWeight: "bold" }}
          >
            Bitcoin
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ my: 2 }}>
        <CardContent>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Icon sx={{ color: "#54ADF3", mr: 1 }}>
              <AccountBalanceWalletIcon />
            </Icon>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Wallet 2
            </Typography>
          </Box>
          <Typography
            variant="body2"
            sx={{ textAlign: "center", fontWeight: "bold" }}
          >
            Ethereun
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ my: 2 }}>
        <CardContent>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Icon sx={{ color: "#817E7E", mr: 1 }}>
              <AccountBalanceWalletIcon />
            </Icon>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Wallet 3
            </Typography>
          </Box>
          <Typography
            variant="body2"
            sx={{ textAlign: "center", fontWeight: "bold" }}
          >
            Avalanche
          </Typography>
        </CardContent>
      </Card>

      {/* Balance Details  */}
      <Card sx={{ my: 2 }}>
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
                  <Typography sx={{ fontSize: "0.7rem" }}>$3942.54</Typography>
                </Stack>
              </Stack>
            </Box>
            <DonutChart />
          </Box>
        </CardContent>
      </Card>

      {/* Recent Transactions  */}
      <Card sx={{ my: 2 }}>
        <CardContent>
          <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
            <Typography sx={{ fontWeight: "bold" }}>
              Recent transactions
            </Typography>
            <Link
              to=""
              style={{
                color: "#54adf3",
                marginLeft: "auto",
                fontSize: "10px",
              }}
            >
              View all
            </Link>
          </Box>
          <Stack direction="column">
            <Stack direction="row" sx={{ py: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                NGN ⇌ USDT
              </Typography>
              <Box sx={{ ml: "auto" }}>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold", color: "#D61717" }}
                >
                  -$378.33
                </Typography>
                <Typography sx={{ fontSize: "8px" }}>
                  Today, 10.40 am
                </Typography>
              </Box>
            </Stack>
            <Stack direction="row" sx={{ py: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                NGN ⇌ USDT
              </Typography>
              <Box sx={{ ml: "auto" }}>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold", color: "#17D641" }}
                >
                  -$378.33
                </Typography>
                <Typography sx={{ fontSize: "8px" }}>
                  Today, 10.40 am
                </Typography>
              </Box>
            </Stack>
            <Stack direction="row" sx={{ py: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                NGN ⇌ USDT
              </Typography>
              <Box sx={{ ml: "auto" }}>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold", color: "#D61717" }}
                >
                  -$378.33
                </Typography>
                <Typography sx={{ fontSize: "8px" }}>
                  Today, 10.40 am
                </Typography>
              </Box>
            </Stack>
            <Stack direction="row" sx={{ py: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                NGN ⇌ USDT
              </Typography>
              <Box sx={{ ml: "auto" }}>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold", color: "#17D641" }}
                >
                  -$378.33
                </Typography>
                <Typography sx={{ fontSize: "8px" }}>
                  Today, 10.40 am
                </Typography>
              </Box>
            </Stack>
            <Stack direction="row" sx={{ py: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                NGN ⇌ USDT
              </Typography>
              <Box sx={{ ml: "auto" }}>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold", color: "#D61717" }}
                >
                  -$378.33
                </Typography>
                <Typography sx={{ fontSize: "8px" }}>
                  Today, 10.40 am
                </Typography>
              </Box>
            </Stack>
            <Stack direction="row" sx={{ py: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                NGN ⇌ USDT
              </Typography>
              <Box sx={{ ml: "auto" }}>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold", color: "#D61717" }}
                >
                  -$378.33
                </Typography>
                <Typography sx={{ fontSize: "8px" }}>
                  Today, 10.40 am
                </Typography>
              </Box>
            </Stack>
            <Stack direction="row" sx={{ py: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                NGN ⇌ USDT
              </Typography>
              <Box sx={{ ml: "auto" }}>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold", color: "#17D641" }}
                >
                  -$378.33
                </Typography>
                <Typography sx={{ fontSize: "8px" }}>
                  Today, 10.40 am
                </Typography>
              </Box>
            </Stack>
            <Stack direction="row" sx={{ py: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                NGN ⇌ USDT
              </Typography>
              <Box sx={{ ml: "auto" }}>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold", color: "#D61717" }}
                >
                  -$378.33
                </Typography>
                <Typography sx={{ fontSize: "8px" }}>
                  Today, 10.40 am
                </Typography>
              </Box>
            </Stack>
            <Stack direction="row" sx={{ py: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                NGN ⇌ USDT
              </Typography>
              <Box sx={{ ml: "auto" }}>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold", color: "#D61717" }}
                >
                  -$378.33
                </Typography>
                <Typography sx={{ fontSize: "8px" }}>
                  Today, 10.40 am
                </Typography>
              </Box>
            </Stack>
            <Stack direction="row" sx={{ py: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                NGN ⇌ USDT
              </Typography>
              <Box sx={{ ml: "auto" }}>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold", color: "#17D641" }}
                >
                  -$378.33
                </Typography>
                <Typography sx={{ fontSize: "8px" }}>
                  Today, 10.40 am
                </Typography>
              </Box>
            </Stack>
            <Stack direction="row" sx={{ py: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                NGN ⇌ USDT
              </Typography>
              <Box sx={{ ml: "auto" }}>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold", color: "#17D641" }}
                >
                  -$378.33
                </Typography>
                <Typography sx={{ fontSize: "8px" }}>
                  Today, 10.40 am
                </Typography>
              </Box>
            </Stack>
            <Stack direction="row" sx={{ py: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                NGN ⇌ USDT
              </Typography>
              <Box sx={{ ml: "auto" }}>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold", color: "#D61717" }}
                >
                  -$378.33
                </Typography>
                <Typography sx={{ fontSize: "8px" }}>
                  Today, 10.40 am
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default MobileDashboard;
