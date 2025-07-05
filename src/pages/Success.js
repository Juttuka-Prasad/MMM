import React, { useEffect, useState } from "react";

const Success = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const sent = localStorage.getItem("messageSent");
    if (sent === "true") return;

    const order = JSON.parse(localStorage.getItem("orderDetails"));
    const user = JSON.parse(localStorage.getItem("userInfo"));
    setOrderDetails(order);
    setUserInfo(user);

    if (order && user) {
      const message = `✅ *New Order Placed!*\n\n📦 *Product*: ${order.name}\n🔢 *Quantity*: ${order.quantity}\n💰 *Total*: ₹${order.price * order.quantity}\n\n👤 *Name*: ${user.name}\n📱 *Phone*: ${user.phone}\n🏠 *Address*: ${user.address}`;

      fetch("http://localhost:5000/send-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Message sent:", data);
          localStorage.setItem("messageSent", "true"); // ✅ Mark as sent
          setTimeout(() => localStorage.removeItem("messageSent"), 10000); // Optional: remove after 10 sec
        })
        .catch((err) => console.error("Error:", err));
    }
  }, []);

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center text-center px-6">
      <h2 className="text-3xl font-bold text-green-700 mb-3">✅ Order Placed Successfully!</h2>
      <p className="text-gray-700 mb-6">
        Thank you for booking. Admin received your order via WhatsApp.
      </p>

      {orderDetails && userInfo && (
        <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md text-left space-y-2 border border-green-300">
          <h3 className="text-xl font-semibold text-green-800 mb-2">📄 Order Summary</h3>
          <p>🧊 <strong>Product:</strong> {orderDetails.name}</p>
          <p>🔢 <strong>Quantity:</strong> {orderDetails.quantity}</p>
          <p>💰 <strong>Total:</strong> ₹{orderDetails.price * orderDetails.quantity}</p>
          <p>👤 <strong>Name:</strong> {userInfo.name}</p>
          <p>📱 <strong>Phone:</strong> {userInfo.phone}</p>
          <p>🏠 <strong>Address:</strong> {userInfo.address}</p>
        </div>
      )}

      <a
        href="/"
        className="mt-6 inline-block bg-blue-600 hover:bg-blue-800 text-white px-6 py-2 rounded-full shadow-lg transition"
      >
        🏠 Go to Home
      </a>
    </div>
  );
};

export default Success;
