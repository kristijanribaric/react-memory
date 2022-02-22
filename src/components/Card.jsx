import React from 'react'
import { useState } from "react";
import { GiCard5Spades } from "react-icons/gi";
import { CgFormatJustify } from "react-icons/cg";

const Card = () => {
    const [style, setStyle] = useState("flip-content");
    const changeStyle = () => {
      if(style == "flip-content")
      {setStyle("flip-content flip-content-activated");}
      else {
        setStyle("flip-content");
      }
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