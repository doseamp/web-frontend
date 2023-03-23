import { Box, Grid, Toolbar } from "@mui/material";

import DashboardMenu from "../components/DashboardMenu";
import Sidebar from "../components/Sidebar";
import DbColumn1 from "../components/DbColumn1";
import DbColumn2 from "../components/DbColumn2";
import DbColumn3 from "../components/DbColumn3";
import MobileDashboard from "../components/MobileDashboard";
import MobileDashboardMenu from "../components/MobileDashboardMenu";
import { pages, mobilePages, utils } from "../utils/Pages";

const Dashboard = () => {
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
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
          <Grid
            container
            justifyContent="space-between"
            sx={{
              mt: 8,
            }}
          >
            <Grid item lg={2.8} md={5.6} xs={11}>
              <Box>
                <DbColumn1 />
              </Box>
            </Grid>
            <Grid item lg={5.6} md={5.6} xs={11}>
              <DbColumn2 />
            </Grid>
            <Grid item lg={2.8} md={5.6} xs={11}>
              <DbColumn3 />
            </Grid>
          </Grid>
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
            <MobileDashboard />
            <Toolbar />
            <MobileDashboardMenu pages={mobilePages} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
