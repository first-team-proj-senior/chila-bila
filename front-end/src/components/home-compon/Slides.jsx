import React from 'react'
import Slide1 from '../img-slides/slide-1.png'
import { NavLink } from 'react-router-dom'


const Slides = () => {
  return (
    <div className='flex items-center justify-center mt-10 mr-20'>
        <div className=" flex items-center justify-center">
            <img id='slide'  className='rounded-xl' src={Slide1}></img>
            <span id='get-started'>Get Started</span>
        </div>
    </div>
  )
}

export default Slides