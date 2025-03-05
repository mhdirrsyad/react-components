import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="flex items-center border-b border-gray-200">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          `relative px-4 py-2 hover:bg-gray-50 transition-all duration-300 ease-in-out after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-teal-600 after:transition-transform after:duration-300 after:origin-left ${isActive ? "after:scale-x-100" : "after:scale-x-0"}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/about"}
        className={({ isActive }) =>
          `relative px-4 py-2 hover:bg-gray-50 transition-all duration-300 ease-in-out after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-teal-600 after:transition-transform after:duration-300 after:origin-left ${isActive ? "after:scale-x-100" : "after:scale-x-0"}`
        }
      >
        About
      </NavLink>
      <NavLink
        to={"/portfolio"}
        className={({ isActive }) =>
          `relative px-4 py-2 hover:bg-gray-50 transition-all duration-300 ease-in-out after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-teal-600 after:transition-transform after:duration-300 after:origin-left ${isActive ? "after:scale-x-100" : "after:scale-x-0"}`
        }
      >
        Portfolio
      </NavLink>
    </nav>
  );
};

export default Navbar;
