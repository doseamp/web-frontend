import {
  Box,
  Toolbar,
  Typography,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import { useContext } from "react";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CheckIcon from "@mui/icons-material/Check";
import DashboardMenu from "../components/DashboardMenu";
import Sidebar from "../components/Sidebar";
import { AuthContext } from "../contexts/AuthContext";
import { pages, utils } from "../utils/Pages";

const Profile = () => {
  const { user } = useContext(AuthContext);

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
            Profile
          </Typography>

          <Card sx={{ width: { xs: "100%", md: "80%" }, mx: "auto" }}>
            <CardContent sx={{ px: 2, py: 4 }}>
              <Box justifyContent="center" sx={{ position: "relative" }}>
                <Box
                  display="flex"
                  sx={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Box>
                    <Avatar />
                  </Box>
                  <Box sx={{ ml: 2 }}>
                    <Typography sx={{ fontWeight: "bold" }}>
                      {user.displayName}
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{ width: { xs: "80%", md: "70%" }, mx: "auto", mt: 4 }}
                >
                  <label>Account Name</label>
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
                    <Typography variant="body2">{user.displayName}</Typography>
                    <CheckIcon
                      sx={{
                        ml: "auto",
                        display: {
                          xs: "none",
                          md: "flex",
                        },
                      }}
                    />
                  </Box>
                </Box>

                <Box
                  sx={{ width: { xs: "80%", md: "70%" }, mx: "auto", mt: 4 }}
                >
                  <label>Email</label>
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
                    <Typography variant="body2">{user.email}</Typography>
                    <CheckIcon
                      sx={{
                        ml: "auto",
                        display: {
                          xs: "none",
                          md: "flex",
                        },
                      }}
                    />
                  </Box>
                </Box>

                <Box
                  sx={{ width: { xs: "80%", md: "70%" }, mx: "auto", mt: 4 }}
                >
                  <label>Phone Number</label>
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
                    <Typography variant="body2">080123446789</Typography>
                    <CheckIcon
                      sx={{
                        ml: "auto",
                        display: {
                          xs: "none",
                          md: "flex",
                        },
                      }}
                    />
                  </Box>
                </Box>

                <Box
                  sx={{ width: { xs: "80%", md: "70%" }, mx: "auto", mt: 4 }}
                >
                  <label>Date of Birth</label>
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
                    <Typography variant="body2">18-06-2000</Typography>
                    <CheckIcon
                      sx={{
                        ml: "auto",
                        display: {
                          xs: "none",
                          md: "flex",
                        },
                      }}
                    />
                  </Box>
                </Box>

                <Box
                  sx={{ width: { xs: "80%", md: "70%" }, mx: "auto", mt: 4 }}
                >
                  <label>Identification</label>
                  <Box
                    display="flex"
                    sx={{
                      px: 2,
                      py: 1.5,
                      boxShadow: 1,
                      borderRadius: 1,
                      mt: 1,
                      mx: "auto",
                      ":hover": {
                        cursor: "pointer",
                      },
                    }}
                  >
                    <Typography variant="body2">Identification</Typography>
                    <KeyboardArrowRightIcon sx={{ ml: "auto" }} />
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
