import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Toolbar,
  ListItemIcon,
} from "@mui/material";

const MobileSidebar = ({ pages, utils, openDrawer, setOpenDrawer }) => {
  return (
    <Box
      sx={{
        display: {
          xs: "block",
          md: "none",
        },
      }}
    >
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
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
              <ListItem
                key={page.name}
                sx={{ py: 0 }}
                onClick={() => setOpenDrawer(false)}
              >
                <ListItemButton>
                  <ListItemIcon>{page.icon}</ListItemIcon>
                  <ListItemText>{page.name}</ListItemText>
                </ListItemButton>
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

export default MobileSidebar;
