import {
  Box,
  Card,
  CardContent,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import DashboardMenu from "../components/DashboardMenu";
import Sidebar from "../components/Sidebar";
import MobileDashboardMenu from "../components/MobileDashboardMenu";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { pages, mobilePages, utils } from "../utils/Pages";

const Transactions = () => {
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
                variant="body2"
                sx={{ fontWeight: "bold", textAlign: "center", mb: 2 }}
              >
                Send Money
              </Typography>

              <Card>
                <CardContent>
                  <Box display="flex">
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{ color: "#54adf3", fontWeight: "bold" }}
                      >
                        Send to Bank Account
                      </Typography>
                      <Typography sx={{ fontSize: "0.7rem" }}>
                        Send to a local Bank Account
                      </Typography>
                    </Box>
                    <IconButton sx={{ ml: "auto" }}>
                      <ArrowForwardIosIcon />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
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

export default Transactions;
