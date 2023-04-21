import { Box, Typography, Toolbar, Button } from "@mui/material";
import Navbar from "../components/Navbar";
import EmailIcon from "@mui/icons-material/Email";
import { useNavigate } from "react-router-dom";

const ConfirmEmail = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Navbar />
      <Toolbar sx={{ mb: 1 }} />
      <Box
        sx={{
          background: "#f5f5f5",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{ background: "#ffffff", borderTop: "8px solid #54ADF3", px: 2 }}
        >
          <EmailIcon sx={{ fontSize: "250px", color: "#54ADF3" }} />

          <Typography class="headingStyle" sx={{ fontSize: "2rem" }}>
            Email Verification Required
          </Typography>
          <br />
          <Typography>We sent a verification link to your email</Typography>

          <br />
          <Typography>
            Please click the link within the email to complete your account
            setup
          </Typography>
          <br />

          <Button
            className="buttonStyle"
            type="submit"
            variant="contained"
            sx={{
              py: 1.5,
              px: 3,
              mt: 1,
              mb: 1,
              fontWeight: "bold",
              textTransform: "capitalize",
              color: "#000000",
              background: "#54adf3",
              ":hover": {
                background: "#54adf3",
              },
            }}
            onClick={() => {
              navigate("/login");
            }}
          >
            Continue to Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ConfirmEmail;
