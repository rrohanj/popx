import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignupScreen() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: 'Marry Doe',
    phone: 'Marry Doe',
    email: 'Marry Doe',
    password: 'Marry Doe',
    company: 'Marry Doe',
    isAgency: 'yes',
  });

  const fields = [
    { label: 'Full Name', key: 'fullName', type: 'text', required: true },
    { label: 'Phone number', key: 'phone', type: 'text', required: true },
    { label: 'Email address', key: 'email', type: 'email', required: true },
    { label: 'Password', key: 'password', type: 'password', required: true },
    { label: 'Company name', key: 'company', type: 'text', required: false },
  ];

  return (
    <div className="p-5 pt-8 flex-1 flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 leading-tight mb-6">
          Create your
          <br />
          PopX account
        </h1>

        <div className="space-y-5">
          {fields.map((field) => (
            <div
              key={field.key}
              className={`relative border rounded-md px-3 py-1.5 ${
                field.key === 'fullName'
                  ? 'border-[#6C25FF]'
                  : 'border-gray-300'
              }`}
            >
              <label
                className={`absolute -top-2.5 left-2.5 bg-white px-1 text-xs font-medium ${
                  field.key === 'fullName' ? 'text-[#6C25FF]' : 'text-gray-500'
                }`}
              >
                {field.label}
                {field.required && <span className="text-red-500">*</span>}
              </label>
              <input
                type={field.type}
                className="w-full text-xs text-gray-800 focus:outline-none pt-1"
                value={formData[field.key]}
                onChange={(e) =>
                  setFormData({ ...formData, [field.key]: e.target.value })
                }
              />
            </div>
          ))}

          <div className="pt-2">
            <label className="block text-xs font-medium text-gray-700 mb-2">
              Are you an Agency?<span className="text-red-500">*</span>
            </label>
            <div className="flex items-center space-x-4">
              {['yes', 'no'].map((option) => (
                <label
                  key={option}
                  className="flex items-center space-x-2 text-xs capitalize cursor-pointer"
                >
                  <input
                    type="radio"
                    name="agency"
                    value={option}
                    checked={formData.isAgency === option}
                    onChange={() =>
                      setFormData({ ...formData, isAgency: option })
                    }
                    className="accent-[#6C25FF] h-3.5 w-3.5"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => navigate('/profile')}
        className="w-full py-3 bg-[#6C25FF] text-white font-medium rounded-md text-sm mt-8 shadow-md active:bg-[#581cd1] cursor-pointer"
      >
        Create Account
      </button>
    </div>
  );
}
