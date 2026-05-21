import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProfileScreen() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col flex-1">
      <div className="bg-white border-b border-gray-100 px-5 py-4">
        <h2 className="text-sm font-semibold text-gray-800">
          Account Settings
        </h2>
      </div>

      <div className="p-5 flex-1 bg-[#F9F9F9]">
        <div className="flex items-start space-x-4 pb-6 border-b border-dashed border-gray-200">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200"
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <button className="absolute bottom-0 right-0 bg-[#6C25FF] p-1 rounded-full text-white shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <circle
                  cx="12"
                  cy="13"
                  r="3"
                  stroke="currentColor"
                  strokeWidth={2.5}
                />
              </svg>
            </button>
          </div>

          <div className="pt-1">
            <h3 className="text-sm font-bold text-gray-900 leading-tight">
              Marry Doe
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">Marry@Gmail.Com</p>
          </div>
        </div>

        <p className="text-xs text-gray-600 leading-relaxed pt-5">
          Lorem Ipsum Dolor Sit Amer, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>

        <button
          onClick={() => navigate('/')}
          className="mt-12 text-xs text-[#6C25FF] font-medium underline block mx-auto cursor-pointer"
        >
          Back to Start screen
        </button>
      </div>
    </div>
  );
}
