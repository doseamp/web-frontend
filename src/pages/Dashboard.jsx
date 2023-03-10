import { Box, Toolbar } from "@mui/material";
import DashboardMenu from "../components/DashboardMenu";
import DbCardsComp from "../components/DbCardsComp";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <Box sx={{ background: "#F5F5F5" }}>
      <DashboardMenu />
      <Sidebar />
      <Box sx={{ ml: "250px" }}>
        <Toolbar />
        <Box sx={{ px: 4, py: 2, mt: 4 }}>
          <DbCardsComp />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
