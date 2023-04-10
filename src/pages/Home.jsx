import { Box, Toolbar } from "@mui/material";
import ContactUs from "../components/ContactUs";
import Guide from "../components/Guide";
import Info from "../components/Info";
import Showcase from "../components/Showcase";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Toolbar />
      <Showcase />
      <Guide />
      <Info />
      <ContactUs />
      <Footer />
    </Box>
  );
};

export default Home;
