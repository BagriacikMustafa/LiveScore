import React from "react";
import { useNavigate } from "react-router-dom";

const LoginModal = ({ closeModal }) => {
  const navigate = useNavigate();

  // Close modal and navigate to homepage
  const handleCloseModal = () => {
    closeModal();
    navigate("/");  // Redirect to homepage
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md relative"> {/* Added relative class here */}
        <button
          onClick={handleCloseModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl" // Ensure it's larger and clear
        >
          &times;
        </button>
        <h1 className="text-2xl font-bold mb-4 text-center">Giriş Yap</h1>
        <input
          type="text"
          placeholder="Kullanıcı Adı"
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          placeholder="Şifre"
          className="w-full p-2 mb-4 border rounded"
        />
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Giriş Yap
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
