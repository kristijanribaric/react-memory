import React from "react";
import classnames from "classnames";
import "./card.css";
import { CgFormatJustify } from "react-icons/cg";


const Card = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };

  return (
    <div
      className={classnames("card cursor-pointer h-40 ", {
        "is-flipped": isFlipped,
        "is-inactive": isInactive
      })}
      onClick={handleClick}
    >
      
      <div className="card-face card-font-face bg-red-300 shadow-xl shadow-red-300 rounded-md ring-4 ring-white flex  justify-center items-center">
        <CgFormatJustify className="w-full h-2/3"/>
      </div>
      <div className="card-face card-back-face bg-blue-300 shadow-xl shadow-blue-300 rounded-md ring-4 ring-white flex  justify-center items-center">
        {card}
      </div>
    </div>
  );
};

export default Card;