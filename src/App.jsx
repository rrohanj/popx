import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingScreen from './components/LandingScreen';
import LoginScreen from './components/LoginScreen';
import SignupScreen from './components/SignupScreen';
import ProfileScreen from './components/ProfileScreen';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 py-10 flex justify-center items-center">
        {/* Centered Pixel-Perfect Mobile Frame */}
        <div className="w-full max-w-[375px] min-h-[667px] bg-white border border-gray-200 mx-auto shadow-lg flex flex-col font-sans text-gray-800 relative overflow-hidden rounded-xl">
          <Routes>
            <Route path="/" element={<LandingScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/signup" element={<SignupScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
