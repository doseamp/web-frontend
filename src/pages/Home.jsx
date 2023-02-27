import { Box } from "@mui/material";
import ContactUs from "../components/ContactUs";
import Guide from "../components/Guide";
import Info from "../components/Info";
import Showcase from "../components/Showcase";

const Home = () => {
  return (
    <Box>
      <Showcase />
      <Guide />
      <Info />
      <ContactUs />
    </Box>
  );
};

export default Home;
