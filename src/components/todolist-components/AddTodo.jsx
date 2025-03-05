import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

const AddTodo = ({ handleAddTodo }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="mt-12 mb-6 flex flex-row gap-4 w-full items-center px-6 py-4 shadow-lg rounded-lg">
      <input
        type="text"
        placeholder="Masukkan tugas terbaru..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="h-12 w-full outline-none border-b border-gray-200"
      />
      <button
        onClick={() => handleAddTodo(inputValue)}
        className="hover:bg-gray-50 w-12 h-12 flex items-center justify-center cursor-pointer"
      >
        <IoMdAdd className="size-6" />
      </button>
    </div>
  );
};

export default AddTodo;
