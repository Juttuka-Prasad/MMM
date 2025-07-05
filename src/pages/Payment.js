// ✅ src/pages/Payment.js
import React, { useEffect, useState } from "react";
import "../styles/animations.css";

const Payment = () => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const details = JSON.parse(localStorage.getItem("orderDetails"));
    if (details) setOrder(details);
  }, []);

  const handleConfirm = () => {
    window.location.href = "/success";
  };

  const handleCancel = () => {
    window.location.href = "/booking";
  };

  if (!order) return <div className="text-center py-20">Loading Payment...</div>;

  const total = order.price * order.quantity;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-100 py-12 px-6 animate-fade-in-up">
      <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-2xl p-8 border border-blue-300">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6 animate-bounce">
          💳 Payment Page
        </h2>

        <div className="mb-4 text-center">
          <img src={order.image} alt={order.name} className="h-32 mx-auto drop-shadow-md" />
          <h3 className="text-xl font-bold mt-2 text-blue-800">{order.name}</h3>
          <p className="text-gray-600 italic">Quantity: {order.quantity}</p>
          <p className="text-green-600 text-lg font-semibold">Total: ₹{total}</p>
        </div>

        <div className="mb-4 bg-blue-50 p-4 rounded-xl text-blue-800 border border-blue-200 shadow-inner">
          <h4 className="text-lg font-semibold mb-1">📍 Delivery Address:</h4>
          <p className="text-sm text-gray-700">{order.address}</p>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold text-blue-700 mb-2">🪙 Choose Payment Method:</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={handleConfirm}
              className="bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-3 rounded-xl shadow-md hover:shadow-xl transition-all hover:scale-105"
            >
              ✅ Pay on Delivery
            </button>
            <button
              onClick={handleConfirm}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-6 py-3 rounded-xl shadow-md hover:shadow-xl transition-all hover:scale-105"
            >
              💳 Pay via UPI
            </button>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={handleCancel}
            className="text-sm text-red-500 hover:underline mt-4"
          >
            ❌ Cancel & Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
