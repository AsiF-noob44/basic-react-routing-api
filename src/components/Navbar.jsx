import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-white text-2xl font-bold">RouteApp</div>
          <div className="flex items-center space-x-6">
            <Link
              to="/"
              className="text-white hover:text-blue-200 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-blue-200 transition-colors duration-200 font-medium"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-blue-200 transition-colors duration-200 font-medium"
            >
              Contact Us
            </Link>
            <Link
              to="/products"
              className="text-white hover:text-blue-200 transition-colors duration-200 font-medium"
            >
              Products
            </Link>
            <Link
              to="/posts"
              className="text-white hover:text-blue-200 transition-colors duration-200 font-medium"
            >
              Posts
            </Link>
            <Link
              to="/login"
              className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors duration-200 font-medium"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
