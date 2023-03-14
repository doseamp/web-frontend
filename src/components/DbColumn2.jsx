import { Link } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Icon,
  Button,
  ButtonGroup,
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SquareIcon from "@mui/icons-material/Square";

const DbColumn2 = () => {
  return (
    <Box>
      <Box>
        {/* Wallets 2 & 3 */}
        <Grid container justifyContent="space-between">
          <Grid item md={5.5} xs={12}>
            <Card sx={{ mb: 5 }}>
              <CardContent>
                <Box sx={{ position: "relative", height: "100px" }}>
                  <Box display="flex" flexDirection="row">
                    <Box display="flex" justifyContent="center">
                      <Icon sx={{ mr: 1, color: "#54adf3" }}>
                        <AccountBalanceWalletIcon />
                      </Icon>
                      <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                        Wallet 2
                      </Typography>
                    </Box>
                    <Box sx={{ ml: "auto" }}>
                      <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                        Ethereum
                      </Typography>
                      <Typography sx={{ fontSize: "0.7rem" }}>ETHER</Typography>
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
                    <Typography sx={{ fontSize: "0.7rem" }}>$123.67</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={5.5} xs={12}>
            <Card sx={{ mb: 5 }}>
              <CardContent>
                <Box sx={{ position: "relative", height: "100px" }}>
                  <Box display="flex" flexDirection="row">
                    <Box display="flex" justifyContent="center">
                      <Icon sx={{ mr: 1, color: "#817E7E" }}>
                        <AccountBalanceWalletIcon />
                      </Icon>
                      <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                        Wallet 3
                      </Typography>
                    </Box>
                    <Box sx={{ ml: "auto" }}>
                      <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                        Avalanche
                      </Typography>
                      <Typography sx={{ fontSize: "0.7rem" }}>AVX</Typography>
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
                    <Typography sx={{ fontSize: "0.7rem" }}>
                      $3,942.54
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Connect Wallets  */}

        <Card>
          <Box
            sx={{ backgroundColor: "#ffffff", borderRadius: 2, px: 4, py: 2 }}
          >
            <Box display="flex" sx={{ mb: 4 }}>
              <Typography sx={{ fontWeight: "bold" }}>Wallet</Typography>
              <Link to="" style={{ color: "#54adf3", marginLeft: "auto" }}>
                Connect to external Wallet
              </Link>
            </Box>
            <Stack direction="column" sx={{ mt: 2 }}>
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
                <ButtonGroup
                  size="small"
                  sx={{
                    backgroundColor: "#D9D9D9",
                    border: "none",
                  }}
                >
                  <Button
                    sx={{
                      color: "#000000",
                      textTransform: "capitalize",
                      fontWeight: "bold",
                      borderLeft: "none",
                      borderTop: "none",
                      borderBottom: "none",
                      borderRight: "1px solid #000000",
                      width: "80px",
                      ":hover": {
                        boxShadow: 1,
                        borderLeft: "none",
                        borderTop: "none",
                        borderBottom: "none",
                      },
                    }}
                  >
                    Send
                  </Button>
                  <Button
                    sx={{
                      color: "#000000",
                      textTransform: "capitalize",
                      fontWeight: "bold",
                      borderRight: "none",
                      borderTop: "none",
                      borderBottom: "none",
                      borderLeft: "1px solid #000000",
                      width: "80px",
                      ":hover": {
                        boxShadow: 1,
                        borderRight: "none",
                        borderTop: "none",
                        borderBottom: "none",
                        borderLeft: "1px solid #000000",
                      },
                    }}
                  >
                    Receive
                  </Button>
                </ButtonGroup>
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
                <ButtonGroup
                  size="small"
                  sx={{
                    backgroundColor: "#D9D9D9",
                    border: "none",
                  }}
                >
                  <Button
                    sx={{
                      color: "#000000",
                      textTransform: "capitalize",
                      fontWeight: "bold",
                      borderLeft: "none",
                      borderTop: "none",
                      borderBottom: "none",
                      borderRight: "1px solid #000000",
                      width: "80px",
                      ":hover": {
                        boxShadow: 1,
                        borderLeft: "none",
                        borderTop: "none",
                        borderBottom: "none",
                      },
                    }}
                  >
                    Send
                  </Button>
                  <Button
                    sx={{
                      color: "#000000",
                      textTransform: "capitalize",
                      fontWeight: "bold",
                      borderRight: "none",
                      borderTop: "none",
                      borderBottom: "none",
                      borderLeft: "1px solid #000000",
                      width: "80px",
                      ":hover": {
                        boxShadow: 1,
                        borderRight: "none",
                        borderTop: "none",
                        borderBottom: "none",
                        borderLeft: "1px solid #000000",
                      },
                    }}
                  >
                    Receive
                  </Button>
                </ButtonGroup>
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
                <ButtonGroup
                  size="small"
                  sx={{
                    backgroundColor: "#D9D9D9",
                    border: "none",
                  }}
                >
                  <Button
                    sx={{
                      color: "#000000",
                      textTransform: "capitalize",
                      fontWeight: "bold",
                      borderLeft: "none",
                      borderTop: "none",
                      borderBottom: "none",
                      borderRight: "1px solid #000000",
                      width: "80px",
                      ":hover": {
                        boxShadow: 1,
                        borderLeft: "none",
                        borderTop: "none",
                        borderBottom: "none",
                      },
                    }}
                  >
                    Send
                  </Button>
                  <Button
                    sx={{
                      color: "#000000",
                      textTransform: "capitalize",
                      fontWeight: "bold",
                      borderRight: "none",
                      borderTop: "none",
                      borderBottom: "none",
                      borderLeft: "1px solid #000000",
                      width: "80px",
                      ":hover": {
                        boxShadow: 1,
                        borderRight: "none",
                        borderTop: "none",
                        borderBottom: "none",
                        borderLeft: "1px solid #000000",
                      },
                    }}
                  >
                    Receive
                  </Button>
                </ButtonGroup>
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
                    Wallet 4
                  </Typography>
                </Box>
                <ButtonGroup
                  size="small"
                  sx={{
                    backgroundColor: "#D9D9D9",
                    border: "none",
                  }}
                >
                  <Button
                    sx={{
                      color: "#000000",
                      textTransform: "capitalize",
                      fontWeight: "bold",
                      borderLeft: "none",
                      borderTop: "none",
                      borderBottom: "none",
                      borderRight: "1px solid #000000",
                      width: "80px",
                      ":hover": {
                        boxShadow: 1,
                        borderLeft: "none",
                        borderTop: "none",
                        borderBottom: "none",
                      },
                    }}
                  >
                    Send
                  </Button>
                  <Button
                    sx={{
                      color: "#000000",
                      textTransform: "capitalize",
                      fontWeight: "bold",
                      borderRight: "none",
                      borderTop: "none",
                      borderBottom: "none",
                      borderLeft: "1px solid #000000",
                      width: "80px",
                      ":hover": {
                        boxShadow: 1,
                        borderRight: "none",
                        borderTop: "none",
                        borderBottom: "none",
                        borderLeft: "1px solid #000000",
                      },
                    }}
                  >
                    Receive
                  </Button>
                </ButtonGroup>
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
          </Box>
        </Card>

        {/* Notifications */}

        <Card sx={{ mt: 5 }}>
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

export default DbColumn2;
