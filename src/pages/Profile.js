// ✅ src/pages/Profile.js
import React, { useState, useEffect } from "react";

const Profile = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState(null);

  // Load existing data
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("userProfile"));
    if (saved) {
      setName(saved.name || "");
      setPhone(saved.phone || "");
      setImage(saved.image || null);
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) reader.readAsDataURL(file);
  };

  const handleSave = () => {
    const user = { name, phone, image };
    localStorage.setItem("userProfile", JSON.stringify(user));
    alert("✅ Profile saved successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 py-10 px-4">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">👤 Customer Profile</h2>

      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md space-y-4">
        <div className="text-center">
          {image ? (
            <img
              src={image}
              alt="Profile"
              className="w-24 h-24 mx-auto rounded-full border-4 border-blue-300 object-cover"
            />
          ) : (
            <div className="w-24 h-24 mx-auto rounded-full bg-blue-100 border-4 border-blue-300"></div>
          )}
          <input type="file" accept="image/*" onChange={handleImageChange} className="mt-2" />
        </div>

        <div>
          <label className="block text-blue-700 font-semibold">Name</label>
          <input
            type="text"
            className="w-full border border-blue-300 px-4 py-2 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-blue-700 font-semibold">Phone Number</label>
          <input
            type="text"
            className="w-full border border-blue-300 px-4 py-2 rounded-md"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <button
          onClick={handleSave}
          className="w-full bg-blue-600 text-white py-2 rounded-full font-semibold hover:bg-blue-800 transition-all"
        >
          💾 Save Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
