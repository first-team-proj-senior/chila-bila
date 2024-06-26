import React from 'react'
import { MdOutlineErrorOutline } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { NavLink } from 'react-router-dom';


const SignUpPop = (props) => {
  return (
    <div className="pop-up-container">

    <div className='flex flex-col items-center justify-center bg-neutral-700 w-96 h-64 p-2 rounded-lg' >
        
        <div className="pop-container flex items-center justify-center p-6 gap-2">
        <div className="error-icon">
            <MdOutlineErrorOutline size={60} color="#ff3d3d"/>
        </div>
        <div className="sign-up-msg flex flex-col p-1">
         <h1 className='font-bold text-3xl text-[#fff] p-1'>Ooops</h1>
         <h2 className='text-[#fff] text-sm'>You should Login first !</h2>
        </div>
        </div>
        <NavLink to='/user/auth/sign-in'>

        <div className="login-btn">
            <span onClick={()=>{props.allowed(true)}} className="bg-[#ff3d3d] text-[#fff] p-2 rounded-lg">Login</span>
        </div>
        </NavLink>
    </div>
    </div>
  )
}

export default SignUpPop