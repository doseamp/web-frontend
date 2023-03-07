import { Box } from "@mui/material";
import ContactUs from "../components/ContactUs";
import Guide from "../components/Guide";
import Info from "../components/Info";
import Showcase from "../components/Showcase";
import Footer from "../components/Footer";
import MainNavbar from "../components/MainNavbar";

const Home = () => {
  return (
    <Box>
      <MainNavbar />
      <Showcase />
      <Guide />
      <Info />
      <ContactUs />
      <Footer />
    </Box>
  );
};

export default Home;
