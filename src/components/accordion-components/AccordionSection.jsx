import { FaChevronDown } from "react-icons/fa";

const AccordionSection = ({ faq, index, handleActive, activeIndex }) => {
  return (
    <div className="w-full">
      {/* Question */}
      <button
        onClick={() => handleActive(index)}
        className="flex justify-between items-center w-full px-4 py-4 cursor-pointer gap-6"
      >
        <h3 className="text-lg text-black font-medium text-start">
          {faq.question}
        </h3>
        <FaChevronDown
          className={`size-4 text-gray-300 ${index === activeIndex ? "-rotate-180" : ""} transition-all duration-600`}
        />
      </button>

      {/* Answer */}
      <div
        className={`${index === activeIndex ? "max-h-72 md:max-h-36" : "max-h-0"} overflow-hidden transition-all duration-600`}
      >
        <p className="px-4 pb-4 block text-gray-600">{faq.answer}</p>
      </div>
    </div>
  );
};

export default AccordionSection;
