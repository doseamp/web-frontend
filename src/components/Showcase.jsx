import { Link } from "react-router-dom";
import { Button, Box, Grid, Typography, Container } from "@mui/material";

const Showcase = () => {
  return (
    <Box
      sx={{
        pb: 4,
        px: {
          xs: 2,
          md: 4,
        },
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              className="headingStyle"
              sx={{ fontSize: "36px", fontWeight: "bold", py: 2 }}
            >
              Pay for Transactions in Naira using Crypto
            </Typography>
            <Typography sx={{ fontSize: "20px", pb: 4 }}>
              Use cryptocurrencies for your regular transactions within Nigeria
              by using Payonize.
            </Typography>

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
                  fontWeight: "bold",
                  color: "#000000",
                  textTransform: "capitalize",
                  background: "#54adf3",
                  ":hover": {
                    background: "#54adf3",
                  },
                }}
              >
                Start now
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Showcase;
