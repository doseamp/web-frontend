import {
  Box,
  Card,
  CardContent,
  Icon,
  Stack,
  Toolbar,
  Typography,
  IconButton,
  Divider,
  Button,
  Link,
} from "@mui/material";

import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DashboardMenu from "../components/DashboardMenu";
import Sidebar from "../components/Sidebar";
import MobileDashboardMenu from "../components/MobileDashboardMenu";
import { pages, mobilePages, utils } from "../utils/Pages";

const Wallets = () => {
  return (
    <Box>
      <Box
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        <DashboardMenu />
      </Box>
      <Sidebar pages={pages} utils={utils} />

      <Box
        sx={{
          ml: {
            xs: 0,
            md: "250px",
          },
        }}
      >
        <Toolbar sx={{ display: { xs: "none", md: "block" } }} />

        <Box sx={{ px: 4, py: 2, mt: { xs: 2, md: 4 } }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr 1fr 1fr",
              },
              gap: 2,
            }}
          >
            {/* Wallets  */}

            <Card
              sx={{
                boxShadow:
                  "0px 2px 1px -1px #17D641, 0px 1px 1px 0px #17D641, 0px 1px 3px 0px #17D641",
              }}
            >
              <CardContent>
                <Link
                  href="/wallets/1"
                  sx={{ textDecoration: "none", color: "#000000" }}
                >
                  <Box display="flex">
                    <Box display="flex">
                      <Icon>
                        <AccountBalanceWalletIcon sx={{ color: "#17D641" }} />
                      </Icon>
                      <Stack direction="column" sx={{ ml: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                          Wallet 1
                        </Typography>
                        <Typography
                          sx={{ fontSize: "0.7rem", fontWeight: "bold" }}
                        >
                          BTC
                        </Typography>
                      </Stack>
                    </Box>
                    <Box sx={{ ml: "auto" }}>
                      <Typography sx={{ fontWeight: "bold" }}>
                        $169.99
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    display="flex"
                    sx={{
                      background: "#d9d9d9",
                      borderRadius: 1,
                      px: 1,
                      py: 0.5,
                      mt: 7,
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                      124D5q765EC7ab214Dot
                    </Typography>
                    <IconButton size="small" sx={{ ml: "auto" }}>
                      <ContentCopyIcon sx={{ fontSize: "12px" }} />
                    </IconButton>
                  </Box>
                </Link>
              </CardContent>
            </Card>
            <Card
              sx={{
                boxShadow:
                  "0px 2px 1px -1px red, 0px 1px 1px 0px red, 0px 1px 3px 0px red",
              }}
            >
              <CardContent>
                <Link
                  href="/wallets/3"
                  sx={{ textDecoration: "none", color: "#000000" }}
                >
                  <Box display="flex">
                    <Box display="flex">
                      <Icon>
                        <AccountBalanceWalletIcon sx={{ color: "#D61717" }} />
                      </Icon>
                      <Stack direction="column" sx={{ ml: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                          Wallet 2
                        </Typography>
                        <Typography
                          sx={{ fontSize: "0.7rem", fontWeight: "bold" }}
                        >
                          ETHER
                        </Typography>
                      </Stack>
                    </Box>
                    <Box sx={{ ml: "auto" }}>
                      <Typography sx={{ fontWeight: "bold" }}>
                        $123.67
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    display="flex"
                    sx={{
                      background: "#d9d9d9",
                      borderRadius: 1,
                      px: 1,
                      py: 0.5,
                      mt: 7,
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                      124D5q765EC7ab214Dot
                    </Typography>
                    <IconButton size="small" sx={{ ml: "auto" }}>
                      <ContentCopyIcon sx={{ fontSize: "12px" }} />
                    </IconButton>
                  </Box>
                </Link>
              </CardContent>
            </Card>
            <Card
              sx={{
                boxShadow:
                  "0px 2px 1px -1px red, 0px 1px 1px 0px red, 0px 1px 3px 0px red",
              }}
            >
              <CardContent>
                <Link
                  href="/wallets/1"
                  sx={{ textDecoration: "none", color: "#000000" }}
                >
                  <Box display="flex">
                    <Box display="flex">
                      <Icon>
                        <AccountBalanceWalletIcon sx={{ color: "#D61717" }} />
                      </Icon>
                      <Stack direction="column" sx={{ ml: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                          Wallet 3
                        </Typography>
                        <Typography
                          sx={{ fontSize: "0.7rem", fontWeight: "bold" }}
                        >
                          AVL
                        </Typography>
                      </Stack>
                    </Box>
                    <Box sx={{ ml: "auto" }}>
                      <Typography sx={{ fontWeight: "bold" }}>
                        $3,942.54
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    display="flex"
                    sx={{
                      background: "#d9d9d9",
                      borderRadius: 1,
                      px: 1,
                      py: 0.5,
                      mt: 7,
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                      124D5q765EC7ab214Dot
                    </Typography>
                    <IconButton size="small" sx={{ ml: "auto" }}>
                      <ContentCopyIcon sx={{ fontSize: "12px" }} />
                    </IconButton>
                  </Box>
                </Link>
              </CardContent>
            </Card>

            {/* Connect Wallet  */}
            <Card>
              <CardContent>
                <Box
                  display="flex"
                  sx={{
                    width: "100%",
                    height: "100%",
                    flexDirection: "column",
                    cursor: "pointer",
                  }}
                >
                  <AddCircleOutlineIcon
                    sx={{
                      fontSize: "100px",
                      color: "#54ADF3",
                      alignSelf: "center",
                    }}
                  />
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontWeight: "bold",
                      mt: 1,
                    }}
                  >
                    Connect Wallet
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>

          {/* Transaction  */}
          <Box
            sx={{
              my: 4,
              display: {
                xs: "none",
                md: "block",
              },
            }}
          >
            <Card>
              <CardContent>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    sx={{
                      width: "30%",
                      background: "#d9d9d9",
                      p: 1,
                      borderRadius: 1,
                    }}
                  >
                    <Stack direction="column">
                      <Box display="flex" alignItems="center">
                        <AccountBalanceWalletIcon sx={{ color: "#FF9800" }} />
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: "bold", ml: 1 }}
                        >
                          Wallet 1
                        </Typography>
                        <NavigateBeforeIcon
                          sx={{ transform: "rotate(-90deg)" }}
                        />
                      </Box>
                      <Typography
                        sx={{ fontSize: "0.7rem", fontWeight: "bold" }}
                      >
                        124D5q765EC7ab214Dot
                      </Typography>
                    </Stack>
                    <Stack direction="column" sx={{ ml: "auto" }}>
                      <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                        USDT
                      </Typography>
                      <Typography
                        sx={{ fontSize: "0.7rem", fontWeight: "bold" }}
                      >
                        $169.99
                      </Typography>
                    </Stack>
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    ⇌
                  </Typography>
                  <Box
                    display="flex"
                    alignItems="center"
                    sx={{
                      width: "30%",
                      background: "#d9d9d9",
                      p: 1,
                      borderRadius: 1,
                    }}
                  >
                    <Stack direction="column">
                      <Box display="flex" alignItems="center">
                        <AccountBalanceWalletIcon sx={{ color: "#FF9800" }} />
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: "bold", ml: 1 }}
                        >
                          Fiat Wallet
                        </Typography>
                        <NavigateBeforeIcon
                          sx={{ transform: "rotate(-90deg)" }}
                        />
                      </Box>
                      <Typography
                        sx={{ fontSize: "0.7rem", fontWeight: "bold" }}
                      >
                        124D5q765EC7ab214Dot
                      </Typography>
                    </Stack>
                    <Stack direction="column" sx={{ ml: "auto" }}>
                      <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                        NGN
                      </Typography>
                      <Typography
                        sx={{ fontSize: "0.7rem", fontWeight: "bold" }}
                      >
                        ₦8000
                      </Typography>
                    </Stack>
                  </Box>
                </Box>

                <Box
                  sx={{
                    background: "#d9d9d9",
                    p: 2,
                    my: 4,
                    borderRadius: 1,
                  }}
                >
                  <Box sx={{ width: "25%" }}>
                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                      You send
                    </Typography>
                    <Box display="flex">
                      <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                        0.003
                      </Typography>
                      <Box
                        display="flex"
                        alignItems="center"
                        sx={{ ml: "auto" }}
                      >
                        <AccountBalanceWalletIcon sx={{ color: "#FF9800" }} />
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: "bold", ml: 1 }}
                        >
                          USDT
                        </Typography>
                        <NavigateBeforeIcon
                          sx={{ transform: "rotate(-90deg)" }}
                        />
                      </Box>
                    </Box>
                  </Box>
                  <Divider>
                    <Box
                      sx={{ background: "#ffffff", px: 1, borderRadius: 10 }}
                    >
                      <Typography sx={{ fontWeight: "bold" }}>⇌</Typography>
                    </Box>
                  </Divider>
                  <Box display="flex">
                    <Box sx={{ width: "25%", ml: "auto" }}>
                      <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                        You receive
                      </Typography>
                      <Box display="flex">
                        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                          0.0002
                        </Typography>
                        <Box
                          display="flex"
                          alignItems="center"
                          sx={{ ml: "auto" }}
                        >
                          <AccountBalanceWalletIcon sx={{ color: "#FF9800" }} />
                          <Typography
                            variant="body2"
                            sx={{ fontWeight: "bold", ml: 1 }}
                          >
                            NGN
                          </Typography>
                          <NavigateBeforeIcon
                            sx={{ transform: "rotate(-90deg)" }}
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <Box display="flex">
                  <Box sx={{ width: "30%" }}>
                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                      USDT Address
                    </Typography>
                    <Box
                      display="flex"
                      sx={{
                        background: "#d9d9d9",
                        borderRadius: 1,
                        px: 1,
                        py: 0.5,
                        mt: 0.5,
                      }}
                    >
                      <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                        124D5q765EC7ab214Dot
                      </Typography>
                      <IconButton size="small" sx={{ ml: "auto" }}>
                        <ContentCopyIcon sx={{ fontSize: "12px" }} />
                      </IconButton>
                    </Box>
                  </Box>
                  <Button
                    sx={{
                      ml: "auto",
                      width: "30%",
                      background: "#54ADF3",
                      ":hover": {
                        background: "#54ADF3",
                      },
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        textTransform: "initial",
                        color: "#ffffff",
                      }}
                    >
                      Proceed to exchange
                    </Typography>
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>

          {/* Transaction Mobile  */}
          <Box
            sx={{
              mt: 2,
              display: {
                xs: "flex",
                md: "none",
              },
            }}
          >
            <Button
              sx={{
                background: "#54ADF3",
                borderRadius: 8,
                p: 1,
                ml: "auto",
              }}
            >
              <Typography
                sx={{ color: "#000000", fontSize: "2rem", fontWeight: "bold" }}
              >
                ⇌
              </Typography>
            </Button>
          </Box>
        </Box>

        {/* Nav Menu  */}
        <Box
          sx={{
            px: 4,
            mt: 2,
            display: {
              xs: "block",
              md: "none",
            },
          }}
        >
          <Box>
            <Toolbar />
            <MobileDashboardMenu pages={mobilePages} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Wallets;
