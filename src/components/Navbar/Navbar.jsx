import { Link, NavLink } from "react-router-dom";
import { HiBars2 } from "react-icons/hi2";
import { IoIosClose } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import { useEffect, useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${
          isScrolled ? "backdrop-blur-md text-black" : "bg-transparent"
        } `}
      >
        <div className="container flex justify-between items-center py-5 relative z-50 font-poppins">
          <div className="flex items-center gap-x-20">
            {/* logo section */}
            <div className="logo">
              <Link to="/" className="font-bold text-2xl">
                FlexFit
              </Link>
            </div>
            {/* menu section */}
            <div className="menu hidden lg:block">
              <ul className="flex items-center gap-5 uppercase">
                <li>
                  <NavLink
                    className="px-5 hover:text-primary duration-200"
                    to="/about"
                  >
                    about
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="px-5 hover:text-primary duration-200"
                    to="/schedule"
                  >
                    schedule
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="px-5 hover:text-primary duration-200"
                    to="/store"
                  >
                    store
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="px-5 hover:text-primary duration-200"
                    to="/contact"
                  >
                    contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          {/* buttons section */}
          <div className="icons items-center gap-2 hidden lg:flex">
            <button className="uppercase text-white text-sm bg-secondary px-10 py-4 rounded-full hover:bg-transparent border-2 border-transparent hover:border-2 hover:border-primary duration-200">
              join our gym
            </button>
            <button className="bg-primary h-10 w-10 rounded-full flex justify-center items-center">
              <MdArrowOutward className="text-black text-lg" />
            </button>
          </div>
          {/* mobile menu section */}
          <div
            className="hamburger text-3xl md:text-4xl lg:hidden cursor-pointer"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <IoIosClose /> : <HiBars2 />}
          </div>
        </div>
      </nav>
      {/* responsive menu section */}
      <ResponsiveMenu isOpen={isOpen} />
    </>
  );
};

export default Navbar;
