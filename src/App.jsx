import "./App.css";
import TodoApp from "./apps/TodoApp.jsx";
import ModalApp from "./apps/ModalApp.jsx";
import ToggleApp from "./apps/ToggleApp.jsx";
import AccordionApp from "./apps/AccordionApp.jsx";
import RatingStarApp from "./apps/RatingStarApp.jsx";
import NavigationApp from "./apps/NavigationApp.jsx";
import CarouselApp from "./apps/CarouselApp.jsx";
import CountdownApp from "./apps/CountdownApp.jsx";
import LiveCharacterApp from "./apps/LiveCharacterApp.jsx";
import AutocompleteSearchApp from "./apps/AutocompleteSearchApp.jsx";
import DarkModeApp from "./apps/DarkModeApp.jsx";

function App() {
  return (
    <div className="divide-y-2 divide-gray-200 max-w-4xl mx-auto">
      {/* Todolist */}
      {/*<TodoApp />*/}

      {/* Modal */}
      {/*<ModalApp />*/}

      {/* Toggle */}
      {/*<ToggleApp />*/}

      {/* Accordion */}
      {/*<AccordionApp />*/}

      {/* Rating star */}
      {/*<RatingStarApp />*/}

      {/* Navigation */}
      {/*<NavigationApp />*/}

      {/* Carousel App */}
      {/*<CarouselApp />*/}

      {/* Countdown Timer */}
      {/*<CountdownApp />*/}

      {/* Live Character Counter */}
      {/*<LiveCharacterApp />*/}

      {/* Autocomplete Search */}
      {/*<AutocompleteSearchApp />*/}

      {/* Darkmode App */}
      <DarkModeApp />
    </div>
  );
}

export default App;
