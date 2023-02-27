import { Box } from "@mui/material";
import ContactUs from "../components/ContactUs";
import Guide from "../components/Guide";
import Showcase from "../components/Showcase";

const Home = () => {
  return (
    <Box>
      <Showcase />
      <Guide />
      <ContactUs />
    </Box>
  );
};

export default Home;
