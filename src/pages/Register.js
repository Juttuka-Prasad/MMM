import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/animations.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (username && phone) {
      localStorage.setItem('user', JSON.stringify({ username, phone }));
      navigate('/home');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-yellow-50 to-blue-200 px-4">
      <img src={logo} alt="Company Logo" className="w-28 mb-6 animate-fade-in-up" />

      <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 animated-text">
  {"Welcome ".split("").map((char, i) => (
    <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>{char}</span>
  ))}
</h1>

      <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md animate-zoom-in">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">Customer Registration</h2>

        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter your name"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="tel"
            placeholder="Enter mobile number"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 text-white font-semibold py-2 rounded-lg hover:opacity-90 transition duration-300 shadow-md"
          >
            ✨ Get Started
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
