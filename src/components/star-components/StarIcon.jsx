import { FaStar } from "react-icons/fa";
import { useState } from "react";

const StarIcon = ({ totalStars }) => {
  const [totalHover, setTotalHover] = useState(-1);
  const [totalClick, setTotalClick] = useState(-1);
  const [isHover, setIsHover] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleOver = (index) => {
    setIsHover(true);
    setTotalHover(index);
  };

  const handleLeave = () => {
    setIsHover(false);
  };

  const handleClick = (index) => {
    setIsClicked(true);
    setTotalClick(index);
  };

  return (
    <div className="flex gap-4">
      {totalStars > 0 &&
        Array.from({ length: totalStars }).map((_, index) => (
          <FaStar
            key={index}
            className={`size-12 ${(isHover && totalHover >= index) || (isClicked && totalClick >= index) ? "text-yellow-400" : "text-gray-500"} cursor-pointer`}
            onMouseOver={() => handleOver(index)}
            onMouseLeave={() => handleLeave()}
            onClick={() => handleClick(index)}
          />
        ))}
    </div>
  );
};

export default StarIcon;
