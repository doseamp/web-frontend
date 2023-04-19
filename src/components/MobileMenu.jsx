import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

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
            width: "75%",
          },
        }}
      >
        <Box display="flex" sx={{ mt: 2 }}>
          <Button
            className="buttonStyle"
            onClick={() => setOpenDrawer(false)}
            sx={{
              mr: 2,
              fontWeight: "bold",
              color: "#000000",
              fontSize: "1rem",
              ml: "auto",
            }}
            size="small"
          >
            x
          </Button>
        </Box>
        <List>
          {pages.map((page) => (
            <ListItem key={page.name}>
              <ListItemButton
                className="buttonStyle"
                onClick={() => setOpenDrawer(false)}
              >
                <ListItemText>
                  <Link
                    to={page.route}
                    style={{
                      textDecoration: "none",
                      color: "#000000",
                      fontWeight: "bold",
                    }}
                  >
                    {page.name}
                  </Link>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}

          <ListItem
            sx={{
              backgroundColor: "#54adf3",
            }}
          >
            <ListItemButton
              className="buttonStyle"
              onClick={() => setOpenDrawer(false)}
            >
              <ListItemText>
                <Link
                  to="/signup"
                  style={{
                    textDecoration: "none",
                    color: "#000000",
                    fontWeight: "bold",
                  }}
                >
                  Sign up
                </Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Stack>
  );
};

export default MobileMenu;
