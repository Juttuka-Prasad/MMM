import React, { useState, useEffect } from "react";
import "../styles/animations.css";

const Booking = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const selected = JSON.parse(localStorage.getItem("selectedProduct"));
    if (selected) setProduct(selected);
  }, []);

  const handleBook = () => {
    if (!address.trim() || !name.trim() || !phone.trim() || !date || !time) {
      alert("Please fill in all details.");
      return;
    }

    const orderDetails = {
      ...product,
      quantity,
      name,
      phone,
      address,
      date,
      time,
    };

    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
    localStorage.removeItem("messageSent"); // ✅ Important: clear old WhatsApp flag
    window.location.href = "/payment";
  };

  const handleCancel = () => {
    localStorage.removeItem("selectedProduct");
    window.location.href = "/products";
  };

  if (!product) return <div className="text-center py-20">Loading product...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-6 animate-fade-in">
      <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-2xl p-8 border border-blue-300 animate-fade-in-up">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-6">
          📝 Book Your Order
        </h2>

        <div className="text-center mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="h-32 mx-auto object-contain drop-shadow-lg"
          />
          <h3 className="text-xl font-semibold mt-2 text-blue-800">{product.name}</h3>
          <p className="text-green-600 text-md font-semibold">
            Price: ₹{product.price}
          </p>
        </div>

        {/* 🔽 Booking Inputs */}
        <div className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="w-full border px-4 py-2 rounded-md"
          />

          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
            className="w-full border px-4 py-2 rounded-md"
          />

          <textarea
            rows="3"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Full Delivery Address"
            className="w-full border px-4 py-2 rounded-md"
          ></textarea>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border px-4 py-2 rounded-md"
          />

          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full border px-4 py-2 rounded-md"
          />

          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Quantity"
            className="w-full border px-4 py-2 rounded-md"
          />
        </div>

        {/* 🔘 Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={handleCancel}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-full font-semibold"
          >
            ❌ Cancel
          </button>
          <button
            onClick={handleBook}
            className="bg-blue-600 hover:bg-blue-800 text-white px-6 py-2 rounded-full font-semibold shadow-md"
          >
            ✅ Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
