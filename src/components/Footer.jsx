import { Box, IconButton, Typography, Stack } from "@mui/material";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialMedia = [
    {
      name: "Instagram",
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/payonize/",
    },

    {
      name: "Facebook",
      icon: <FacebookIcon />,
      link: "https://web.facebook.com/payonize/",
    },

    {
      name: "LinkedIn",
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/company/payonize/",
    },

    {
      name: "Twitter",
      icon: <TwitterIcon />,
      link: "https://twitter.com/payonize",
    },
  ];

  return (
    <Box sx={{ px: { md: 8 } }}>
      <Box
        display="flex"
        sx={{
          background: "#f5f5f5",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
        }}
      >
        <Stack
          direction="row"
          sx={{ alignItems: "center", pl: 2, pt: { xs: 2, md: 0 } }}
        >
          <img
            src="nigeria.png"
            alt="Nigeria"
            style={{ width: "30px", height: "30px" }}
          />
          <Typography sx={{ ml: 2 }}>Nigeria</Typography>
        </Stack>

        <Stack
          direction="row"
          sx={{
            ml: {
              md: "auto",
            },
          }}
        >
          {socialMedia.map((item) => (
            <IconButton
              key={item.name}
              sx={{ color: "#000000", mx: 1 }}
              size="large"
              onClick={() => window.open(item.link, "_blank")}
            >
              {item.icon}
            </IconButton>
          ))}
          <IconButton
            sx={{ color: "#000000", mx: 1 }}
            size="large"
            onClick={() =>
              window.open("https://www.tiktok.com/@payonize", "_blank")
            }
          >
            <img
              src="tiktok.png"
              alt="Nigeria"
              style={{ width: "25px", height: "25px" }}
            />
          </IconButton>
        </Stack>
      </Box>

      <Box
        display="flex"
        sx={{
          px: { xs: 2, md: 16 },
          py: 2,
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
        }}
      >
        <Typography sx={{ m: 2 }}>Payonize &copy;2023</Typography>
        <Stack
          direction={{
            xs: "column",
            md: "row",
          }}
          sx={{
            ml: {
              md: "auto",
            },
          }}
        >
          <Link to="/" style={{ margin: "16px 16px", color: "#000000" }}>
            Privacy Policy
          </Link>
          <Link to="/" style={{ margin: "16px 16px", color: "#000000" }}>
            Terms of Use
          </Link>
          <Link
            to="/"
            style={{
              margin: "16px 16px",
              color: "#000000",
            }}
          >
            Cookie Policy
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
