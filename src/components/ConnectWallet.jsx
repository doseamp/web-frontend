import {
  Box,
  CardContent,
  Grid,
  Card,
  Typography,
  IconButton,
  Divider,
  Modal,
  Stack,
} from "@mui/material";

import ShieldIcon from "@mui/icons-material/Shield";
import CancelIcon from "@mui/icons-material/Cancel";

const ConnectWallet = ({ openModal, setOpenModal }) => {
  return (
    <Box>
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
                <Typography variant="body2" sx={{ color: "#272525", mb: 2 }}>
                  Wallets are used to send, recieve, store and digital assets
                  like Ethereum and NFTs
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
                <Typography variant="body2" sx={{ color: "#272525", mb: 2 }}>
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
            <IconButton sx={{ ml: "auto" }} onClick={() => setOpenModal(false)}>
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
              assets. It is also a new way to log in, without needing to create
              new accounts and passwords on every website.
            </Typography>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default ConnectWallet;
