import React from 'react'
import { ModalHover } from 'react-modal-hover'
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import Zoom from '@mui/material/Zoom';
import { ReactSVG } from 'react-svg'



const Header = () => {
  return (
    <header className='w-full bg-gray-100 py-3 text-center'>
        <h1 className='font-bold text-3xl'>Memory game</h1>
        <h2>
            Made with 
            <Tooltip TransitionComponent={Zoom} title={<a href='https://reactjs.org/' target="_blank">https://reactjs.org/</a>}>
            <Button>
              <FaReact className='inline-block text-indigo-400 motion-safe:animate-spin text-2xl'/>
              <span className='text-indigo-400 mx-1'>React</span>
            </Button>
          </Tooltip>  
        </h2>
        <h3>
            Made beautiful with  
            <Tooltip TransitionComponent={Zoom} title={<a href='https://tailwindcss.com/' target="_blank">https://tailwindcss.com/</a>}>
              <Button >
                <SiTailwindcss className='inline-block text-indigo-400 motion-safe:animate-pulse  text-2xl'/> 
                <span className='text-indigo-400 mx-1'>Tailwind CSS</span>
              </Button>
          </Tooltip>  
      </h3>
        
    </header>
    
  )
}

export default Header