import {
  Box,
  Toolbar,
  Stack,
  Typography,
  IconButton,
  Link,
  Card,
  CardContent,
  Button,
} from "@mui/material";

import DashboardMenu from "../components/DashboardMenu";
import Sidebar from "../components/Sidebar";
import MobileDashboardMenu from "../components/MobileDashboardMenu";
import { pages, mobilePages, utils } from "../utils/Pages";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

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
          <Box
            sx={{
              mb: 4,
            }}
          >
            <Box display="flex">
              <Box
                sx={{
                  width: {
                    xs: "75%",
                    md: "35%",
                    lg: "25%",
                  },
                }}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box
                    component="img"
                    src="nigeria.png"
                    sx={{ width: "70px", height: "70px" }}
                  />
                  <Stack direction="column">
                    <Typography sx={{ fontSize: "0.7rem", fontWeight: "bold" }}>
                      Nigerian Naira
                    </Typography>
                    <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                      ₦ 80,000
                    </Typography>
                  </Stack>
                  <IconButton>
                    <VisibilityOffIcon />
                  </IconButton>
                </Box>

                <Box display="flex" alignItems="center">
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    ID: 124D5q765EC7ab214Dot
                  </Typography>
                  <IconButton sx={{ ml: "auto" }}>
                    <ContentCopyIcon sx={{ fontSize: "1rem" }} />
                  </IconButton>
                </Box>
              </Box>

              <Stack
                direction="column"
                sx={{ ml: "auto", display: { xs: "none", md: "flex" } }}
                gap={2}
              >
                <Button sx={{ boxShadow: 1, p: 1 }}>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      textTransform: "capitalize",
                      color: "#000000",
                    }}
                  >
                    Create Transaction
                  </Typography>
                </Button>
                <Button sx={{ boxShadow: 1, p: 1 }}>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      textTransform: "capitalize",
                      color: "#000000",
                    }}
                  >
                    Fund Account
                  </Typography>
                </Button>
              </Stack>
            </Box>
            <Stack
              direction="column"
              sx={{ mt: 2, display: { xs: "flex", md: "none" } }}
              gap={2}
            >
              <Button sx={{ boxShadow: 1, p: 1 }}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    textTransform: "capitalize",
                    color: "#000000",
                  }}
                >
                  Create Transaction
                </Typography>
              </Button>
              <Button sx={{ boxShadow: 1, p: 1 }}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    textTransform: "capitalize",
                    color: "#000000",
                  }}
                >
                  Fund Account
                </Typography>
              </Button>
            </Stack>
          </Box>

          <Card>
            <CardContent>
              <Box>
                <Box display="flex" sx={{ mx: 2 }}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Beneficiaries
                  </Typography>
                  <Link
                    href=""
                    sx={{ color: "#17D641", ml: "auto", cursor: "pointer" }}
                  >
                    View All
                  </Link>
                </Box>
                <Box
                  display="grid"
                  sx={{
                    gridTemplateColumns: {
                      xs: "1fr 1fr 1fr ",
                      md: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
                    },
                    gap: 1,
                  }}
                >
                  <Stack justifyContent="center" alignItems="center">
                    <Button
                      variant="contained"
                      sx={{
                        background: "#54ADF3",
                        borderRadius: 7,
                        p: 2,
                        mt: 1,
                      }}
                    >
                      I
                    </Button>
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: "bold", textAlign: "center" }}
                    >
                      Iwuanyanwu Claire
                    </Typography>
                  </Stack>
                  <Stack justifyContent="center" alignItems="center">
                    <Button
                      variant="contained"
                      sx={{
                        background: "#FF9800",
                        borderRadius: 7,
                        p: 2,
                        mt: 1,
                      }}
                    >
                      I
                    </Button>
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: "bold", textAlign: "center" }}
                    >
                      Iwuanyanwu Claire
                    </Typography>
                  </Stack>
                  <Stack justifyContent="center" alignItems="center">
                    <Button
                      variant="contained"
                      sx={{
                        background: "#D9D9D9",
                        borderRadius: 7,
                        p: 2,
                        mt: 1,
                      }}
                    >
                      I
                    </Button>
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: "bold", textAlign: "center" }}
                    >
                      Iwuanyanwu Claire
                    </Typography>
                  </Stack>
                </Box>
              </Box>
            </CardContent>
          </Card>

          <Box sx={{ mt: 4, px: 2 }}>
            <Typography sx={{ fontWeight: "bold" }}>
              Recent Transactions
            </Typography>
            <Typography sx={{ fontSize: "0.7rem", my: 1 }}>Today</Typography>
            <Box display="flex" sx={{ mb: 2, alignItems: "center" }}>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                <Box
                  component="span"
                  sx={{ fontSize: "1rem", fontWeight: "bold", mr: 1 }}
                >
                  ⇌
                </Box>
                Fredrick Agbo -305
              </Typography>
              <Typography
                sx={{ fontWeight: "bold", color: "#D61717", ml: "auto" }}
              >
                ₦ 8000
              </Typography>
            </Box>
            <Box display="flex" sx={{ mb: 2, alignItems: "center" }}>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                <Box
                  component="span"
                  sx={{ fontSize: "1rem", fontWeight: "bold", mr: 1 }}
                >
                  ⇌
                </Box>
                Mtn Ng Vtu 2348056750798
              </Typography>
              <Typography
                sx={{ fontWeight: "bold", color: "#D61717", ml: "auto" }}
              >
                ₦ 1000
              </Typography>
            </Box>
            <Box display="flex" sx={{ mb: 2, alignItems: "center" }}>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                <Box
                  component="span"
                  sx={{ fontSize: "1rem", fontWeight: "bold", mr: 1 }}
                >
                  ⇌
                </Box>
                Shopping - POS
              </Typography>
              <Typography
                sx={{ fontWeight: "bold", color: "#D61717", ml: "auto" }}
              >
                ₦ 10,000
              </Typography>
            </Box>
            <Box display="flex" sx={{ mb: 2, alignItems: "center" }}>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                <Box
                  component="span"
                  sx={{ fontSize: "1rem", fontWeight: "bold", mr: 1 }}
                >
                  ⇌
                </Box>
                Fredrick Agbo -305
              </Typography>
              <Typography
                sx={{ fontWeight: "bold", color: "#17D641", ml: "auto" }}
              >
                ₦ 5000
              </Typography>
            </Box>
          </Box>
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
