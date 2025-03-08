import { useState } from "react";
import ModalContainer from "../components/modal-components/ModalContainer.jsx";

const ModalApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="mx-auto w-full max-w-7xl px-4 xl:px-0 h-dvh flex flex-col justify-center items-center min-h-dvh">
      <button
        onClick={handleClick}
        className="cursor-pointer px-6 py-2 bg-slate-800 text-white text-lg rounded-md border border-slate-800 shadow-md hover:bg-teal-500 hover:border-teal-500 transition-all duration-300"
      >
        Open Modal
      </button>
      {isOpen ? <ModalContainer handleClick={handleClick} /> : null}
    </div>
  );
};

export default ModalApp;
