import { Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";

const MainMenu = ({ pages }) => {
  return (
    <Stack
      direction="row"
      sx={{
        marginLeft: "auto",
        display: {
          xs: "none",
          md: "flex",
        },
      }}
    >
      {pages.map((page) => (
        <Button
          className="buttonStyle"
          key={page.name}
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
            to={page.route}
            style={{
              textDecoration: "none",
              color: "#000000",
            }}
          >
            {page.name}
          </Link>
        </Button>
      ))}

      <Button
        className="buttonStyle"
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
