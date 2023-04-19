import {
  Box,
  Toolbar,
  Typography,
  Icon,
  IconButton,
  Stack,
  Button,
  Card,
  CardContent,
  Divider,
} from "@mui/material";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

import DashboardMenu from "../components/DashboardMenu";
import Sidebar from "../components/Sidebar";
import { pages, utils } from "../utils/Pages";

const WalletDetails = () => {
  return (
    <Box>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
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

        <Box
          sx={{
            px: 4,
            py: 2,
            mt: {
              xs: 2,
              md: 4,
            },
          }}
        >
          <Box
            sx={{
              width: {
                xs: "75%",
                md: "35%",
                lg: "25%",
              },
            }}
          >
            <Box display="flex" sx={{ mb: 1 }}>
              <Icon>
                <AccountBalanceWalletIcon sx={{ color: "#FF9800" }} />
              </Icon>
              <Typography variant="body2" sx={{ ml: 1, fontWeight: "bold" }}>
                Wallet 1
              </Typography>
            </Box>
            <Typography sx={{ fontWeight: "bold", fontSize: "0.7rem" }}>
              Total Balance
            </Typography>
            <Box display="flex">
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                $169.99
              </Typography>
              <IconButton sx={{ ml: "auto" }}>
                <VisibilityOutlinedIcon />
              </IconButton>
            </Box>
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

          <Box
            sx={{
              my: 4,
              display: {
                xs: "block",
                md: "none",
              },
            }}
          >
            <Card>
              <CardContent>
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                  USDT ⇌ NGN
                </Typography>
                <Box
                  sx={{
                    background: "#d9d9d9",
                    p: 2,
                    my: 3,
                    borderRadius: 1,
                  }}
                >
                  <Box></Box>
                  <Box>
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
                  <Divider sx={{ my: 1 }}>
                    <Box
                      sx={{ background: "#ffffff", px: 1, borderRadius: 10 }}
                    >
                      <Typography sx={{ fontWeight: "bold" }}>⇌</Typography>
                    </Box>
                  </Divider>

                  <Box>
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
                          sx={{ fontWeight: "bold", ml: 1, mr: 4 }}
                        >
                          NGN
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <Box>
                  <Box>
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
                      width: "100%",
                      background: "#54ADF3",
                      mt: 4,
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
        </Box>
      </Box>
    </Box>
  );
};

export default WalletDetails;
