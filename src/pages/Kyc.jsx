import { useState } from "react";

import {
  Typography,
  TextField,
  Box,
  useMediaQuery,
  useTheme,
  Toolbar,
} from "@mui/material";

import Navbar from "../components/Navbar";

const Kyc = () => {
  const [bvn, setBvn] = useState();
  const [dob, setDOB] = useState();

  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box>
      <Navbar />
      <Toolbar sx={{ mb: 1 }} />
      {md ? (
        <Box
          className="loginParent"
          sx={{ position: "relative", height: "100vh" }}
        >
          <Box
            sx={{
              position: "relative",
              height: "400px",
              width: "80%",
              margin: "0px auto",
              backgroundColor: "#817e7e",
              opacity: 0.9,
              top: "60px",
              pt: 6,
              pl: 3,
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#ffffff", width: "25%" }}
            >
              Complete your registration to start transacting with Payonize
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "white",
              position: "absolute",
              width: "35%",
              top: "5px",
              right: "20%",
              boxShadow: 3,
              borderRadius: 1,
              mx: 2,
              px: 4,
              py: 4,
            }}
          >
            <Typography
              className="headingStyle"
              variant="h4"
              sx={{ fontWeight: "bold", pb: 6 }}
            >
              KYC Form
            </Typography>

            <form onSubmit={() => console.log(bvn, dob)}>
              <label>BVN</label>
              <TextField
                type="number"
                fullWidth
                required
                placeholder="Eg. 12345678900"
                size="small"
                sx={{ mt: 1, mb: 2 }}
                onChange={(e) => {
                  setBvn(e.target.value);
                }}
                inputProps={{
                  maxLength: 11,
                }}
              />

              <label>Date of Birth</label>
              <TextField
                type="number"
                fullWidth
                required
                placeholder="Eg. 1997-03-26"
                size="small"
                sx={{ mt: 1, mb: 2 }}
                onChange={(e) => {
                  setDOB(e.target.value);
                }}
                inputProps={{
                  maxLength: 10,
                }}
              />
            </form>
          </Box>
        </Box>
      ) : (
        <Box sx={{ py: 2, px: 2 }}>
          <Typography
            className="headingStyle"
            variant="h4"
            sx={{ fontWeight: "bold", pb: 4 }}
          >
            Payonize Login
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Kyc;
