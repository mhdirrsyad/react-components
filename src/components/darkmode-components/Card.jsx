import Toggle from "./Toggle.jsx";

const Card = () => {
  return (
    <div className="max-w-lg border-1 border-gray-200 dark:border-gray-700 bg-white dark:bg-[#021526] shadow-md flex flex-col gap-4 p-6 rounded-lg transition-colors duration-600">
      <Toggle />

      <div className="flex flex-col gap-2">
        <h3 className="text-xl dark:text-white">Toggle Dark/Light Mode</h3>
        <p className="dark:text-white">
          Click the button to toggle between dark and light mode for this
          component.
        </p>
      </div>
    </div>
  );
};

export default Card;
