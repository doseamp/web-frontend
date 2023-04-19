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
        <Link
          key={page.name}
          to={page.route}
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
              color: "#000000",
              fontWeight: "bold",
              textTransform: "capitalize",
              background: "#ffffff",
              ":hover": {
                boxShadow: "#54adf3",
              },
            }}
          >
            {page.name}
          </Button>
        </Link>
      ))}

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
            color: "#000000",
            fontWeight: "bold",
            textTransform: "capitalize",
            background: "#54adf3",
            ":hover": {
              background: "#54adf3",
            },
          }}
        >
          Sign up
        </Button>
      </Link>
    </Stack>
  );
};

export default MainMenu;
