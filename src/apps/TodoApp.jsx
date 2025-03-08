import AddTodo from "../components/todolist-components/AddTodo.jsx";
import { useState } from "react";
import TodoList from "../components/todolist-components/TodoList.jsx";

const TodoApp = () => {
  const [todoData, setTodoData] = useState([]);

  const handleEdit = (id) => {
    setTodoData(
      todoData.map((todo) => {
        return todo.id === id ? { ...todo, isEdit: !todo.isEdit } : todo;
      }),
    );
  };

  const handleAddTodo = (inputValue) => {
    setTodoData([
      ...todoData,
      {
        id: Date.now(),
        text: inputValue,
        completed: false,
        isEdit: false,
        isChecked: false,
      },
    ]);
  };

  const handleRemoveTodo = (id) => {
    setTodoData([...todoData.filter((todo) => todo.id !== id)]);
  };

  const handleUpdateTodo = (id, text) => {
    setTodoData(
      todoData.map((todo) => {
        return todo.id === id ? { ...todo, text, isEdit: false } : todo;
      }),
    );
  };

  const handleFinished = (id) => {
    console.log(id);

    setTodoData(
      todoData.map((todo) => {
        return todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo;
      }),
    );
  };

  return (
    <div className="min-h-dvh max-w-full">
      <div className="mx-auto max-w-2xl flex flex-col items-center gap-4 px-4">
        <AddTodo handleAddTodo={handleAddTodo} />
        <TodoList
          todoData={todoData}
          handleRemoveTodo={handleRemoveTodo}
          handleEdit={handleEdit}
          handleUpdateTodo={handleUpdateTodo}
          handleFinished={handleFinished}
        />
      </div>
    </div>
  );
};

export default TodoApp;
