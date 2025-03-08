import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "../components/navigation-components/Navbar.jsx";
import Home from "../components/navigation-components/Home.jsx";
import About from "../components/navigation-components/About.jsx";
import Portfolio from "../components/navigation-components/Portfolio.jsx";

const NavigationApp = () => {
  return (
    <div className="min-h-dvh max-w-full">
      <BrowserRouter>
        <div className="max-w-xl mx-auto pt-4">
          <Navbar />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/portfolio"} element={<Portfolio />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default NavigationApp;
