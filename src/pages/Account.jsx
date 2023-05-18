import {
  Avatar,
  Box,
  Card,
  CardContent,
  Toolbar,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import DashboardMenu from "../components/DashboardMenu";
import Sidebar from "../components/Sidebar";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { AuthContext } from "../contexts/AuthContext";
import { pages, utils } from "../utils/Pages";

const Account = () => {
  const { user } = useContext(AuthContext);
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
            Account
          </Typography>

          <Card sx={{ width: "80%", mx: "auto" }}>
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
                  display="flex"
                  sx={{
                    py: 2,
                    px: 4,
                    width: "70%",
                    boxShadow: 1,
                    mt: 4,
                    mx: "auto",
                    ":hover": {
                      cursor: "pointer",
                    },
                  }}
                  onClick={() => navigate("/profile")}
                >
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    Profile
                  </Typography>
                  <KeyboardArrowRightIcon sx={{ ml: "auto" }} />
                </Box>

                <Box
                  display="flex"
                  sx={{
                    py: 2,
                    px: 4,
                    width: "70%",
                    boxShadow: 1,
                    mt: 4,
                    mx: "auto",
                    ":hover": {
                      cursor: "pointer",
                    },
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    Statement &amp; Reports
                  </Typography>
                  <KeyboardArrowRightIcon sx={{ ml: "auto" }} />
                </Box>

                <Box
                  display="flex"
                  sx={{
                    py: 2,
                    px: 4,
                    width: "70%",
                    boxShadow: 1,
                    mt: 4,
                    mx: "auto",
                    ":hover": {
                      cursor: "pointer",
                    },
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    Security
                  </Typography>
                  <KeyboardArrowRightIcon sx={{ ml: "auto" }} />
                </Box>

                <Box
                  display="flex"
                  sx={{
                    py: 2,
                    px: 4,
                    width: "70%",
                    boxShadow: 1,
                    mt: 4,
                    mb: 2,
                    mx: "auto",
                    ":hover": {
                      cursor: "pointer",
                    },
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    Support
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

export default Account;
