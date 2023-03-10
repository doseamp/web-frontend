import {
  Box,
  Button,
  ButtonGroup,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import SquareIcon from "@mui/icons-material/Square";

const DbGrid2 = () => {
  return (
    <Box>
      {/* Wallets */}

      <Box sx={{ backgroundColor: "#ffffff", borderRadius: 2, px: 4, py: 2 }}>
        <Box display="flex" sx={{ mb: 4 }}>
          <Typography>Wallet</Typography>
          <Link to="" style={{ color: "#54adf3", marginLeft: "auto" }}>
            Connect to external Wallet
          </Link>
        </Box>
        <Stack direction="column" sx={{ mt: 2 }}>
          <Stack direction="row" justifyContent="space-between" sx={{ my: 1 }}>
            <Typography>Wallet 1</Typography>
            <ButtonGroup
              size="small"
              sx={{
                backgroundColor: "#D9D9D9",
                border: "none",
              }}
            >
              <Button
                sx={{
                  color: "#000000",
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  borderLeft: "none",
                  borderTop: "none",
                  borderBottom: "none",
                  borderRight: "1px solid #000000",
                  width: "80px",
                  ":hover": {
                    boxShadow: 1,
                    borderLeft: "none",
                    borderTop: "none",
                    borderBottom: "none",
                  },
                }}
              >
                Send
              </Button>
              <Button
                sx={{
                  color: "#000000",
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  borderRight: "none",
                  borderTop: "none",
                  borderBottom: "none",
                  borderLeft: "1px solid #000000",
                  width: "80px",
                  ":hover": {
                    boxShadow: 1,
                    borderRight: "none",
                    borderTop: "none",
                    borderBottom: "none",
                    borderLeft: "1px solid #000000",
                  },
                }}
              >
                Receive
              </Button>
            </ButtonGroup>
            <Button
              size="small"
              sx={{
                color: "#ffffff",
                textTransform: "capitalize",
                fontWeight: "bold",
                backgroundColor: "#54adf3",
                px: 2,
                ":hover": {
                  boxShadow: 1,
                  backgroundColor: "#54adf3",
                },
              }}
            >
              Connect
            </Button>
          </Stack>
          <Stack direction="row" justifyContent="space-between" sx={{ my: 1 }}>
            <Typography>Wallet 2</Typography>
            <ButtonGroup
              size="small"
              sx={{
                backgroundColor: "#D9D9D9",
                border: "none",
              }}
            >
              <Button
                sx={{
                  color: "#000000",
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  borderLeft: "none",
                  borderTop: "none",
                  borderBottom: "none",
                  borderRight: "1px solid #000000",
                  width: "80px",
                  ":hover": {
                    boxShadow: 1,
                    borderLeft: "none",
                    borderTop: "none",
                    borderBottom: "none",
                  },
                }}
              >
                Send
              </Button>
              <Button
                sx={{
                  color: "#000000",
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  borderRight: "none",
                  borderTop: "none",
                  borderBottom: "none",
                  borderLeft: "1px solid #000000",
                  width: "80px",
                  ":hover": {
                    boxShadow: 1,
                    borderRight: "none",
                    borderTop: "none",
                    borderBottom: "none",
                    borderLeft: "1px solid #000000",
                  },
                }}
              >
                Receive
              </Button>
            </ButtonGroup>
            <Button
              size="small"
              sx={{
                color: "#ffffff",
                textTransform: "capitalize",
                fontWeight: "bold",
                backgroundColor: "#54adf3",
                px: 2,
                ":hover": {
                  boxShadow: 1,
                  backgroundColor: "#54adf3",
                },
              }}
            >
              Connect
            </Button>
          </Stack>
          <Stack direction="row" justifyContent="space-between" sx={{ my: 1 }}>
            <Typography>Wallet 3</Typography>
            <ButtonGroup
              size="small"
              sx={{
                backgroundColor: "#D9D9D9",
                border: "none",
              }}
            >
              <Button
                sx={{
                  color: "#000000",
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  borderLeft: "none",
                  borderTop: "none",
                  borderBottom: "none",
                  borderRight: "1px solid #000000",
                  width: "80px",
                  ":hover": {
                    boxShadow: 1,
                    borderLeft: "none",
                    borderTop: "none",
                    borderBottom: "none",
                  },
                }}
              >
                Send
              </Button>
              <Button
                sx={{
                  color: "#000000",
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  borderRight: "none",
                  borderTop: "none",
                  borderBottom: "none",
                  borderLeft: "1px solid #000000",
                  width: "80px",
                  ":hover": {
                    boxShadow: 1,
                    borderRight: "none",
                    borderTop: "none",
                    borderBottom: "none",
                    borderLeft: "1px solid #000000",
                  },
                }}
              >
                Receive
              </Button>
            </ButtonGroup>
            <Button
              size="small"
              sx={{
                color: "#ffffff",
                textTransform: "capitalize",
                fontWeight: "bold",
                backgroundColor: "#54adf3",
                px: 2,
                ":hover": {
                  boxShadow: 1,
                  backgroundColor: "#54adf3",
                },
              }}
            >
              Connect
            </Button>
          </Stack>
          <Stack direction="row" justifyContent="space-between" sx={{ my: 1 }}>
            <Typography>Wallet 4</Typography>
            <ButtonGroup
              size="small"
              sx={{
                backgroundColor: "#D9D9D9",
                border: "none",
              }}
            >
              <Button
                sx={{
                  color: "#000000",
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  borderLeft: "none",
                  borderTop: "none",
                  borderBottom: "none",
                  borderRight: "1px solid #000000",
                  width: "80px",
                  ":hover": {
                    boxShadow: 1,
                    borderLeft: "none",
                    borderTop: "none",
                    borderBottom: "none",
                  },
                }}
              >
                Send
              </Button>
              <Button
                sx={{
                  color: "#000000",
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  borderRight: "none",
                  borderTop: "none",
                  borderBottom: "none",
                  borderLeft: "1px solid #000000",
                  width: "80px",
                  ":hover": {
                    boxShadow: 1,
                    borderRight: "none",
                    borderTop: "none",
                    borderBottom: "none",
                    borderLeft: "1px solid #000000",
                  },
                }}
              >
                Receive
              </Button>
            </ButtonGroup>
            <Button
              size="small"
              sx={{
                color: "#ffffff",
                textTransform: "capitalize",
                fontWeight: "bold",
                backgroundColor: "#54adf3",
                px: 2,
                ":hover": {
                  boxShadow: 1,
                  backgroundColor: "#54adf3",
                },
              }}
            >
              Connect
            </Button>
          </Stack>
        </Stack>
      </Box>

      {/* Notifications */}

      <Box
        sx={{
          backgroundColor: "#ffffff",
          px: 4,
          py: 2,
          borderRadius: 2,
          mt: 8,
        }}
      >
        <Typography sx={{ fontWeight: "bold", mb: 1 }}>
          Notifications
        </Typography>

        <List>
          <ListItem
            sx={{
              px: 0,
              "& .css-10hburv-MuiTypography-root": {
                fontSize: "12px",
              },
            }}
          >
            <ListItemIcon>
              <SquareIcon sx={{ height: "20px", color: "#54adf3" }} />
            </ListItemIcon>
            <ListItemText>
              You have successfully exchanged from BTC to ETHER
            </ListItemText>
          </ListItem>
          <ListItem
            sx={{
              px: 0,
              "& .css-10hburv-MuiTypography-root": {
                fontSize: "12px",
              },
            }}
          >
            <ListItemIcon>
              <SquareIcon sx={{ height: "20px", color: "#54adf3" }} />
            </ListItemIcon>
            <ListItemText>
              You have successfully exchanged from BTC to ETHER
            </ListItemText>
          </ListItem>
          <ListItem
            sx={{
              px: 0,
              "& .css-10hburv-MuiTypography-root": {
                fontSize: "12px",
              },
            }}
          >
            <ListItemIcon>
              <SquareIcon sx={{ height: "20px", color: "#54adf3" }} />
            </ListItemIcon>
            <ListItemText>
              You have successfully exchanged from BTC to ETHER
            </ListItemText>
          </ListItem>
          <ListItem
            sx={{
              px: 0,
              "& .css-10hburv-MuiTypography-root": {
                fontSize: "12px",
              },
            }}
          >
            <ListItemIcon>
              <SquareIcon sx={{ height: "20px", color: "#54adf3" }} />
            </ListItemIcon>
            <ListItemText>
              You have successfully exchanged from BTC to ETHER
            </ListItemText>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default DbGrid2;
