import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ starsNumber = 5 }) => {
  const [rating, setrating] = useState(0);
  const [hover, sethover] = useState(0);

  const handleOnclick = (curruntIndex) => {
    setrating(curruntIndex);
  };
  const handleMouseover = (curruntIndex) => {
    sethover(curruntIndex);
  };
  const handlemouseleave = () => {
    sethover(rating);
  };

  return (
    <div className="stars flex justify-center items-center  w-full h-screen gap-2">
      {[...Array(starsNumber)].map((_, i) => {
        i += 1;
        return (
          <FaStar
            className={
              i <= (hover || rating) ? `text-yellow-400` : "text-black"
            }
            key={i}
            onClick={() => handleOnclick(i)}
            onMouseMove={() => handleMouseover(i)}
            onMouseLeave={() => handlemouseleave()}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
