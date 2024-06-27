import React from 'react'
import { IoHome } from "react-icons/io5";
import { TbCarSuv } from "react-icons/tb";
import { CiMobile2 } from "react-icons/ci";
import { FaRegGrinHearts } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const HomeCategories = () => {
  return (
    <div className="flex gap-20 ml-16 items-center justify-center mt-10">
         <div className="flex flex-col items-center bg-slate-100 p-6 max-w-28 cursor-pointer rounded-xl hover:text-[#ff385c]" >
           <NavLink to="/category/real-estate" className="flex flex-col items-center">
            <IoHome size={27}/>
           <span className='font-medium'>Homes</span>
           </NavLink>
         </div>
         <div className="flex flex-col items-center bg-slate-100 p-6 w-28 rounded-xl cursor-pointer hover:text-[#ff385c]">
          <NavLink to="/category/cars" className="flex flex-col items-center">
           <TbCarSuv size={27}/>
           <span className='font-medium'>Cars</span>
          </NavLink>
         </div>
         <div className="flex flex-col items-center bg-slate-100 p-6 max-w-28 rounded-xl cursor-pointer hover:text-[#ff385c]">
           <NavLink to="/category/electronics" className="flex flex-col items-center">
           <CiMobile2 size={27}/>
           <span className='font-medium'>Electronics</span>
           </NavLink>
         </div>
         <div className="flex flex-col items-center bg-slate-100 p-6 max-w-28 rounded-xl cursor-pointer hover:text-[#ff385c]">
           <NavLink to="/category/hobbies" className="flex flex-col items-center">
           <FaRegGrinHearts size={27}/>
           <span className='font-medium'>Hobbies</span>
           </NavLink>
         </div>
        </div>
  )
}

export default HomeCategories