import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

const RootLayout = () => {
  return (
    <div>
      <div className="border-b">
        <Header />
      </div>

      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
