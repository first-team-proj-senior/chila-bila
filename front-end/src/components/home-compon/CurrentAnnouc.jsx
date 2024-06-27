import React from 'react'
import HomeImg from '../../image/home.jpg'

const CurrentAnnouc = () => {
  return (
    <div className="all-annouc mt-10 ml-8 flex flex-wrap">
        <div className="annoucment-card max-w-44 m-4 bg-white shadow-md rounded-xl flex flex-col cursor-pointer">
         <img className='max-w-48 rounded-xl' src={HomeImg} ></img>
         <h3 className='max-w-44 flex flex-warp p-3 items-center justify-center font-medium hover:text-[#ff385c]' >Maison individuelle de 150m2 sous-sol comp </h3>
         <h3 className='max-w-44 flex flex-warp p-3 items-center justify-center font-medium' >150.000 TND</h3>
         </div>
       </div>
  )
}

export default CurrentAnnouc