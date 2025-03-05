import { useState } from "react";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

const ToggleApp = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      className={`min-h-dvh flex min-h-dvh justify-center items-center ${isOn ? "bg-[#021526]" : "bg-white"} transition-all duration-700`}
    >
      <button
        onClick={handleToggle}
        className={`h-max p-0.5 w-24 ${isOn ? "bg-gray-300" : "bg-[#021526] "} rounded-md cursor-pointer shadow-md transition-all duration-700`}
      >
        <span
          className={`flex justify-center items-center ${isOn ? "translate-x-full bg-[#021526]" : "translate-x-0 bg-white"} h-10 w-1/2  block rounded-sm transition-all duration-700`}
        >
          {isOn ? (
            <IoMdMoon className="text-white size-6" />
          ) : (
            <IoMdSunny className="text-[#021526] size-6" />
          )}
        </span>
      </button>
    </div>
  );
};

export default ToggleApp;
