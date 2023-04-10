import { Box, Grid, Typography, Container } from "@mui/material";

const Info = () => {
  return (
    <Box
      sx={{
        background: "#54adf3",
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
        <Typography
          className="headingStyle"
          sx={{
            fontSize: "24px",
            fontWeight: "bold",
            textAlign: "center",
            my: 3,
          }}
        >
          Why cashless policy is a way forward in Nigeria
        </Typography>
        <Grid container justifyContent="space-between">
          <Grid item xs={12} md={4} sx={{ py: 4 }}>
            <Box
              display="flex"
              sx={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="dollar.svg"
                alt="Dollar sign"
                style={{ width: "50px", height: "50px" }}
              />
              <Typography sx={{ fontSize: "16px", fontWeight: "bold", mt: 2 }}>
                To Curb Corruption
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sx={{ py: 4 }}>
            <Box
              display="flex"
              sx={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="accountability.svg"
                alt="Accountability Icon"
                style={{ width: "50px", height: "50px" }}
              />
              <Typography sx={{ fontSize: "16px", fontWeight: "bold", mt: 2 }}>
                For Accountability
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sx={{ py: 4 }}>
            <Box
              display="flex"
              sx={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="transaction.svg"
                alt="Transaction Icon"
                style={{ width: "50px", height: "50px" }}
              />
              <Typography sx={{ fontSize: "16px", fontWeight: "bold", mt: 2 }}>
                Easy Transactions
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Info;
