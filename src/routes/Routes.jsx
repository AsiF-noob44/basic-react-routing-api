import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import Login from "../pages/Login.jsx";
import MainLayout from "../layouts/MainLayout.jsx";
import Products from "../pages/Products.jsx";
import ProductDetails from "../components/ProductDetails.jsx";
import Posts from "../pages/Posts.jsx";

const customRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/posts" element={<Posts />} />
        </Route>
        <Route path="/login" element={<Login />} />
        {/* Login is a standalone route without the MainLayout */}
      </Routes>
    </>
  );
};

export default customRoutes;
