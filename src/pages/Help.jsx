import { Box, Toolbar } from "@mui/material";

import DashboardMenu from "../components/DashboardMenu";
import Sidebar from "../components/Sidebar";
import { pages, utils } from "../utils/Pages";

const Help = () => {
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

        <Box sx={{ px: 4, py: 2, mt: 4 }}> Help</Box>
      </Box>
    </Box>
  );
};

export default Help;
