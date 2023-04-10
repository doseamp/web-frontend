import {
  Box,
  Card,
  CardContent,
  TextField,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Divider,
  Modal,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DashboardMenu from "../components/DashboardMenu";
import Sidebar from "../components/Sidebar";
import MobileDashboardMenu from "../components/MobileDashboardMenu";
import { pages, mobilePages, utils } from "../utils/Pages";
import { useState } from "react";

const CreateTransaction3 = () => {
  const [pin, setPin] = useState("");
  const [openModal, setOpenModal] = useState(false);
  console.log(pin);

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
          <Box display="flex" alignItems="center" sx={{ mb: 4 }}>
            <IconButton sx={{ border: "1px solid #000000" }}>
              <ArrowBackIcon />
            </IconButton>
            <Typography
              sx={{
                margin: "auto",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Create Transaction
            </Typography>
          </Box>

          <Card sx={{ width: { xs: "100%", md: "50%" }, margin: "auto" }}>
            <CardContent>
              <Typography
                sx={{ fontWeight: "bold", textAlign: "center", mb: 2 }}
              >
                Review
              </Typography>
              <Box display="flex" justifyContent="space-between">
                <Box display="flex" flexDirection="column">
                  <Typography variant="body2">From</Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    0774476939
                  </Typography>
                  <Typography variant="body2">Current Account</Typography>
                </Box>
                <Box display="flex" flexDirection="column">
                  <Typography sx={{ fontWeight: "bold" }}>₦ 1000</Typography>
                  <Divider sx={{ pt: "1px", background: "#000000" }} />
                </Box>
                <Box display="flex" flexDirection="column">
                  <Typography variant="body2">To</Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    0796568102
                  </Typography>
                  <Typography variant="body2">Adigwe Divine</Typography>
                </Box>
              </Box>
              <Button
                sx={{
                  background: "#54ADF3",
                  width: "100%",
                  mt: 4,
                  p: 1,
                  ":hover": { background: "#54ADF3" },
                  boxShadow: 1,
                }}
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                <Typography
                  sx={{ color: "#ffffff", textTransform: "capitalize" }}
                >
                  Pay
                </Typography>
              </Button>

              <Modal
                open={openModal}
                aria-labelledby="modal-modal-title"
                sx={{
                  width: "40%",
                  position: "absolute",
                  left: "40%",
                  top: "40%",
                }}
              >
                <Box sx={{ py: 2, px: 8, background: "#D9D9D9" }}>
                  <Typography
                    id="modal-modal-title"
                    sx={{ fontWeight: "bold", textAlign: "center" }}
                  >
                    Enter Transaction Pin
                  </Typography>
                  <TextField
                    type="password"
                    fullWidth
                    required
                    size="small"
                    maxLength="4"
                    sx={{ background: "#ffffff", boxShadow: 1, mt: 2 }}
                    onChange={(e) => {
                      setPin(e.target.value);
                    }}
                  />
                  <Button
                    sx={{
                      background: "#54ADF3",
                      width: "100%",
                      mt: 4,
                      p: 1,
                      ":hover": { background: "#54ADF3" },
                      boxShadow: 1,
                    }}
                    onClick={() => {
                      setOpenModal(false);
                    }}
                  >
                    <Typography
                      sx={{ color: "#ffffff", textTransform: "capitalize" }}
                    >
                      Continue
                    </Typography>
                  </Button>
                </Box>
              </Modal>
            </CardContent>
          </Card>
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
  );
};

export default CreateTransaction3;
