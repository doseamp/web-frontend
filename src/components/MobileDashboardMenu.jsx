import {
  AppBar,
  Box,
  IconButton,
  Stack,
  Typography,
  Link,
} from "@mui/material";
import { useLocation } from "react-router-dom";

const MobileDashboardMenu = ({ pages }) => {
  const location = useLocation();
  const active = location.pathname;

  return (
    <AppBar
      position="fixed"
      sx={{ top: "auto", bottom: 0, px: 4, pb: 1, background: "#54ADF3" }}
    >
      <Stack direction="row" justifyContent="space-between">
        {pages.map((page) => (
          <Link
            href={page.link}
            key={page.name}
            sx={{ textDecoration: "none" }}
          >
            {page.link === active ? (
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <IconButton size="large" sx={{ color: "#ffffff" }}>
                  {page.icon}
                </IconButton>
                <Typography
                  sx={{
                    fontSize: "0.5rem",
                    color: "#ffffff",
                    textAlign: "center",
                  }}
                >
                  {page.name}
                </Typography>
              </Box>
            ) : (
              <Box href={page.link}>
                <IconButton size="large">{page.icon}</IconButton>
                <Typography
                  sx={{
                    fontSize: "0.5rem",
                    color: "#000000",
                    textAlign: "center",
                  }}
                >
                  {page.name}
                </Typography>
              </Box>
            )}
          </Link>
        ))}
      </Stack>
    </AppBar>
  );
};

export default MobileDashboardMenu;
