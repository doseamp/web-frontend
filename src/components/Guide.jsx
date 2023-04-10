import { Link } from "react-router-dom";
import { Box, Grid, Typography, Button, Container } from "@mui/material";

const Guide = () => {
  return (
    <Box
      sx={{
        background: "#f5f5f5",
      }}
    >
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
              sx={{ fontSize: "30px", fontWeight: "bold", pb: 1 }}
            >
              Start daily transactions
            </Typography>
            <Typography>Complete transactions with these easy steps</Typography>
            <Box
              display="flex"
              flexDirection="row"
              sx={{ alignItems: "center", py: 2 }}
            >
              <img
                src="account.svg"
                alt="Nigeria"
                style={{ width: "50px", height: "50px" }}
              />

              <Box sx={{ pl: 4 }}>
                <Typography
                  className="headingStyle"
                  sx={{ fontSize: "24px", fontWeight: "bold" }}
                >
                  Create an account
                </Typography>
                <Typography>
                  Sign up for an account with name, email and phone number then
                  verify your identity in minutes.
                </Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              sx={{ alignItems: "center", py: 2 }}
            >
              <img
                src="wallets.svg"
                alt="Wallets Icon"
                style={{ width: "50px", height: "50px" }}
              />
              <Box sx={{ pl: 4 }}>
                <Typography
                  className="headingStyle"
                  sx={{ fontSize: "24px", fontWeight: "bold" }}
                >
                  Connect your wallets
                </Typography>
                <Typography>
                  Connect your crypto wallet to your Payonize account.
                </Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              sx={{ alignItems: "center", py: 2 }}
            >
              <img
                src="transacting.svg"
                alt="Transacting Icon"
                style={{ width: "50px", height: "50px" }}
              />
              <Box sx={{ pl: 4 }}>
                <Typography
                  className="headingStyle"
                  sx={{ fontSize: "24px", fontWeight: "bold" }}
                >
                  Start transacting
                </Typography>
                <Typography>
                  Start your transfers to Naira using your crypto wallet.
                </Typography>
              </Box>
            </Box>
            <Link
              to="/signup"
              style={{
                textDecoration: "none",
              }}
            >
              <Button
                className="buttonStyle"
                size="small"
                sx={{
                  py: 1,
                  px: 2,
                  mx: 1,
                  mt: 2,
                  fontWeight: "bold",
                  color: "#000000",
                  textTransform: "capitalize",
                  background: "#54adf3",
                  ":hover": {
                    background: "#54adf3",
                  },
                }}
              >
                Get started
              </Button>
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              py: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="transaction.png"
              alt="Transaction"
              style={{ width: "306px", height: "300px" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Guide;
