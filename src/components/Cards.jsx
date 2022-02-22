import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='grid grid-cols-3 w-3/4 md:w-1/2 lg:w-1/3 m-auto gap-5'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
  )
}

export default Cards