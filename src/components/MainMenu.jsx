import { Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <Stack
      direction="row"
      sx={{
        marginLeft: "auto",
      }}
    >
      <Button
        size="small"
        sx={{
          py: 1,
          px: 2,
          mx: 1,
          fontWeight: "bold",
          textTransform: "capitalize",
          background: "#ffffff",
          ":hover": {
            boxShadow: "#54adf3",
          },
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#000000",
          }}
        >
          Company
        </Link>
      </Button>
      <Button
        size="small"
        sx={{
          py: 1,
          px: 2,
          mx: 1,
          fontWeight: "bold",
          textTransform: "capitalize",
          background: "#ffffff",
          ":hover": {
            boxShadow: "#54adf3",
          },
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#000000",
          }}
        >
          Payments
        </Link>
      </Button>
      <Button
        size="small"
        sx={{
          py: 1,
          px: 2,
          mx: 1,
          fontWeight: "bold",
          textTransform: "capitalize",
          background: "#ffffff",
          ":hover": {
            boxShadow: "#54adf3",
          },
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#000000",
          }}
        >
          Trade
        </Link>
      </Button>
      <Button
        size="small"
        sx={{
          py: 1,
          px: 2,
          mx: 1,
          fontWeight: "bold",
          textTransform: "capitalize",
          background: "#ffffff",
          ":hover": {
            boxShadow: "#54adf3",
          },
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#000000",
          }}
        >
          Help center
        </Link>
      </Button>
      <Button
        size="small"
        sx={{
          py: 1,
          px: 2,
          mx: 1,
          fontWeight: "bold",
          textTransform: "capitalize",
          background: "#ffffff",
          ":hover": {
            boxShadow: "#54adf3",
          },
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#000000",
          }}
        >
          English
        </Link>
      </Button>
      <Button
        size="small"
        sx={{
          py: 1,
          px: 2,
          mx: 1,
          fontWeight: "bold",
          textTransform: "capitalize",
          background: "#ffffff",
          ":hover": {
            boxShadow: "#54adf3",
          },
        }}
      >
        <Link
          to="/login"
          style={{
            textDecoration: "none",
            color: "#000000",
          }}
        >
          Login
        </Link>
      </Button>
      <Button
        size="small"
        sx={{
          py: 1,
          px: 2,
          mx: 1,
          fontWeight: "bold",
          textTransform: "capitalize",
          background: "#54adf3",
          ":hover": {
            background: "#54adf3",
          },
        }}
      >
        <Link
          to="/signup"
          style={{
            textDecoration: "none",
            color: "#000000",
          }}
        >
          Sign up
        </Link>
      </Button>
    </Stack>
  );
};

export default MainMenu;
