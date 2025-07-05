import React from "react";
import can20L from "../assets/can20L.jpg";
import bottle1L from "../assets/1L.png";
import bottle500ml from "../assets/500ml.png";
import bottle250ml from "../assets/250ml.png";
import sachet250ml from "../assets/sachet.png";
import "../styles/animations.css"; // Add if you want custom CSS

const products = [
  {
    id: 1,
    name: "20L Water Can",
    price: 40,
    image: can20L,
    desc: "Ideal for homes and offices. High-quality purified water."
  },
  {
    id: 2,
    name: "1L Bottles (12 pack)",
    price: 120,
    image: bottle1L,
    desc: "Pack of 12 bottles. Suitable for events and daily use."
  },
  {
    id: 3,
    name: "500ml Bottles (24 pack)",
    price: 150,
    image: bottle500ml,
    desc: "Pack of 24 bottles. Easy to carry and serve."
  },
  {
    id: 4,
    name: "250ml Bottles (35 pack)",
    price: 200,
    image: bottle250ml,
    desc: "35 bottles per case. Compact and affordable."
  },
  {
    id: 5,
    name: "250ml Sachets (80 pack)",
    price: 70,
    image: sachet250ml,
    desc: "80 sachets per bag. Best for schools, camps and events."
  }
];

const Products = () => {
  const handleBook = (product) => {
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    window.location.href = "/booking";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4 sm:px-12">
      <h1 className="text-5xl font-extrabold text-center bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent mb-14 animate-fade-in-up">
        💧 Our Premium Water Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12 place-items-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-3xl border-2 border-blue-200 p-6 w-72 shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-blue-400 hover:border-blue-500 animate-fade-in-up"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-44 mx-auto mb-4 object-contain transition-transform duration-500 hover:rotate-1 hover:scale-105"
            />
            <h3 className="text-2xl font-bold text-blue-700 mb-1">{product.name}</h3>
            <p className="text-gray-500 text-sm mb-2 italic">{product.desc}</p>
            <p className="text-lg font-semibold text-green-600 mb-4">₹{product.price}</p>
            <button
              onClick={() => handleBook(product)}
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-5 py-2 rounded-full hover:from-blue-600 hover:to-blue-900 transition shadow-md hover:shadow-lg"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
