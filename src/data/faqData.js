const faqData = [
  {
    question: "What is React.js?",
    answer:
      "React.js is a JavaScript library for building user interfaces, primarily used for developing single-page applications (SPAs). It allows developers to create reusable UI components and efficiently update the UI when data changes.",
  },
  {
    question: "What are React hooks?",
    answer:
      "React hooks are functions that let you use state and other React features in functional components. Examples include useState for state management and useEffect for handling side effects.",
  },
  {
    question: "What is the difference between props and state?",
    answer:
      "Props are used to pass data from a parent component to a child component, while state is a component's internal data that can change over time and trigger re-renders.",
  },
  {
    question: "What is JSX in React?",
    answer:
      "JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML. It allows developers to write UI components in a more readable and declarative way within JavaScript code.",
  },
  {
    question: "What is the Virtual DOM in React?",
    answer:
      "The Virtual DOM is a lightweight copy of the actual DOM. React uses it to efficiently update the UI by comparing changes between the old and new Virtual DOM and only applying necessary updates to the real DOM.",
  },
];

export default faqData;
