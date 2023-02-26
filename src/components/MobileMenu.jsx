import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Box } from "@mui/system";

const MobileMenu = ({ pages }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <Stack
      direction="row"
      sx={{
        marginLeft: "auto",
        display: {
          xs: "flex",
          md: "none",
        },
      }}
    >
      <IconButton onClick={() => setOpenDrawer(!openDrawer)} size="large">
        <MenuIcon />
      </IconButton>

      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor="right"
        sx={{ pt: 5 }}
        PaperProps={{
          style: {
            width: "100%",
          },
        }}
      >
        <Box display="flex" sx={{ mt: 2 }}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              textTransform: "capitalize",
            }}
          >
            <Button
              className="buttonStyle"
              onClick={() => setOpenDrawer(false)}
              sx={{
                color: "#000000",
                fontWeight: "bold",
                fontSize: "1.5rem",
                pl: 2,
              }}
              size="large"
            >
              Payonize
            </Button>
          </Link>

          <Button
            className="buttonStyle"
            onClick={() => setOpenDrawer(false)}
            sx={{
              mr: 2,
              fontWeight: "bold",
              color: "#000000",
              fontSize: "1.5rem",
              ml: "auto",
            }}
            size="large"
          >
            X
          </Button>
        </Box>
        <List>
          {pages.map((page) => (
            <ListItemButton
              className="buttonStyle"
              key={page.name}
              sx={{
                my: 2,
                display: "flex",
                borderBottom: "1px solid #817e7e",
                pt: 2,
              }}
              onClick={() => setOpenDrawer(false)}
            >
              <ListItemIcon>
                {page.icon}
                <ListItemText>
                  <Link
                    to={page.route}
                    style={{
                      textDecoration: "none",
                      color: "#000000",
                      paddingRight: "72px",
                      paddingLeft: "16px",
                      fontWeight: "bold",
                    }}
                  >
                    {page.name}
                  </Link>
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}

          <Link
            to="/signup"
            style={{
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            <Button
              className="buttonStyle"
              size="medium"
              sx={{
                py: 2,
                px: 2,
                width: "100%",
                color: "#000000",
                fontWeight: "bold",
                textTransform: "capitalize",
                background: "#54adf3",
                ":hover": {
                  background: "#54adf3",
                },
              }}
              onClick={() => setOpenDrawer(false)}
            >
              Sign up
            </Button>
          </Link>
        </List>
      </Drawer>
    </Stack>
  );
};

export default MobileMenu;
