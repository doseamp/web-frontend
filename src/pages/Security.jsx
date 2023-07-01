import {
  Box,
  Toolbar,
  Typography,
  Card,
  CardContent,
  Button,
  TextField,
} from "@mui/material";

import DashboardMenu from "../components/DashboardMenu";
import Sidebar from "../components/Sidebar";
import { pages, utils } from "../utils/Pages";

const Security = () => {
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
            Security
          </Typography>

          <Card sx={{ width: { xs: "100%", md: "80%" }, mx: "auto" }}>
            <CardContent sx={{ px: 2, py: 4 }}>
              <Box justifyContent="center" sx={{ position: "relative" }}>
                <Typography sx={{ fontWeight: "bold", textAlign: "center" }}>
                  Change Password
                </Typography>

                <Box sx={{ width: "70%", mx: "auto", mt: 4 }}>
                  <form>
                    <label>Current Password</label>
                    <TextField
                      type="password"
                      fullWidth
                      required
                      size="small"
                      variant="standard"
                      sx={{
                        mt: 1,
                        mb: 4,
                        pt: 2,
                        boxShadow: 1,
                        borderRadius: 1,
                      }}
                    />

                    <label>New Password</label>
                    <TextField
                      type="password"
                      fullWidth
                      required
                      size="small"
                      variant="standard"
                      sx={{
                        mt: 1,
                        mb: 4,
                        pt: 2,
                        boxShadow: 1,
                        borderRadius: 1,
                      }}
                    />
                    <label>Confirm New Password</label>
                    <TextField
                      type="password"
                      fullWidth
                      required
                      size="small"
                      variant="standard"
                      sx={{
                        mt: 1,
                        mb: 4,
                        pt: 2,
                        boxShadow: 1,
                        borderRadius: 1,
                      }}
                    />

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
                  </form>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Security;
