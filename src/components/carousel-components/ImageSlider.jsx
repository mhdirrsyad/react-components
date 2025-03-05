import { useEffect, useRef } from "react";

const ImageSlider = ({ imageName, imageURL, setImageWidth }) => {
  const imageRef = useRef(null);

  useEffect(() => {
    setImageWidth(imageRef.current.clientWidth);
  }, [imageRef]);

  return (
    <>
      <img
        ref={imageRef}
        src={imageURL}
        alt={imageName}
        className={`w-4xl max-w-dvw object-cover`}
      />
    </>
  );
};

export default ImageSlider;
