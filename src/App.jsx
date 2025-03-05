import "./App.css";
import TodoApp from "./TodoApp.jsx";
import ModalApp from "./ModalApp.jsx";
import ToggleApp from "./ToggleApp.jsx";
import AccordionApp from "./AccordionApp.jsx";
import RatingStarApp from "./RatingStarApp.jsx";
import NavigationApp from "./NavigationApp.jsx";
import CarouselApp from "./CarouselApp.jsx";

function App() {
  return (
    <div className="divide-y-2 divide-gray-200 max-w-4xl mx-auto">
      {/* Todolist */}
      <TodoApp />

      {/* Modal */}
      <ModalApp />

      {/* Toggle */}
      <ToggleApp />

      {/* Accordion */}
      <AccordionApp />

      {/* Rating star */}
      <RatingStarApp />

      {/* Navigation */}
      <NavigationApp />

      {/* Carousel App */}
      <CarouselApp />
    </div>
  );
}

export default App;
