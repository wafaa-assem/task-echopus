import { NavLink } from "react-router-dom";

const ResponsiveMenu = ({ isOpen }) => {
  return (
    isOpen && (
      <div className="fixed top-12 left-0 w-full lg:hidden z-[9999]">
        <div className="py-10 bg-black/95 m-6 rounded-3xl">
          <ul className="flex flex-col justify-center items-center gap-5 uppercase font-poppins font-semibold">
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

            <li>
              <button className="uppercase text-xs bg-secondary px-6 py-3 rounded-full hover:bg-transparent border-2 border-secondary hover:border-2 hover:border-primary duration-200">
                join our gym
              </button>
            </li>
          </ul>
        </div>
      </div>
    )
  );
};

export default ResponsiveMenu;
