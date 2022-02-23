import React from 'react'
import { useState } from "react";
import { GiCard5Spades } from "react-icons/gi";
import { CgFormatJustify } from "react-icons/cg";

const Card = () => {
    const [style, setStyle] = useState();
    const changeStyle = () => {
      if(style === true)
      {setStyle("flip-content flip-content-activated");}
      else {
        setStyle("flip-content");
      }
      style = !style;
    };
  return (
    <>
     <div onClick={changeStyle} className="flip">
            <div className={style}>
                <div className="flip-back">
                <GiCard5Spades className='w-full h-full' />
                </div>
                <div className="flip-front">
                <CgFormatJustify className='w-full h-full' />
                </div>
            </div>
        </div>

    </>
  )
}

export default Card