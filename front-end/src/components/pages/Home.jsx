import React from 'react'
import Slides from '../home-compon/Slides'
import HomeImg from '../../image/home.jpg'
import { IoHome } from "react-icons/io5";
import { TbCarSuv } from "react-icons/tb";
import { CiMobile2 } from "react-icons/ci";
import { FaRegGrinHearts } from "react-icons/fa";
import HomeCategories from '../home-compon/HomeCategories';
import CurrentAnnouc from '../home-compon/CurrentAnnouc';
import { NavLink } from 'react-router-dom';
const Home = () => {
  return (
    <div className='p-4'>
      <div className="slide-container">
       <Slides/>
       </div>
       <div className="p-4 mt-4">
        <h2 className='ml-14 mt-4 font-medium text-2xl flex items-center justify-center'>Currently on Chila Bila 🔥🔥</h2>
       <div className="all-annouc mt-10 ml-8 flex flex-wrap">
        <div className="annoucment-card max-w-44 m-4 bg-white shadow-md rounded-xl flex flex-col">
         <img className='max-w-48 rounded-xl' src={HomeImg} ></img>
         <h3 className='max-w-44 flex flex-warp p-3 items-center justify-center font-medium'>Maison individuelle de 150m2 sous-sol comp </h3>
         <h3 className='max-w-44 flex flex-warp p-3 items-center justify-center font-medium' >150.000 TND</h3>
         </div>
       </div>
       </div>
       <div className="flex flex-col">
        <h2 className='ml-14 mt-4 font-medium text-2xl flex items-center justify-center'>Explore Categories 💥💥</h2>
        <div className="flex gap-20 mt-10 ml-16 items-center justify-center p-4">
          <NavLink to='/category/real-estate'>
         <div className="flex flex-col items-center bg-slate-100 p-6 max-w-28 cursor-pointer rounded-xl hover:text-[#ff385c]">
           <IoHome size={27}/>
           <span className='font-medium'>Homes</span>
         </div>
          </NavLink>
           <NavLink to='/category/cars'>
         <div className="flex flex-col items-center cursor-pointer bg-slate-100 p-6 w-28 rounded-xl hover:text-[#ff385c]">
           <TbCarSuv size={27}/>
           <span className='font-medium'>Cars</span>
         </div>
           </NavLink>
           <NavLink to='/category/electronics'>
         <div className="flex flex-col items-center cursor-pointer bg-slate-100 p-6 max-w-28 rounded-xl hover:text-[#ff385c]">
           <CiMobile2 size={27}/>
           <span className='font-medium'>Electronics</span>
         </div>
           </NavLink>
             <NavLink to='/category/hobbies'>
         <div className="flex flex-col items-center cursor-pointer bg-slate-100 p-6 max-w-28 rounded-xl hover:text-[#ff385c]">
           <FaRegGrinHearts size={27}/>
           <span className='font-medium'>Hobbies</span>
         </div>
             </NavLink>
        </div>
       </div>
    </div>
  )
}

export default Home