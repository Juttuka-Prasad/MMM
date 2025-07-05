import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import founderImage from "../assets/founder.png";
import "../styles/animations.css";

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const info = JSON.parse(localStorage.getItem("userInfo"));
    if (info) setUser(info);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 text-blue-800">
      {/* 🔝 Navbar */}
      <nav className="flex justify-between items-center px-4 py-3 bg-gradient-to-r from-blue-700 to-blue-900 text-white shadow-md sticky top-0 z-10 animate-fade-in-down">
        <h1 className="text-3xl font-extrabold tracking-wide animate-logo-glow">
          💧 Munendra Muni
        </h1>
        <div className="space-x-6 text-lg font-semibold">
          <Link to="/" className="hover:text-yellow-300 transition-all">Home</Link>
          <Link to="/products" className="hover:text-yellow-300 transition-all">Products</Link>
          <Link to="/profile" className="hover:text-yellow-300 transition-all">Profile</Link>
        </div>
      </nav>

      {/* 🎉 Welcome Message */}
      <header className="text-center py-14 px-4">
        <h2 className="text-4xl font-bold mb-2 animate-fade-in-up text-blue-900">
          Welcome to Munendra Muni Packaged Drinking Water 💦
        </h2>
        {user && (
          <p className="text-lg text-blue-700 mt-2 animate-fade-in-up">
            Hello <strong>{user.name}</strong>! Ready to book your water delivery?
          </p>
        )}
        <Link
          to="/products"
          className="inline-block mt-8 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-900 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all animate-bounce"
        >
          🚚 Order Now
        </Link>
      </header>

      {/* 👤 Founder Section */}
      <section className="flex flex-col md:flex-row justify-center items-center gap-10 px-6 py-10 animate-fade-in-up">
        <img
          src={founderImage}
          alt="Founder"
          className="w-72 h-72 object-cover rounded-3xl border-4 border-blue-400 shadow-xl hover:rotate-1 hover:scale-105 transition-all"
        />
        <div className="max-w-lg text-center md:text-left">
          <h3 className="text-2xl font-bold mb-2">About Our Founder</h3>
          <p className="text-gray-700 text-lg">
            మునేంద్ర ముని గారు ప్రతి ఇంటికి స్వచ్ఛమైన తాగునీటిని అందించే లక్ష్యంతో ఈ సంస్థను స్థాపించారు.
            ఆరోగ్యకరమైన నీటిని అందించడమే మా లక్ష్యం.
          </p>
        </div>
      </section>

      {/* 📞 Footer */}
      <footer className="bg-blue-800 text-white mt-20 py-6 text-center">
        <p className="text-lg font-semibold">Munendra Muni Packaged Drinking Water</p>
        <p className="text-sm">📍 Main Road, YourCity, Andhra Pradesh, India</p>
        <p className="text-sm">📞 +91 88970 88984 | ✉️ support@munendrawater.com</p>
        <p className="text-sm mt-1">🕐 Open: Mon-Sat, 9AM - 8PM</p>
      </footer>
    </div>
  );
};

export default Home;
