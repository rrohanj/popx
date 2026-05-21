import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/profile');
  };

  return (
    <div className="p-5 pt-10 flex-1">
      <h1 className="text-2xl font-bold text-gray-900 leading-tight mb-2">
        Signin to your
        <br />
        PopX account
      </h1>
      <p className="text-sm text-gray-400 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative border border-gray-300 rounded-md px-3 py-1.5 focus-within:border-[#6C25FF]">
          <label className="absolute -top-2.5 left-2.5 bg-white px-1 text-xs text-[#6C25FF] font-medium">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full text-xs text-gray-800 placeholder-gray-400 focus:outline-none pt-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="relative border border-gray-300 rounded-md px-3 py-1.5 focus-within:border-[#6C25FF]">
          <label className="absolute -top-2.5 left-2.5 bg-white px-1 text-xs text-[#6C25FF] font-medium">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full text-xs text-gray-800 placeholder-gray-400 focus:outline-none pt-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-[#CBCBCB] text-white font-medium rounded-md text-sm mt-4 hover:bg-[#6C25FF] transition-colors cursor-pointer"
        >
          Login
        </button>
      </form>
    </div>
  );
}
