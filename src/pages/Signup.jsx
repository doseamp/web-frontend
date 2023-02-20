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
  FormHelperText,
} from "@mui/material";

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { AuthContext } from "../contexts/AuthContext";
import { UtilsContext } from "../contexts/UtilsContext";

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
  const { errorMsg } = useContext(UtilsContext);

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
      <Grid container spacing={2} sx={{ px: 2 }} alignItems="center">
        <Grid item xs={12} md={5} sx={{ ml: { md: 20 }, p: { md: 5 } }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", pb: 4 }}>
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
              size="small"
              sx={{ mt: 1, mb: 2 }}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              inputProps={{
                minLength: 3,
              }}
            />

            <label>Last Name</label>
            <TextField
              type="text"
              fullWidth
              required
              size="small"
              sx={{ mt: 1, mb: 2 }}
              onChange={(e) => {
                setLastName(e.target.value);
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
              sx={{ mt: 1 }}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <FormHelperText error sx={{ mb: 2 }}>
              {errorMsg.email}
            </FormHelperText>

            <label>Phone Number</label>
            <TextField
              type="tel"
              fullWidth
              required
              size="small"
              sx={{ mt: 1, mb: 2 }}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
              inputProps={{
                inputMode: "numeric",
                pattern: "[0-9]*",
                minLength: 10,
                maxLength: 12,
              }}
            />

            <label>Password</label>
            <TextField
              type={togglePassword}
              fullWidth
              required
              size="small"
              sx={{ mt: 1 }}
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
            <FormHelperText error sx={{ mb: 2 }}>
              {errorMsg.password}
            </FormHelperText>

            <label>Confirm Password</label>
            <TextField
              type="password"
              fullWidth
              required
              size="small"
              sx={{ mt: 1 }}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <FormHelperText error sx={{ mb: 2 }}>
              {errorMsg.confirmPassword}
            </FormHelperText>

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
              disabled={acceptTnC === false || loading}
              sx={{
                py: 1.5,
                px: 3,
                mt: 2,
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
                <CircularProgress size={"1.5rem"} sx={{ color: "#54adf3" }} />
              ) : (
                "Create Personal Account"
              )}
            </Button>
          </form>

          <Typography sx={{ mt: 2 }}>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "#54adf3" }}>
              Log In
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Signup;
