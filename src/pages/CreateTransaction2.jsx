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
  IconButton,
  Autocomplete,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DashboardMenu from "../components/DashboardMenu";
import Sidebar from "../components/Sidebar";
import MobileDashboardMenu from "../components/MobileDashboardMenu";
import { pages, mobilePages, utils } from "../utils/Pages";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateTransaction2 = () => {
  const [bank, setBank] = useState("");
  const [bankCode, setBankCode] = useState("");
  const [accountNo, setAccountNo] = useState("");
  const [accountName, setAccountName] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [bankList, setBankList] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const limitChar = 10;
  const baseUrl = process.env.REACT_APP_BASE_URL;
  console.log(bankList);
  console.log(bank);
  console.log(amount);
  console.log(setLoading);
  console.log(description);

  useEffect(() => {
    const listBanks = async () => {
      const { data } = await axios({
        url: `${baseUrl}/utils/list_banks`,
        method: "get",
      });
      const banks = [];
      data.data.forEach((bank) => {
        banks.push({ label: bank.name, code: bank.code });
      });
      setBankList(banks);
    };
    listBanks();
  }, []);

  if (accountNo.length === 10) {
    const getAccName = async () => {
      const { data } = await axios({
        url: `${baseUrl}/utils/account_name`,
        method: "post",
        data: {
          account_number: accountNo,
          bank_code: bankCode,
        },
      });
      if (data.data.account_name) {
        setAccountName(data.data.account_name);
      } else {
        setAccountName("Not found");
      }
    };
    getAccName();
  }

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
            <IconButton
              sx={{ border: "1px solid #000000" }}
              onClick={() => {
                navigate(-1);
              }}
            >
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
                <Autocomplete
                  disablePortal
                  size="small"
                  sx={{ mb: 2 }}
                  id="combo-box-demo"
                  options={bankList}
                  onChange={(e, value) => {
                    setBank(value.label);
                    setBankCode(value.code);
                  }}
                  fullWidth
                  renderInput={(params) => <TextField {...params} />}
                />

                <label>Account Number</label>
                <TextField
                  type="number"
                  fullWidth
                  required
                  size="small"
                  onChange={(e) => {
                    if (e.target.value.toString().length <= limitChar) {
                      setAccountNo(e.target.value);
                    }
                  }}
                  value={accountNo}
                />
                {accountNo.length < 10 ? (
                  <FormHelperText error sx={{ mb: 2 }}>
                    Account number must be 10 digits
                  </FormHelperText>
                ) : (
                  <FormHelperText sx={{ mb: 2, color: "#17D641" }}>
                    {accountName}
                  </FormHelperText>
                )}

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
                  onClick={() => navigate("/transactions/create/3")}
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
