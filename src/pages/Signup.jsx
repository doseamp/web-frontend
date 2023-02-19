import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { Container } from "@mui/system";
import {
  Grid,
  Typography,
  TextField,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Button,
  CircularProgress,
} from "@mui/material";

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { AuthContext } from "../contexts/AuthContext";

const Signup = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [acceptTnC, setAcceptTnC] = useState(false);
  const [acceptMU, setAcceptMU] = useState(false);
  const [togglePassword, setTogglePassword] = useState("password");
  const [visibilityColor, setVisibilityColor] = useState("817e7e");
  const { loading } = useContext(AuthContext);
  const handleClick = useContext(AuthContext);

  console.log(loading);
  const handleChange = {
    acceptTnC: function (e) {
      setAcceptTnC(e.target.checked);
    },

    acceptMU: function (e) {
      setAcceptMU(e.target.checked);
    },
  };

  return (
    <Container>
      <Grid container spacing={2} sx={{ px: 2 }}>
        <Grid item xs={12} md={6} sx={{ ml: { md: 6 } }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", pb: 2 }}>
            Create Personal Account
          </Typography>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleClick.signup(
                firstName,
                lastName,
                email,
                phoneNumber,
                password,
                confirmPassword
              );
            }}
          >
            <label>First Name</label>
            <TextField
              type="text"
              fullWidth
              required
              sx={{ mt: 1, mb: 2 }}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />

            <label>Last Name</label>
            <TextField
              type="text"
              fullWidth
              required
              sx={{ mt: 1, mb: 2 }}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />

            <label>Email</label>
            <TextField
              type="email"
              fullWidth
              required
              sx={{ mt: 1, mb: 2 }}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <label>Phone Number</label>
            <TextField
              type="tel"
              fullWidth
              required
              sx={{ mt: 1, mb: 2 }}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />

            <label>Password</label>
            <TextField
              type={togglePassword}
              fullWidth
              required
              sx={{ mt: 1, mb: 2 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    position="end"
                    sx={{ cursor: "pointer" }}
                    onClick={() => {
                      if (togglePassword === "password") {
                        setTogglePassword("text");
                        setVisibilityColor("54adf3");
                      } else {
                        setTogglePassword("password");
                        setVisibilityColor("817e7e");
                      }
                    }}
                  >
                    <VisibilityOffIcon sx={{ color: `#${visibilityColor}` }} />
                  </InputAdornment>
                ),
              }}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label>Confirm Password</label>
            <TextField
              type="password"
              fullWidth
              required
              sx={{ mt: 1, mb: 2 }}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <FormControlLabel
              label="I have read and agreed to Payonize Terms of Service and Privacy Policy"
              control={
                <Checkbox
                  checked={acceptTnC}
                  onChange={handleChange.acceptTnC}
                />
              }
            />

            <FormControlLabel
              label="I agree to receive marketing updates from Payonize"
              control={
                <Checkbox checked={acceptMU} onChange={handleChange.acceptMU} />
              }
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={acceptTnC === false || acceptMU === false}
              sx={{
                py: 1.5,
                px: 3,
                mt: 2,
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              {loading ? (
                <CircularProgress size={"1.5rem"} sx={{ color: "#ffffff" }} />
              ) : (
                "Create Personal Account"
              )}
            </Button>
            <Typography sx={{ mt: 2 }}>
              Already have an account?{" "}
              <Link to="/signin" style={{ color: "#54adf3" }}>
                Log In
              </Link>
            </Typography>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Signup;
