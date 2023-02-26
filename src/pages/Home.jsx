import { Container } from "@mui/material";
import ContactUs from "../components/ContactUs";
import Showcase from "../components/Showcase";

const Home = () => {
  return (
    <Container maxWidth="xl">
      <Showcase />
      <ContactUs />
    </Container>
  );
};

export default Home;
