import faqData from "../data/faqData.js";
import AccordionSection from "../components/accordion-components/AccordionSection.jsx";
import { useState } from "react";

const AccordionApp = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleActive = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-full min-h-dvh">
      <div className="mx-4 md:mx-auto mt-12 divide-y divide-gray-200 max-w-2xl border border-gray-200 rounded-lg">
        {faqData.map((faq, index) => (
          <AccordionSection
            key={index}
            faq={faq}
            index={index + 1}
            activeIndex={activeIndex}
            handleActive={handleActive}
          />
        ))}
      </div>
    </div>
  );
};

export default AccordionApp;
