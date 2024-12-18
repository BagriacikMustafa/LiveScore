import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // React Router import
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import ApiDisplay from './components/ApiDisplay';  // LiveScores bileşeni
import './App.css';

const App = () => {
  return (
    <Router>  {/* Router bileşenini burada sarıyoruz */}
      <div className="app">
        <Header />  {/* Header bileşeni burada yönlendirme için kullanılabilir */}
        <div className="main-content flex">
          <Sidebar />
          <div className="middle">
            <ApiDisplay /> {/* Canlı skorlar burada görünecek */}
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
