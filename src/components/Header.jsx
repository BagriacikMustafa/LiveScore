import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Header.css'; 
import LoginModal from "./LoginModal"; // LoginModal import edildi
import RegisterModal from "./RegisterModal"; // RegisterModal import edildi

const Header = () => {
  const navigate = useNavigate();
  const [isLoginOpen, setLoginOpen] = useState(false); 
  const [isRegisterOpen, setRegisterOpen] = useState(false); 

  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo kısmı */}
        <a href="#" className="flex items-center space-x-3">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            alt="LiveScore Logo"
            className="h-8"
          />
          <span className="text-2xl font-bold">LiveScore</span>
        </a>

        {/* Navbar Linkleri */}
        <nav className="hidden md:flex flex-col space-y-2">
          <div className="flex space-x-8">
            <a href="#" className="hover:text-blue-500">CANLI SONUÇLAR</a>
            <button
              className="hover:text-blue-500"
              onClick={() => navigate("/ai")} // "/ai" sayfasına yönlendirme
            >
              AI TAHMİN
            </button>
            <a href="#" className="hover:text-blue-500">HAKKIMIZDA</a>
          </div>
        </nav>

        {/* Giriş Yap / Kayıt Ol Butonları */}
        <div className="hidden md:flex space-x-4">
          {/* Giriş Yap Butonu */}
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => setLoginOpen(true)} // Giriş yap modal'ını aç
          >
            Giriş Yap
          </button>
          {/* Kayıt Ol Butonu */}
          <button
            className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600"
            onClick={() => setRegisterOpen(true)} // Kayıt ol modal'ını aç
          >
            Kayıt Ol
          </button>
        </div>
      </div>

      {/* Modal'lar */}
      {isLoginOpen && <LoginModal closeModal={() => setLoginOpen(false)} />}
      {isRegisterOpen && <RegisterModal closeModal={() => setRegisterOpen(false)} />}
    </header>
  );
};

export default Header;
