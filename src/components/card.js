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
      className={classnames("card cursor-pointer ", {
        "is-flipped": isFlipped,
        "is-inactive": isInactive
      })}
      onClick={handleClick}
    >
      
      <div className="card-face card-font-face bg-red-300 shadow-md shadow-red-200">
        <CgFormatJustify className="w-full h-20"/>
      </div>
      <div className="card-face card-back-face bg-blue-300 shadow-lg shadow-blue-200">
        {card}
      </div>
    </div>
  );
};

export default Card;