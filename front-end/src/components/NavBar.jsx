import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../image/logo.png'
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";


const NavBar = () => {
    const [isOpen,setIsOpen]=useState(false)
  return (
    <div className='top-nav-bar'>
        <nav>
            <div className="flex items-center ">
                <div className="block p-2.5 ml-8">
                    <NavLink to="/">
                    <img src={Logo}></img>
                    </NavLink>
                </div>
                <div className="flex items-center ml-12  bg-[#ff385c] p-2.5 rounded-xl cursor-pointer hover:bg-[#fe4869]">
                <NavLink to="/add-annoucement" className="flex">
                 <IoMdAddCircleOutline size={23} className='text-[#fff]'/>
                 <span className='text-[#fff] ml-2'> Add Annoucement</span>
                </NavLink>
                </div>
                <div className="flex items-center ml-20">
                <input className='p-2 flex outline-none bg-slate-100 rounded-xl placeholder:text-sm ' type="search" placeholder='Search in Chila Bila'  />
                <IoSearchOutline id='search-icon' size={32} className='absolute flex ml-44 rounded-xl cursor-pointer bg-[#ff385c] p-1 text-[#fff]'/>
                </div>
                <div className="flex items-center ml-20 cursor-pointer">
                    <span onClick={()=>setIsOpen(!isOpen)}>Categories ▼</span>
                </div>
                {isOpen && <div className="drop-down" >
                    <ul className='flex flex-col gap-3'>
                        <li onClick={()=>setIsOpen(!isOpen)} className='hover:bg-[#ff385c]  rounded-xl p-1 hover:text-[#fff]'>
                            <NavLink to="/category/real-estate" className="p-4">
                            Real estate
                            </NavLink>
                        </li>
                        <li onClick={()=>setIsOpen(!isOpen)} className='hover:bg-[#ff385c]  rounded-xl p-1 hover:text-[#fff]'>
                            <NavLink to="/category/cars" className="p-4">
                            Cars
                            </NavLink>
                        </li>
                        <li onClick={()=>setIsOpen(!isOpen)} className='hover:bg-[#ff385c]  rounded-xl p-1 hover:text-[#fff]'>
                            <NavLink to="/category/electronics" className="p-4">
                            Electonics
                            </NavLink>
                        </li>
                        <li onClick={()=>setIsOpen(!isOpen)} className='hover:bg-[#ff385c]  rounded-xl p-1 hover:text-[#fff]'>
                            <NavLink to="/category/hobbies" className="p-4">
                            Hobbies
                            </NavLink>
                        </li>
                    </ul>
                </div> }
                
                <div className="flex items-center ml-28">
                    <NavLink to="/user/auth" className="">
                    <span className='bg-[#ff385c] p-2.5 rounded-xl cursor-pointer text-[#fff] hover:bg-[#fe4869]"'>Sign In/Sign Up</span>
                    </NavLink>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar