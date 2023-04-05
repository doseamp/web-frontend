import {
  Box,
  Card,
  CardContent,
  Typography,
  Icon,
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SquareIcon from "@mui/icons-material/Square";
import DonutChart from "./DonutChart";

const DbColumn1 = () => {
  return (
    <Box justifyContent="center">
      <Box>
        <Box
          display="flex"
          sx={{
            flexDirection: {
              xs: "column",
              md: "row",
            },
          }}
        >
          {/* Balance Details  */}

          <Card sx={{ mb: 5, mr: 4, width: { xs: "100%", md: "300px" } }}>
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
                      <Typography sx={{ fontSize: "0.7rem" }}>
                        $169.99
                      </Typography>
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
                      <Typography sx={{ fontSize: "0.7rem" }}>
                        $123.67
                      </Typography>
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

          {/* Connect Wallets  */}

          <Card sx={{ mb: 5, width: { xs: "100%", md: "400px" } }}>
            <CardContent>
              <Typography sx={{ fontWeight: "bold", mb: 2 }}>
                Connect Wallet
              </Typography>
              <Stack direction="column">
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  sx={{ my: 1 }}
                >
                  <Box display="flex" justifyContent="center">
                    <Icon sx={{ color: "#FF9800", mr: 1 }}>
                      <AccountBalanceWalletIcon />
                    </Icon>
                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                      Wallet 1
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      background: "#D9D9D9",
                      py: 0.5,
                      px: 1,
                      borderRadius: 1,
                      width: "130px",
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: "bold", textAlign: "center" }}
                    >
                      Not connected
                    </Typography>
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
                    Connect
                  </Button>
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  sx={{ my: 1 }}
                >
                  <Box display="flex" justifyContent="center">
                    <Icon sx={{ color: "#54ADF3", mr: 1 }}>
                      <AccountBalanceWalletIcon />
                    </Icon>
                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                      Wallet 2
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      background: "#D9D9D9",
                      py: 0.5,
                      px: 1,
                      borderRadius: 1,
                      width: "130px",
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: "bold", textAlign: "center" }}
                    >
                      Not connected
                    </Typography>
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
                    Connect
                  </Button>
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  sx={{ my: 1 }}
                >
                  <Box display="flex" justifyContent="center">
                    <Icon sx={{ color: "#817E7E", mr: 1 }}>
                      <AccountBalanceWalletIcon />
                    </Icon>
                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                      Wallet 3
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      background: "#D9D9D9",
                      py: 0.5,
                      px: 1,
                      borderRadius: 1,
                      width: "130px",
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: "bold", textAlign: "center" }}
                    >
                      Not connected
                    </Typography>
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
                    Connect
                  </Button>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Box>

        {/* Notifications */}

        <Card
          sx={{ mb: { xs: 5, lg: 0 }, display: { xs: "none", md: "block" } }}
        >
          <CardContent>
            <Typography sx={{ fontWeight: "bold", mb: 1 }}>
              Notifications
            </Typography>

            <List>
              <ListItem
                sx={{
                  px: 0,
                  "& .css-10hburv-MuiTypography-root": {
                    fontSize: "12px",
                  },
                }}
              >
                <ListItemIcon>
                  <SquareIcon sx={{ height: "20px", color: "#54adf3" }} />
                </ListItemIcon>
                <ListItemText>
                  You have successfully exchanged from NGN to USDT.
                </ListItemText>
              </ListItem>
              <ListItem
                sx={{
                  px: 0,
                  "& .css-10hburv-MuiTypography-root": {
                    fontSize: "12px",
                  },
                }}
              >
                <ListItemIcon>
                  <SquareIcon sx={{ height: "20px", color: "#54adf3" }} />
                </ListItemIcon>
                <ListItemText>Check out new feature in your app.</ListItemText>
              </ListItem>
              <ListItem
                sx={{
                  px: 0,
                  "& .css-10hburv-MuiTypography-root": {
                    fontSize: "12px",
                  },
                }}
              >
                <ListItemIcon>
                  <SquareIcon sx={{ height: "20px", color: "#54adf3" }} />
                </ListItemIcon>
                <ListItemText>
                  You have successfully exchanged from BTC to ETHER
                </ListItemText>
              </ListItem>
              <ListItem
                sx={{
                  px: 0,
                  "& .css-10hburv-MuiTypography-root": {
                    fontSize: "12px",
                  },
                }}
              >
                <ListItemIcon>
                  <SquareIcon sx={{ height: "20px", color: "#54adf3" }} />
                </ListItemIcon>
                <ListItemText>New version available. Update now.</ListItemText>
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default DbColumn1;
