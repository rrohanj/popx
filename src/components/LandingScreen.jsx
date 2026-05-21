import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LandingScreen() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col justify-between">
      <div className="relative flex-1 bg-white px-5 pt-12 flex flex-col justify-end pb-8">
        <h1 className="text-2xl font-black text-gray-900 tracking-tight mb-2">
          Welcome to PopX
        </h1>
        <p className="text-sm text-gray-400 leading-relaxed max-w-[260px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>

      <div className="px-5 pb-10 space-y-3">
        <button
          onClick={() => navigate('/signup')}
          className="w-full py-3 bg-[#6C25FF] text-white font-medium rounded-md shadow-md active:bg-[#581cd1] transition-colors text-sm cursor-pointer"
        >
          Create Account
        </button>
        <button
          onClick={() => navigate('/login')}
          className="w-full py-3 bg-[#6C25FF]/20 text-[#1D2226] font-semibold rounded-md active:bg-[#6C25FF]/30 transition-colors text-sm cursor-pointer"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}
