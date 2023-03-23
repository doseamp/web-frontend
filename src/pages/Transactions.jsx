import { Box, Toolbar } from "@mui/material";

import DashboardMenu from "../components/DashboardMenu";
import Sidebar from "../components/Sidebar";
import MobileDashboardMenu from "../components/MobileDashboardMenu";
import { pages, mobilePages, utils } from "../utils/Pages";

const Transactions = () => {
  return (
    <Box sx={{ background: "#D9D9D9" }}>
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

        <Box sx={{ px: 4, py: 2, mt: 4 }}> Transactions</Box>
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
