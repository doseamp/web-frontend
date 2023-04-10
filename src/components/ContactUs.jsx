import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Container,
} from "@mui/material";
import { useState } from "react";

const ContactUs = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (
    fullName,
    email,
    phoneNumber,
    businessType,
    message
  ) => {
    setLoading(true);
    console.log({
      fullName,
      email,
      phoneNumber,
      businessType,
      message,
    });
  };

  return (
    <Box>
      <Container
        maxWidth="lg"
        sx={{
          py: 4,
          px: {
            xs: 2,
            md: 12,
          },
        }}
      >
        <Grid container justifyContent="space-between">
          <Grid item xs={12} md={5} sx={{ py: 2 }}>
            <Typography
              className="headingStyle"
              sx={{ fontSize: "30px", fontWeight: "bold", pb: 2 }}
            >
              Contact Us
            </Typography>
            <Typography>
              With Payonize, you can make seamless transactions daily within
              Nigeria from your cryptocurrency to fiat currency on demand
            </Typography>
            <br />
            <Typography>We are here for you! How can we help?</Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={{ py: 2 }}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(
                  fullName,
                  email,
                  phoneNumber,
                  businessType,
                  message
                );
              }}
            >
              <label>Full Name</label>
              <TextField
                type="text"
                fullWidth
                required
                size="small"
                sx={{ mt: 1, mb: 2 }}
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
                inputProps={{
                  minLength: 3,
                }}
              />

              <label>Email</label>
              <TextField
                type="email"
                fullWidth
                required
                size="small"
                sx={{ mt: 1, mb: 2 }}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <label>Phone Number</label>

              <Box display={"flex"}>
                <TextField
                  type="number"
                  fullWidth
                  required
                  size="small"
                  sx={{ mt: 1, mb: 2 }}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  onMouseOut={(e) => {}}
                />
              </Box>

              <label>Business Type</label>
              <TextField
                type="text"
                fullWidth
                required
                size="small"
                sx={{ mt: 1, mb: 2 }}
                onChange={(e) => {
                  setBusinessType(e.target.value);
                }}
                inputProps={{
                  minLength: 3,
                }}
              />

              <label>Go ahead, we are listening</label>
              <TextField
                type="text"
                fullWidth
                multiline
                rows={4}
                required
                size="small"
                sx={{ mt: 1, mb: 2 }}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                inputProps={{
                  minLength: 3,
                }}
              />

              <Button
                className="buttonStyle"
                type="submit"
                variant="contained"
                sx={{
                  py: 1.5,
                  px: 3,
                  width: "30%",
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
                  "Submit"
                )}
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUs;
