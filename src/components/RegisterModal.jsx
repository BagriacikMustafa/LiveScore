import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterModal = ({ closeModal }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Close modal and navigate to homepage
  const handleCloseModal = () => {
    closeModal();
    navigate("/");  // Redirect to homepage
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md relative">
        {/* Close Button */}
        <button
          onClick={handleCloseModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>
        <h1 className="text-2xl font-bold mb-4 text-center">Kayıt Ol</h1>

        {/* Form Fields */}
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Ad"
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Soyad"
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="E-posta"
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Şifre"
          className="w-full p-2 mb-4 border rounded"
        />

        {/* Submit Button */}
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Kayıt Ol
        </button>
      </div>
    </div>
  );
};

export default RegisterModal;
