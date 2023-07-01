import {
  Box,
  Toolbar,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";

import DashboardMenu from "../components/DashboardMenu";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Sidebar from "../components/Sidebar";
import { pages, utils } from "../utils/Pages";

const Statement = () => {
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
            Statement
          </Typography>

          <Card sx={{ width: { xs: "100%", md: "80%" }, mx: "auto" }}>
            <CardContent sx={{ px: 2, py: 4 }}>
              <Box justifyContent="center" sx={{ position: "relative" }}>
                <Typography sx={{ fontWeight: "bold", textAlign: "center" }}>
                  Get Statement
                </Typography>

                <Box
                  sx={{ width: { xs: "80%", md: "70%" }, mx: "auto", mt: 4 }}
                >
                  <label>Start Date</label>
                  <Box
                    display="flex"
                    sx={{
                      px: 2,
                      py: 1.5,
                      boxShadow: 1,
                      borderRadius: 1,
                      mt: 1,
                      mx: "auto",
                    }}
                  >
                    <Typography variant="body2">
                      Select a date to start
                    </Typography>
                    <CalendarTodayIcon
                      sx={{
                        ml: "auto",
                        px: 1,
                        borderRadius: 2,
                        ":hover": {
                          cursor: "pointer",
                          boxShadow: 1,
                        },
                      }}
                    />
                  </Box>
                </Box>

                <Box
                  sx={{ width: { xs: "80%", md: "70%" }, mx: "auto", mt: 4 }}
                >
                  <label>End Date</label>
                  <Box
                    display="flex"
                    sx={{
                      px: 2,
                      py: 1.5,
                      boxShadow: 1,
                      borderRadius: 1,
                      mt: 1,
                      mx: "auto",
                    }}
                  >
                    <Typography variant="body2">
                      Select a date to end
                    </Typography>
                    <CalendarTodayIcon
                      sx={{
                        ml: "auto",
                        px: 1,
                        borderRadius: 2,
                        ":hover": {
                          cursor: "pointer",
                          boxShadow: 1,
                        },
                      }}
                    />
                  </Box>
                </Box>

                <Box
                  sx={{ width: { xs: "80%", md: "70%" }, mx: "auto", mt: 4 }}
                >
                  <Button
                    className="buttonStyle"
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                      py: 1.5,
                      px: 3,
                      fontWeight: "bold",
                      textTransform: "capitalize",
                      color: "#000000",
                      background: "#54adf3",
                      ":hover": {
                        background: "#54adf3",
                      },
                    }}
                  >
                    Generate
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Statement;
