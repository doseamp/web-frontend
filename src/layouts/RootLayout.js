import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import MainNavbar from "../components/MainNavbar";

const RootLayout = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <MainNavbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
