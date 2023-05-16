import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Typography,
  Button,
  Box,
  useMediaQuery,
  useTheme,
  Toolbar,
} from "@mui/material";

import AppleIcon from "@mui/icons-material/Apple";
import EmailIcon from "@mui/icons-material/Email";

import { UtilsContext } from "../contexts/UtilsContext";
import { login } from "../utils/AuthFn";
import { googleLogin } from "../utils/AuthFn";
import Navbar from "../components/Navbar";

const Signup = () => {
  const { setErrorMsg } = useContext(UtilsContext);
  const { setLoading } = useContext(UtilsContext);
  const navigate = useNavigate();

  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));

  const handleClick = {
    login: async (email, password) => {
      try {
        setLoading(true);
        await login(email, password);
        setLoading(false);
        navigate("/dashboard");
      } catch (error) {
        setLoading(false);
        setErrorMsg({ passwordLogin: "Incorrect email or password" });
        setTimeout(() => {
          setErrorMsg({ passwordLogin: null });
        }, 5000);
      }
    },

    googleLogin: async () => {
      await googleLogin();
    },
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
              Payonize Sign up
            </Typography>

            <Button
              className="buttonStyle"
              variant="contained"
              fullWidth
              sx={{
                py: 1.5,
                px: 3,
                mt: 1,
                mb: 2,
                fontWeight: "bold",
                textTransform: "capitalize",
                background: "#b4b2b2",
                color: "#000000",
                ":hover": {
                  background: "#b4b2b2",
                },
              }}
              onClick={async () => {
                await handleClick.googleLogin();
              }}
            >
              <Box display="flex" alignItems="center" justifyContent="center">
                <img
                  src="google.png"
                  alt="Google"
                  style={{ width: "25px", height: "25px" }}
                />
                <span style={{ marginLeft: "8px" }}>Continue with Google</span>
              </Box>
            </Button>

            <Button
              className="buttonStyle"
              variant="contained"
              fullWidth
              sx={{
                py: 1.5,
                px: 3,
                mt: 3,
                mb: 2,
                textTransform: "capitalize",
                fontWeight: "bold",
                background: "#b4b2b2",
                color: "#000000",
                ":hover": {
                  background: "#b4b2b2",
                },
              }}
            >
              <Box display="flex" alignItems="center" justifyContent="center">
                <AppleIcon sx={{ mr: 1 }} /> <span>Continue with Apple</span>
              </Box>
            </Button>

            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              sx={{
                my: 3,
              }}
            >
              <Box
                sx={{
                  background: "#817e7e",
                  height: "1px",
                  flex: 1,
                }}
              ></Box>
              <Box sx={{ px: 2 }}>or</Box>
              <Box
                sx={{
                  background: "#817e7e",
                  height: "1px",
                  flex: 1,
                }}
              ></Box>
            </Box>

            <Button
              className="buttonStyle"
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                py: 1.5,
                px: 3,
                mt: 2,
                mb: 1,
                fontWeight: "bold",
                textTransform: "capitalize",
                background: "#b4b2b2",
                color: "#000000",
                ":hover": {
                  background: "#b4b2b2",
                },
              }}
              onClick={() => navigate("/signup/email")}
            >
              <Box display="flex" alignItems="center" justifyContent="center">
                <EmailIcon sx={{ mr: 1 }} /> <span>Continue with Email</span>
              </Box>
            </Button>

            <Typography sx={{ mt: 2, mb: 4 }}>
              Already have an account?{" "}
              <Link to="/login" style={{ color: "#54adf3" }}>
                Login
              </Link>
            </Typography>
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

          <Button
            className="buttonStyle"
            variant="contained"
            fullWidth
            sx={{
              py: 1.5,
              px: 3,
              mt: 1,
              mb: 2,
              fontWeight: "bold",
              textTransform: "capitalize",
              background: "#b4b2b2",
              color: "#000000",
              ":hover": {
                background: "#b4b2b2",
              },
            }}
            onClick={async () => {
              await handleClick.googleLogin();
            }}
          >
            <Box display="flex" alignItems="center" justifyContent="center">
              <img
                src="google.png"
                alt="Google"
                style={{ width: "25px", height: "25px" }}
              />
              <span style={{ marginLeft: "8px" }}>Continue with Google</span>
            </Box>
          </Button>

          <Button
            className="buttonStyle"
            variant="contained"
            fullWidth
            sx={{
              py: 1.5,
              px: 3,
              mt: 3,
              mb: 2,
              textTransform: "capitalize",
              fontWeight: "bold",
              background: "#b4b2b2",
              color: "#000000",
              ":hover": {
                background: "#b4b2b2",
              },
            }}
          >
            <Box display="flex" alignItems="center" justifyContent="center">
              <AppleIcon sx={{ mr: 1 }} /> <span>Continue with Apple</span>
            </Box>
          </Button>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              my: 3,
            }}
          >
            <Box
              sx={{
                background: "#817e7e",
                height: "1px",
                flex: 1,
              }}
            ></Box>
            <Box sx={{ px: 2 }}>or</Box>
            <Box
              sx={{
                background: "#817e7e",
                height: "1px",
                flex: 1,
              }}
            ></Box>
          </Box>

          <Button
            className="buttonStyle"
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              py: 1.5,
              px: 3,
              mt: 2,
              mb: 1,
              fontWeight: "bold",
              textTransform: "capitalize",
              background: "#b4b2b2",
              color: "#000000",
              ":hover": {
                background: "#b4b2b2",
              },
            }}
            onClick={() => navigate("/signup/email")}
          >
            <Box display="flex" alignItems="center" justifyContent="center">
              <EmailIcon sx={{ mr: 1 }} /> <span>Continue with Email</span>
            </Box>
          </Button>

          <Typography sx={{ mt: 2 }}>
            Don&apos;t have an account?{" "}
            <Link to="/signup" style={{ color: "#54adf3" }}>
              Sign up
            </Link>
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Signup;
