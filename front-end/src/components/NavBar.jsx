import React, { Profiler, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../image/logo.png';
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import profilImag from '../image/profile.png' 

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMenu,setUserMenu]=useState(false)
  return (
    <div className='top-nav-bar'>
      <nav>
        <div className="flex items-center">
          <div className="block p-2.5 ml-8">
            <NavLink to="/">
              <img src={Logo} alt="Logo" />
            </NavLink>
          </div>
          <div className="flex items-center ml-12 bg-[#ff385c] p-2.5 rounded-xl cursor-pointer hover:bg-[#fe4869]">
            <NavLink to="/add-announcement" className="flex">
              <IoMdAddCircleOutline size={23} className='text-[#fff]' />
              <span className='text-[#fff] ml-2'> Add Announcement</span>
            </NavLink>
          </div>
          <div className="flex items-center ml-20">
            <input className='p-2 flex outline-none bg-slate-100 rounded-xl placeholder:text-sm' type="search" placeholder='Search in Chila Bila' />
            <IoSearchOutline id='search-icon' size={32} className='absolute flex ml-44 rounded-xl cursor-pointer bg-[#ff385c] p-1 text-[#fff]' />
          </div>
          <div className="flex items-center ml-20 cursor-pointer">
            <span onClick={() => setIsOpen(!isOpen)}>Categories ▼</span>
          </div>
          {isOpen && <div className="drop-down">
            <ul className='flex flex-col gap-3'>
              <li onClick={() => setIsOpen(!isOpen)} className='hover:bg-[#ff385c] rounded-xl p-1 hover:text-[#fff]'>
                <NavLink to="/category/real-estate" className="p-4">Real estate</NavLink>
              </li>
              <li onClick={() => setIsOpen(!isOpen)} className='hover:bg-[#ff385c] rounded-xl p-1 hover:text-[#fff]'>
                <NavLink to="/category/cars" className="p-4">Cars</NavLink>
              </li>
              <li onClick={() => setIsOpen(!isOpen)} className='hover:bg-[#ff385c] rounded-xl p-1 hover:text-[#fff]'>
                <NavLink to="/category/electronics" className="p-4">Electronics</NavLink>
              </li>
              <li onClick={() => setIsOpen(!isOpen)} className='hover:bg-[#ff385c] rounded-xl p-1 hover:text-[#fff]'>
                <NavLink to="/category/hobbies" className="p-4">Hobbies</NavLink>
              </li>
            </ul>
          </div>}
          {!props.userAccount && <div className="flex items-center ml-28">
            <NavLink to="/user/auth/sign-in">
              <span className='bg-[#ff385c] p-2.5 rounded-xl cursor-pointer text-[#fff] hover:bg-[#fe4869]'>Sign In/Sign Up</span>
            </NavLink>
          </div>}
          {props.userAccount && <div onClick={()=>setUserMenu(!userMenu)} className='user-profile flex items-center ml-14 gap-2 cursor-pointer'>
            <img src={profilImag} className='h-12'></img>
            {props.user.map((elem)=>{
              return (
                
                <h5> {elem.username}  ▼ </h5>
              )
            })}
            {userMenu && <div className="profil-menu absolute mt-2.5">
              <ul className='flex flex-col gap-3 mt-44 bg-white p-4 shadow-md rounded-lg'>
                <li className='hover:bg-[#ff385c] rounded-xl p-1 hover:text-[#fff]'>📁 My Annoucement</li>
                <li onClick={()=>props.SetUserAccount(false)} className='hover:bg-[#ff385c] rounded-xl p-1 hover:text-[#fff]'>↩️ Logout</li>
              </ul>
            </div> }
            
          </div> }
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
