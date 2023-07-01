import { useState, useContext } from "react";
import axios from "axios";

import {
  Typography,
  TextField,
  Box,
  useMediaQuery,
  useTheme,
  Button,
  Toolbar,
  CircularProgress,
} from "@mui/material";

import Navbar from "../components/Navbar";
import { AuthContext } from "../contexts/AuthContext";

const Kyc = () => {
  const [bvn, setBvn] = useState();
  const [dob, setDOB] = useState();
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const baseUrl = "http://127.0.0.1:5000/api";

  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));

  const onSubmit = async (bvn, dob, firstName, lastName) => {
    try {
      setLoading(true);
      const data = await axios({
        url: `${baseUrl}/bizgem/kyc/verify-bvn`,
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
        method: "post",
        data: {
          dob,
          firstName,
          lastName,
          bvn,
        },
      });

      console.log(data);
      setLoading(false);
    } catch (error) {
      console.error();
      setLoading(false);
    }
  };

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

            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSubmit(bvn, dob, "Anselm", "Iwuanyanwu");
              }}
            >
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
                type="text"
                fullWidth
                required
                placeholder="Eg. 26-03-1997"
                size="small"
                sx={{ mt: 1, mb: 2 }}
                onChange={(e) => {
                  setDOB(e.target.value);
                }}
                inputProps={{
                  maxLength: 10,
                }}
              />

              <Button
                className="buttonStyle"
                type="submit"
                variant="contained"
                fullWidth
                disabled={loading}
                sx={{
                  py: 1.5,
                  px: 3,
                  mt: 2,
                  fontWeight: "bold",
                  textTransform: "capitalize",
                  color: "#000000",
                  background: "#54adf3",
                  ":hover": {
                    background: "#54adf3",
                  },
                }}
              >
                {loading ? (
                  <CircularProgress size={"1.5rem"} sx={{ color: "#ffffff" }} />
                ) : (
                  "Continue"
                )}
              </Button>
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
            KYC Form
          </Typography>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit(bvn, dob, "Anselm", "Iwuanyanwu");
            }}
          >
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
              type="text"
              fullWidth
              required
              placeholder="Eg. 26-03-1997"
              size="small"
              sx={{ mt: 1, mb: 2 }}
              onChange={(e) => {
                setDOB(e.target.value);
              }}
              inputProps={{
                maxLength: 10,
              }}
            />

            <Button
              className="buttonStyle"
              type="submit"
              variant="contained"
              fullWidth
              disabled={loading}
              sx={{
                py: 1.5,
                px: 3,
                mt: 2,
                fontWeight: "bold",
                textTransform: "capitalize",
                color: "#000000",
                background: "#54adf3",
                ":hover": {
                  background: "#54adf3",
                },
              }}
            >
              {loading ? (
                <CircularProgress size={"1.5rem"} sx={{ color: "#ffffff" }} />
              ) : (
                "Continue"
              )}
            </Button>
          </form>
        </Box>
      )}
    </Box>
  );
};

export default Kyc;
