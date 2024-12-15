import logo from "../images/logo.png";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="w-full fixed top-0 z-50 shadow-md bg-white">
      <div className="container mx-auto flex items-center justify-between font-gilroy px-6 md:px-10 lg:px-14">
        <img src={logo} className="w-16 h-auto" alt="Logo" />
        <div className="flex space-x-4 flex-2 justify-center content-center items-center font-poppins">
          <Link
            to="/"
            className={`text-sm md:text-base font-semibold px-6 py-5 ${
              isActive("/")
                ? "bg-primary text-white"
                : "text-black hover:bg-secondary px-6 py-6"
            }`}
          >
            HOME
          </Link>
          <Link
            to="/about"
            className={`text-sm md:text-base font-semibold px-6 py-5 ${
              isActive("/about")
                ? "bg-primary text-white"
                : "text-black hover:bg-secondary px-6 py-5"
            }`}
          >
            ABOUT US
          </Link>
          <Link
            to="/reviews"
            className={`text-sm md:text-base font-semibold px-6 py-5 ${
              isActive("/reviews")
                ? "bg-primary text-white"
                : "text-black hover:bg-secondary px-6 py-5"
            }`}
          >
            REVIEWS
          </Link>
        </div>
        <Link to="/sign-in">
          <button className="bg-primary text-white font-poppins font-semibold text-justify px-7 py-2 rounded-full shadow-sm shadow-primary">Sign In</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
