import React, { useState } from 'react';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
      console.log("gfh,gvhbn")
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError('');
    
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-medium text-center mb-4">Sign Up</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
            type="submit"
            className="bg-[#ff385c] text-white p-2 rounded-xl hover:bg-[#fe4869] "
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;