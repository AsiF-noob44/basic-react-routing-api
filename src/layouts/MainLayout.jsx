import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../pages/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-8 grow">
        <Outlet />
        {/* This is where nested routes will be rendered as children of MainLayout */}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
