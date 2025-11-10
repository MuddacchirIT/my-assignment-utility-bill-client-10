import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../pages/Footer.jsx";
const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
