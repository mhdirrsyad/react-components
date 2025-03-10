import { createContext, useEffect, useState } from "react";
import Card from "../components/darkmode-components/Card.jsx";

export const ThemeContext = createContext(null);

const DarkModeApp = () => {
  const field = localStorage.getItem("theme");
  const [theme, setTheme] = useState(field || "light");

  const handleToggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  useEffect(() => {
    const darkModeSystem = window.matchMedia("(prefers-color-scheme: dark)");

    if (darkModeSystem.matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      <div
        className="min-h-dvh bg-white dark:bg-gray-800 flex justify-center items-center w-full transition-colors duration-600"
        data-theme={theme}
      >
        <Card />
      </div>
    </ThemeContext.Provider>
  );
};

export default DarkModeApp;
