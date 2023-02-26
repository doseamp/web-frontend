import { Box, IconButton, Typography } from "@mui/material";
import { Stack } from "@mui/system";

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
    <Box sx={{ px: 8 }}>
      <Box display="flex" sx={{ background: "#f5f5f5" }}>
        <Stack direction="row" sx={{ alignItems: "center", pl: 2 }}>
          <img
            src="nigeria.png"
            alt="Nigeria"
            style={{ width: "30px", height: "30px" }}
          />
          <Typography sx={{ ml: 2 }}>Nigeria</Typography>
        </Stack>

        <Stack direction="row" sx={{ ml: "auto" }}>
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
      <Box display="flex" sx={{ px: 16, py: 2 }}>
        <Typography>Payonize &copy;2023</Typography>
        <Stack direction="row" sx={{ ml: "auto" }}>
          <Link to="/" style={{ margin: "0 16px", color: "#000000" }}>
            Privacy Policy
          </Link>
          <Link to="/" style={{ margin: "0 16px", color: "#000000" }}>
            Terms of Use
          </Link>
          <Link
            to="/"
            style={{
              margin: "0 16px",
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
