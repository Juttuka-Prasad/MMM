import React, { useEffect, useState } from 'react';
import { db } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const querySnapshot = await getDocs(collection(db, "orders"));
      const data = querySnapshot.docs.map(doc => doc.data());
      setOrders(data);
    };
    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">Admin Dashboard</h2>
      {orders.length === 0 ? (
        <p className="text-center text-gray-500">No orders received yet.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order, index) => (
            <div key={index} className="bg-white p-4 rounded shadow max-w-xl mx-auto">
              <p><strong>Product:</strong> {order.product}</p>
              <p><strong>Quantity:</strong> {order.quantity}</p>
              <p><strong>Payment:</strong> {order.payment}</p>
              <p><strong>Status:</strong> {order.status}</p>
              <p><strong>Total:</strong> ₹{order.total}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
