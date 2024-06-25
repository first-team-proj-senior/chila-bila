import React from 'react'
import Slides from '../home-compon/Slides'
import HomeImg from '../../image/home.jpg'
import { IoHome } from "react-icons/io5";
import { TbCarSuv } from "react-icons/tb";
import { CiMobile2 } from "react-icons/ci";
import { FaRegGrinHearts } from "react-icons/fa";
import HomeCategories from '../home-compon/HomeCategories';
import CurrentAnnouc from '../home-compon/CurrentAnnouc';
import Footer from '../Footer'
const Home = () => {
  return (
    <div className='p-4'>
      <div className="slide-container">
       <Slides/>
       </div>
       <div className="p-4 mt-4">
        <h2 className='ml-14 mt-4 font-medium text-2xl'>Currently on Chila Bila 🔥🔥</h2>
       <div className="all-annouc mt-10 ml-8 flex flex-wrap">
        <div className="annoucment-card max-w-44 m-4 bg-white shadow-md rounded-xl flex flex-col">
         <img className='max-w-48 rounded-xl' src={HomeImg} ></img>
         <h3 className='max-w-44 flex flex-warp p-3 items-center justify-center font-medium'>Maison individuelle de 150m2 sous-sol comp </h3>
         <h3 className='max-w-44 flex flex-warp p-3 items-center justify-center font-medium' >150.000 TND</h3>
         </div>
         <div className="annoucment-card max-w-44 m-4 bg-white shadow-md rounded-xl flex flex-col">
         <img className='max-w-48 rounded-xl' src={HomeImg} ></img>
         <h3 className='max-w-44 flex flex-warp p-3 items-center justify-center font-medium'>Maison individuelle de 150m2 sous-sol comp </h3>
         <h3 className='max-w-44 flex flex-warp p-3 items-center justify-center font-medium' >150.000 TND</h3>
         </div>
         <div className="annoucment-card max-w-44 m-4 bg-white shadow-md rounded-xl flex flex-col">
         <img className='max-w-48 rounded-xl' src={HomeImg} ></img>
         <h3 className='max-w-44 flex flex-warp p-3 items-center justify-center font-medium'>Maison individuelle de 150m2 sous-sol comp </h3>
         <h3 className='max-w-44 flex flex-warp p-3 items-center justify-center font-medium' >150.000 TND</h3>
         </div>
         <div className="annoucment-card max-w-44 m-4 bg-white shadow-md rounded-xl flex flex-col">
         <img className='max-w-48 rounded-xl' src={HomeImg} ></img>
         <h3 className='max-w-44 flex flex-warp p-3 items-center justify-center font-medium'>Maison individuelle de 150m2 sous-sol comp </h3>
         <h3 className='max-w-44 flex flex-warp p-3 items-center justify-center font-medium' >150.000 TND</h3>
         </div>
         <div className="annoucment-card max-w-44 m-4 bg-white shadow-md rounded-xl flex flex-col">
         <img className='max-w-48 rounded-xl' src={HomeImg} ></img>
         <h3 className='max-w-44 flex flex-warp p-3 items-center justify-center font-medium'>Maison individuelle de 150m2 sous-sol comp </h3>
         <h3 className='max-w-44 flex flex-warp p-3 items-center justify-center font-medium' >150.000 TND</h3>
         </div>
         <div className="annoucment-card max-w-44 m-4 bg-white shadow-md rounded-xl flex flex-col">
         <img className='max-w-48 rounded-xl' src={HomeImg} ></img>
         <h3 className='max-w-44 flex flex-warp p-3 items-center justify-center font-medium'>Maison individuelle de 150m2 sous-sol comp </h3>
         <h3 className='max-w-44 flex flex-warp p-3 items-center justify-center font-medium' >150.000 TND</h3>
         </div>
       </div>
       </div>
       <div className="flex flex-col gap-10">
        <h2 className='ml-14 mt-4 font-medium text-2xl'>Explore Categories 💥💥</h2>
        <div className="flex gap-20 ml-16 items-center justify-center">
         <div className="flex flex-col items-center bg-slate-100 p-6 max-w-28 cursor-pointer rounded-xl">
           <IoHome size={27}/>
           <span className='font-medium'>Homes</span>
         </div>
         <div className="flex flex-col items-center bg-slate-100 p-6 w-28 rounded-xl">
           <TbCarSuv size={27}/>
           <span className='font-medium'>Cars</span>
         </div>
         <div className="flex flex-col items-center bg-slate-100 p-6 max-w-28 rounded-xl">
           <CiMobile2 size={27}/>
           <span className='font-medium'>Electronics</span>
         </div>
         <div className="flex flex-col items-center bg-slate-100 p-6 max-w-28 rounded-xl">
           <FaRegGrinHearts size={27}/>
           <span className='font-medium'>Hobbies</span>
         </div>
        </div>
       </div>
    </div>
  )
}

export default Home