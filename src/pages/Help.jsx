import {
  Box,
  Toolbar,
  Typography,
  Card,
  CardContent,
  Tooltip,
  IconButton,
  TextField,
  InputAdornment,
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DashboardMenu from "../components/DashboardMenu";
import Sidebar from "../components/Sidebar";
import { pages, utils } from "../utils/Pages";
import { useState } from "react";

const Help = () => {
  const phoneNumber = "0900001CALLPAYONIZE";
  const [title, setTitle] = useState("copy");
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
                  Get Help
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "0.7rem",
                    mt: 1,
                  }}
                >
                  Reach out to us by calling us or dropping a message.
                </Typography>

                <Box
                  sx={{ width: { xs: "80%", md: "70%" }, mx: "auto", mt: 4 }}
                >
                  <label>Call Us</label>
                  <Box
                    display="flex"
                    sx={{
                      px: 2,
                      py: 1,
                      mt: 1,
                      boxShadow: 1,
                      mx: "auto",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                      {phoneNumber}
                    </Typography>
                    <Tooltip
                      title={title}
                      sx={{
                        ml: "auto",
                        px: 1,
                        borderRadius: 2,
                      }}
                      onClick={() => {
                        setTitle("copied");
                        navigator.clipboard.writeText(phoneNumber);
                        setTimeout(() => {
                          setTitle("copy");
                        }, 1000);
                      }}
                    >
                      <IconButton>
                        <ContentCopyIcon />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </Box>

                <Box
                  sx={{ width: { xs: "80%", md: "70%" }, mx: "auto", mt: 4 }}
                >
                  <label>Message us</label>
                  <TextField
                    type="password"
                    fullWidth
                    multiline
                    rows={3}
                    placeholder="Drop your message here"
                    size="small"
                    variant="standard"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton>
                            <SendIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      mt: 1,
                      mb: 4,
                      pt: 2,
                      px: 1,
                      boxShadow: 1,
                      borderRadius: 1,
                    }}
                  />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Help;
