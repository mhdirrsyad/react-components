import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { useContext } from "react";
import { ThemeContext } from "../../apps/DarkModeApp.jsx";

const Toggle = () => {
  const { theme, handleToggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex self-end">
      <button
        onClick={() => handleToggleTheme(theme === "light" ? "dark" : "light")}
        className={`h-max p-0.5 w-18 rounded-md cursor-pointer border-1 ${theme === "light" ? "border-[#021526] bg-white" : "border-gray-200 bg-[#021526]"}  transition-all duration-700`}
      >
        <span
          className={`flex justify-center items-center ${theme === "light" ? "translate-x-0 bg-[#021526]" : "translate-x-full bg-white"}  h-8 w-1/2  rounded-sm transition-all duration-700`}
        >
          {theme === "light" ? (
            <IoMdSunny className="text-white size-5" />
          ) : (
            <IoMdMoon className="text-[#021526] size-5" />
          )}
        </span>
      </button>
    </div>
  );
};

export default Toggle;
