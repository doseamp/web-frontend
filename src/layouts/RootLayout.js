import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
import MainNavbar from "../components/MainNavbar";

const RootLayout = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <MainNavbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
