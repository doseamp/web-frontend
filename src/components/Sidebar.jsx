import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { useLocation } from "react-router-dom";

const Sidebar = ({ pages, utils }) => {
  const location = useLocation();
  const active = location.pathname;

  return (
    <Box
      component="nav"
      sx={{
        display: {
          xs: "none",
          md: "block",
        },
      }}
    >
      <Drawer
        variant="permanent"
        PaperProps={{
          style: {
            width: "250px",
            borderTopRightRadius: "48px",
            borderBottomRightRadius: "48px",
          },
        }}
      >
        <Toolbar>
          <img src="logo.png" alt="logo" style={{ width: 175, height: 90 }} />
        </Toolbar>

        <Box display="flex" flexDirection="column">
          <List>
            {pages.map((page) => (
              <ListItem key={page.name} sx={{ py: 0 }}>
                {page.link === active ? (
                  <ListItemButton
                    LinkComponent="a"
                    to={page.link}
                    sx={{ background: "#54ADF3", color: "#ffffff" }}
                  >
                    <ListItemIcon sx={{ color: "#ffffff" }}>
                      {page.icon}
                    </ListItemIcon>
                    <ListItemText>{page.name}</ListItemText>
                  </ListItemButton>
                ) : (
                  <ListItemButton LinkComponent="a" to={page.link}>
                    <ListItemIcon>{page.icon}</ListItemIcon>
                    <ListItemText>{page.name}</ListItemText>
                  </ListItemButton>
                )}
              </ListItem>
            ))}
          </List>

          <List sx={{ mt: "auto" }}>
            {utils.map((util) => (
              <ListItem key={util.name} sx={{ py: 0 }}>
                <ListItemButton>
                  <ListItemIcon>{util.icon}</ListItemIcon>
                  <ListItemText>{util.name}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
