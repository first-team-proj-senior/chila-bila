import React, { useState } from 'react';
import succIcon from '../../image/succ.gif'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success,setSuccess]=useState(false)
 

  const user ={
    username: name,
    email: email,
    password: password
  }

  const addUser = (userAdded)=>{
    axios.post('http://127.0.0.1:3000/api/users', userAdded)
    .then((results)=>console.log(results.data))
    .catch((err)=>console.log(err))
  }
  const handelSucc =()=>{
    if(name.length&&email.length&&password.length&&confirmPassword.length&&password===confirmPassword){
      setSuccess(true)
    }
  }
  
  const handleSubmit = () => {
    if(!name&&!email&&!password){
      setError('Please fill all the fields')
      return;
    }
    else if(!name){
      setError('Please enter your username')
      return;
    }
    else if(!email){
      setError('Please enter your email')
      return;
    }
   else if(!password){
      setError('Please enter your password')
      return;
    }
   else if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError('');
    
  };

  return (
    <>
    {!success && (<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-medium text-center mb-4">Sign Up</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Username</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 border border-gray-300 rounded-xl outline-none bg-slate-100"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border border-gray-300 rounded-xl outline-none bg-slate-100"
              placeholder="Enter your email"
            />

          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 border border-gray-300 rounded-xl outline-none bg-slate-100"
              placeholder="Enter your password"
            />

          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="p-2 border border-gray-300 rounded-xl outline-none bg-slate-100"
              placeholder="Confirm your password"
            />
          </div>
          <button
            className="bg-[#ff385c] text-white p-2 rounded-xl hover:bg-[#fe4869] "
            onClick={()=> {
             handleSubmit()
             handelSucc()
             addUser(user)
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
      {}
    </div>) }
     {success && <div className="succ-pop-up  bg-gray-100 flex items-center justify-center ">
      <div className="succ-pop-up-inner flex flex-col items-center justify-center w-max shadow-md	p-5 m-10 rounded-xl bg-[#fff] ">
       <img src={succIcon} width={120} />
       <h2 className="text-center text-2xl font-bold text-[#16c72e] p-1">Account Created Successfully</h2>
       <p className="text-center p-1">We are working hard to find the best service and deals for you</p>
       <p className="text-center p-1">You can now login to your account</p>
       <NavLink to='/user/auth/sign-in ' className='mt-6 p-4'>
       <span className='bg-[#16c72e] p-4 mt-6 text-[#fff] rounded-xl cursor-pointer'>Continue</span>
       </NavLink>
      </div>
     </div>}
    </>
  );
};

export default SignUp;