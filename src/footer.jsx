import React from 'react'
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import { BsFillInfoCircleFill } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className='text-center py-4 text-gray-300'>
        <Tooltip TransitionComponent={Zoom} arrow title={<h1 className='text-center'>Made by Kristijan Ribaric as a practice while learning React</h1>}>
            <Button>
                <BsFillInfoCircleFill className=' text-3xl inline-block mx-2'/>
            </Button>
          </Tooltip>  
    </footer>
  )
}

export default Footer