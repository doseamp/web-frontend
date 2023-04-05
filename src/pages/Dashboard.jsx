import {
  Box,
  CardContent,
  Grid,
  Toolbar,
  Card,
  Typography,
  IconButton,
  Divider,
  Modal,
  Stack,
} from "@mui/material";

import DashboardMenu from "../components/DashboardMenu";
import Sidebar from "../components/Sidebar";
import DbColumn1 from "../components/DbColumn1";
import DbColumn2 from "../components/DbColumn2";
import MobileDashboardMenu from "../components/MobileDashboardMenu";
import ShieldIcon from "@mui/icons-material/Shield";
import CancelIcon from "@mui/icons-material/Cancel";
import { pages, mobilePages, utils } from "../utils/Pages";
import { useState } from "react";

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Box sx={{ background: "#0000000" }}>
      <DashboardMenu />
      <Sidebar pages={pages} utils={utils} />

      <Box
        sx={{
          ml: {
            xs: 0,
            md: "250px",
          },
        }}
      >
        <Toolbar />

        <Box
          sx={{
            px: 4,
          }}
        >
          <Grid
            container
            justifyContent="space-between"
            sx={{
              mt: 4,
              mb: 1,
            }}
          >
            <Grid item lg={8.4} md={12} xs={12}>
              <Box>
                <DbColumn1 setOpenModal={setOpenModal} />
              </Box>
            </Grid>
            <Grid item lg={2.8} md={12} xs={12}>
              <DbColumn2 />
            </Grid>
          </Grid>

          <Modal
            open={openModal}
            sx={{
              position: "absolute",
              left: "20%",
              top: "20%",
              display: { xs: "none", md: "block" },
            }}
          >
            <Card sx={{ width: "70%" }}>
              <CardContent>
                <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Connect a Wallet
                  </Typography>
                  <IconButton
                    sx={{ ml: "auto" }}
                    onClick={() => setOpenModal(false)}
                  >
                    <CancelIcon sx={{ fontSize: "2rem" }} />
                  </IconButton>
                </Box>
                <Divider />
                <Grid container>
                  <Grid item xs={6} sx={{ borderRight: "1px solid #d9d9d9" }}>
                    <Box sx={{ p: 2 }}>
                      <Box
                        display="flex"
                        alignItems="center"
                        sx={{
                          mb: 2,
                          cursor: "pointer",
                          p: 2,
                          ":hover": {
                            background: "#d9d9d9",
                          },
                        }}
                      >
                        <ShieldIcon />
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: "bold", ml: 4 }}
                        >
                          Trust Wallet
                        </Typography>
                      </Box>
                      <Box
                        display="flex"
                        alignItems="center"
                        sx={{
                          mb: 2,
                          cursor: "pointer",
                          p: 2,
                          ":hover": {
                            background: "#d9d9d9",
                          },
                        }}
                      >
                        <ShieldIcon />
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: "bold", ml: 4 }}
                        >
                          Binance
                        </Typography>
                      </Box>
                      <Box
                        display="flex"
                        alignItems="center"
                        sx={{
                          mb: 2,
                          cursor: "pointer",
                          p: 2,
                          ":hover": {
                            background: "#d9d9d9",
                          },
                        }}
                      >
                        <ShieldIcon />
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: "bold", ml: 4 }}
                        >
                          Metamask
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6} sx={{ px: 2 }}>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        textTransform: "capitalize",
                        mt: 4,
                        mb: 2,
                      }}
                    >
                      What is a wallet?
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        textTransform: "capitalize",
                        mb: 2,
                      }}
                    >
                      A home for your digital assets
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#272525", mb: 2 }}
                    >
                      Wallets are used to send, recieve, store and digital
                      assets like Ethereum and NFTs
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        textTransform: "capitalize",
                        mb: 2,
                      }}
                    >
                      A New way to log in
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#272525", mb: 2 }}
                    >
                      Instead of creating new accounts and passwords on every
                      website, just connect your wallet
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Modal>

          {/* Mobile Modal  */}
          <Modal
            open={openModal}
            sx={{
              position: "absolute",
              display: { xs: "block", md: "none" },
              top: 0,
            }}
          >
            <Box sx={{ background: "#ffffff" }}>
              <Box display="flex" alignItems="center" sx={{ mb: 1, px: 2 }}>
                <Typography sx={{ fontWeight: "bold" }}>
                  Connect a Wallet
                </Typography>
                <IconButton
                  sx={{ ml: "auto" }}
                  onClick={() => setOpenModal(false)}
                >
                  <CancelIcon sx={{ fontSize: "2rem" }} />
                </IconButton>
              </Box>
              <Divider />
              <Box display="flex">
                <Stack direction="column" sx={{ p: 1, mr: 2 }}>
                  <ShieldIcon sx={{ fontSize: "2rem", alignSelf: "center" }} />
                  <Typography variant="body2" sx={{ textAlign: "center" }}>
                    Trust Wallet
                  </Typography>
                </Stack>
                <Stack direction="column" sx={{ p: 1, mr: 2 }}>
                  <ShieldIcon sx={{ fontSize: "2rem", alignSelf: "center" }} />
                  <Typography variant="body2" sx={{ textAlign: "center" }}>
                    Binance
                  </Typography>
                </Stack>
                <Stack direction="column" sx={{ p: 1, mr: 2 }}>
                  <ShieldIcon sx={{ fontSize: "2rem", alignSelf: "center" }} />
                  <Typography variant="body2" sx={{ textAlign: "center" }}>
                    Metamask
                  </Typography>
                </Stack>
              </Box>
              <Box sx={{ background: "#d9d9d9", p: 2 }}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    textTransform: "capitalize",
                    mb: 2,
                    textAlign: "center",
                  }}
                >
                  What is a wallet?
                </Typography>
                <Typography sx={{ textAlign: "center" }}>
                  A Wallet is used to send, receive, store, and display digital
                  assets. It is also a new way to log in, without needing to
                  create new accounts and passwords on every website.
                </Typography>
              </Box>
            </Box>
          </Modal>
        </Box>

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

export default Dashboard;
