import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    setError('');
  };

import { NavLink } from 'react-router-dom';

const SignIn = () => {
const [email, setEmail]=useState("")
const [password,setPassword]=useState("")

const handleSubmit=(e)=>{
e.preventDefault();
}
// slate-100

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email:</label>
            <input
              type="email"

              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-xl bg-gray-100"
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 rounded mt-1 bg-slate-100 "
              placeholder="Enter your email"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}

            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-xl bg-gray-100"
              placeholder="Enter your password"
              className="w-full p-2 border border-gray-300 rounded mt-1 bg-slate-100"
              placeholder="Enter your password"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
            />
          </div>
          <button type="submit" className="w-full bg-[#ff385c] text-white p-2 rounded hover:bg-[#fe4869]">
            Sign In
          </button>
        </form>
        <p className="mt-4 text-center">

          Don't have an account? <NavLink to='/user/auth/sign-up' className='text-[#ff385c]'>Sign Up</NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
