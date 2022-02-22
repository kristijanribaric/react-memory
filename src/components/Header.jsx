import React from 'react'
import { ModalHover } from 'react-modal-hover'
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Header = () => {
  return (
    <header className='w-full bg-gray-100 py-3 text-center'>
        <h1 className='font-bold text-3xl'>Memory game</h1>
        <h2>Made with  <FaReact className='inline-block text-indigo-400 motion-safe:animate-spin text-2xl'/> <span className='text-indigo-400'>React</span> </h2>
        <h3>Made beautiful with  <SiTailwindcss className='inline-block text-indigo-400 motion-safe:animate-pulse  text-2xl'/> <span className='text-indigo-400'>Tailwind CSS</span> </h3>
    </header>
    
  )
}

export default Header