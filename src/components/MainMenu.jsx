import { Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";

const MainMenu = ({ pages }) => {
  return (
    <Stack
      direction="row"
      sx={{
        ml: 10,
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
            margin: "0px 16px 0px",
          }}
        >
          <Button
            className="buttonStyle"
            size="small"
            sx={{
              py: 1,
              color: "#000000",
              fontWeight: "bold",
              textTransform: "capitalize",
              background: "#ffffff",
              ":hover": {
                boxShadow: "#54adf3",
                background: "#ffffff",
              },
            }}
          >
            {page.name}
          </Button>
        </Link>
      ))}
    </Stack>
  );
};

export default MainMenu;
