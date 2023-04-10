import { Link } from "react-router-dom";
import {
  Button,
  Box,
  Grid,
  Typography,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Showcase = () => {
  const theme = useTheme();
  console.log(theme);
  const md = useMediaQuery(theme.breakpoints.down("md"));

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
        <Grid container alignItems="center" justifyContent="space-between">
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
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              py: 2,
              mt: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {md ? (
              <img
                src="showcase.png"
                alt="Showcase"
                style={{ width: "350px", height: "230px" }}
              />
            ) : (
              <img
                src="showcase.png"
                alt="Showcase"
                style={{ width: "450px", height: "300px" }}
              />
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Showcase;
