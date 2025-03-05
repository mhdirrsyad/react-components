import { IoMdCheckmarkCircle, IoMdCloseCircle } from "react-icons/io";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { useState } from "react";

const TodoList = ({
  todoData,
  handleRemoveTodo,
  handleEdit,
  handleUpdateTodo,
  handleFinished,
}) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <ul className="w-full">
      {todoData.map((todo) => (
        <li
          key={todo.id}
          className="px-6 py-4 rounded-lg w-full items-center hover:bg-gray-50"
        >
          {todo.isEdit ? (
            <div className="flex flex-row gap-4">
              <input
                type="text"
                placeholder="Perbarui tugas..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="h-12 w-full outline-none border-b border-gray-200"
              />
              <div className="ml-auto flex flex-row items-center gap-2">
                <button
                  className="cursor-pointer"
                  onClick={() => {
                    setInputValue("");
                    handleUpdateTodo(todo.id, inputValue);
                  }}
                >
                  <IoMdCheckmarkCircle className="size-6 text-teal-500" />
                </button>
                <button
                  className="cursor-pointer"
                  onClick={() => handleEdit(todo.id)}
                >
                  <IoMdCloseCircle className="size-6 text-red-500" />
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-row gap-4 items-center">
              <input
                type="checkbox"
                id="helper-checkbox"
                aria-describedby="helper-checkbox-text"
                value={todo.isChecked}
                onChange={() => handleFinished(todo.id)}
                className="w-4 h-4 text-teal-600 accent-teal-600 border-gray-300 rounded-sm focus:ring-teal-600  focus:ring-2"
              />
              <p
                className={`font-semibold flex items-center text-md ${todo.isChecked ? "text-gray-400 line-through" : ""}`}
              >
                {todo.text}
              </p>
              <div className="ml-auto flex flex-row items-center gap-2">
                <button
                  className="cursor-pointer"
                  onClick={() => handleEdit(todo.id)}
                >
                  <MdOutlineEdit className="size-6 text-teal-500" />
                </button>
                <button
                  className="cursor-pointer"
                  onClick={() => handleRemoveTodo(todo.id)}
                >
                  <MdDeleteOutline className="size-6 text-red-500" />
                </button>
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
