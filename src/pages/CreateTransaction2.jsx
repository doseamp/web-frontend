import {
  Box,
  Card,
  CardContent,
  TextField,
  Toolbar,
  Typography,
  FormHelperText,
  Button,
  CircularProgress,
  MenuItem,
  IconButton,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DashboardMenu from "../components/DashboardMenu";
import Sidebar from "../components/Sidebar";
import MobileDashboardMenu from "../components/MobileDashboardMenu";
import { pages, mobilePages, utils } from "../utils/Pages";
import { countries } from "../utils/Countries";
import { useState } from "react";

const CreateTransaction2 = () => {
  const [bank, setBank] = useState("");
  const [accountNo, setAccountNo] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <Box>
      <Box
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        <DashboardMenu />
      </Box>
      <Sidebar pages={pages} utils={utils} />

      <Box
        sx={{
          ml: {
            xs: 0,
            md: "250px",
          },
        }}
      >
        <Toolbar sx={{ display: { xs: "none", md: "block" } }} />

        <Box sx={{ px: 4, py: 2, mt: { xs: 2, md: 4 } }}>
          <Box display="flex" alignItems="center" sx={{ mb: 4 }}>
            <IconButton sx={{ border: "1px solid #000000" }}>
              <ArrowBackIcon />
            </IconButton>
            <Typography
              sx={{
                margin: "auto",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Create Transaction
            </Typography>
          </Box>

          <Card sx={{ width: { xs: "100%", md: "50%" }, margin: "auto" }}>
            <CardContent>
              <Typography
                sx={{ fontWeight: "bold", textAlign: "center", mb: 2 }}
              >
                Bank Details
              </Typography>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <label>Bank</label>
                <TextField
                  select
                  fullWidth
                  sx={{ mb: 2 }}
                  value={country}
                  onChange={() => {}}
                  size="small"
                >
                  {countries.map((country) => (
                    <MenuItem value={country.name} key={country.name}>
                      {country.mobileCode}: {country.code}
                    </MenuItem>
                  ))}
                </TextField>

                <label>Account Number</label>
                <TextField
                  type="number"
                  fullWidth
                  required
                  size="small"
                  maxLength="10"
                  onChange={(e) => {
                    setAccountNo(e.target.value);
                  }}
                />
                <FormHelperText sx={{ mb: 2, color: "#17D641" }}>
                  Account name
                </FormHelperText>

                <label>Amount</label>
                <TextField
                  type="number"
                  fullWidth
                  required
                  size="small"
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                  sx={{ mb: 2 }}
                />

                <label>Description</label>
                <TextField
                  type="text"
                  fullWidth
                  required
                  size="small"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  sx={{ mb: 2 }}
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
                >
                  {loading ? (
                    <CircularProgress
                      size={"1.5rem"}
                      sx={{ color: "#ffffff" }}
                    />
                  ) : (
                    "Next"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </Box>
      </Box>

      {/* Nav Menu  */}
      <Box
        sx={{
          px: 4,
          mt: 2,
          display: {
            xs: "block",
            md: "none",
          },
        }}
      >
        <Box>
          <Toolbar />
          <MobileDashboardMenu pages={mobilePages} />
        </Box>
      </Box>
    </Box>
  );
};

export default CreateTransaction2;
