import { Box, Toolbar, Typography, Card, CardContent } from "@mui/material";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import DashboardMenu from "../components/DashboardMenu";
import Sidebar from "../components/Sidebar";
import { pages, utils } from "../utils/Pages";
import { useNavigate } from "react-router-dom";

const Support = () => {
  const navigate = useNavigate();

  return (
    <Box>
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

        <Box sx={{ px: 4, py: 2, mt: 4 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#54ADF3",
              textAlign: "center",
              mb: 4,
            }}
          >
            Support
          </Typography>

          <Card sx={{ width: { xs: "100%", md: "80%" }, mx: "auto" }}>
            <CardContent sx={{ px: 2, py: 4 }}>
              <Box justifyContent="center" sx={{ position: "relative" }}>
                <Box
                  display="flex"
                  sx={{
                    py: 2,
                    px: 4,
                    width: { xs: "80%", md: "70%" },
                    boxShadow: 1,
                    mt: 4,
                    mx: "auto",
                    ":hover": {
                      cursor: "pointer",
                    },
                  }}
                  onClick={() => navigate("/help")}
                >
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    Get Help
                  </Typography>
                  <KeyboardArrowRightIcon sx={{ ml: "auto" }} />
                </Box>

                <Box
                  display="flex"
                  sx={{
                    py: 2,
                    px: 4,
                    width: { xs: "80%", md: "70%" },
                    boxShadow: 1,
                    mt: 4,
                    mb: 4,
                    mx: "auto",
                    ":hover": {
                      cursor: "pointer",
                    },
                  }}
                  onClick={() => navigate("/faq")}
                >
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    FAQs
                  </Typography>
                  <KeyboardArrowRightIcon sx={{ ml: "auto" }} />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Support;
