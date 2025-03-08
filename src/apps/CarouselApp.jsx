import ImageSlider from "../components/carousel-components/ImageSlider.jsx";
import imageData from "../data/imageData.js";
import rightIcon from "../assets/icons/chevron_right_icon.svg";
import leftIcon from "../assets/icons/chevron_left_icon.svg";
import { useEffect, useState } from "react";

const CarouselApp = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [imageWidth, setImageWidth] = useState(null);

  const handleNext = () => {
    if (activeImageIndex + 1 > imageData.length - 1) {
      setActiveImageIndex(0);
    } else {
      setActiveImageIndex(activeImageIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeImageIndex - 1 < 0) {
      setActiveImageIndex(imageData.length - 1);
    } else {
      setActiveImageIndex(activeImageIndex - 1);
    }
  };

  useEffect(() => {
    const autoNext = setInterval(handleNext, 5000);

    return () => {
      clearInterval(autoNext);
    };
  }, [activeImageIndex]);

  return (
    <div className="min-h-dvh max-w-full">
      <div className="relative max-w-4xl mt-0 md:mt-4 lg:mt-8 mx-auto overflow-hidden h-dvh md:h-[36rem]">
        {/* Image */}
        <div
          className={`absolute flex flex-row w-max h-full transition-transform duration-200 ease-in-out`}
          style={{
            transform: `translateX(-${activeImageIndex * imageWidth}px)`,
          }}
        >
          {imageData.length >= 0
            ? imageData.map((item, index) => (
                <ImageSlider
                  key={index}
                  setImageWidth={setImageWidth}
                  imageWidth={imageWidth}
                  {...item}
                  activeImageIndex={activeImageIndex}
                />
              ))
            : ""}
        </div>

        {/* Button */}
        <div className="absolute w-full px-8 h-max top-1/2 flex justify-between">
          <button onClick={handlePrev} className="cursor-pointer group">
            <img
              src={leftIcon}
              alt="Left icon slider"
              className="group-hover:-translate-x-1 group-hover:scale-125 group-active:scale-100 transition-transform duration-200"
            />
          </button>
          <button className="cursor-pointer group" onClick={handleNext}>
            <img
              src={rightIcon}
              alt="Right icon slider"
              className="group-hover:translate-x-1 group-hover:scale-125 group-active:scale-100 transition-transform duration-200"
            />
          </button>
        </div>

        {/* Slider */}
        <div className="absolute flex bottom-0 divide-x-1 divide-gray-400 w-full">
          {imageData.length >= 0 &&
            imageData.map((_, index) => (
              <div
                onClick={() => setActiveImageIndex(index)}
                key={index}
                className={`w-full h-3 bg-gray-200 cursor-pointer transition-transform duration-200 ease-in-out ${activeImageIndex === index ? "scale-y-150 bg-rose-800" : ""}`}
              ></div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselApp;
