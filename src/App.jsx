import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

function HomePage() {
  return (
    <div className="home_page">
      <div className="home_background"></div>
      
      <div className="home_content">
        <div className="home_hero">
          <h1 className="home_title">🌺 Paradise Nursery</h1>
          <p className="home_subtitle">Bring Nature Home</p>
          
          <AboutUs />
          
          <a href="/products" className="get_started_btn">
            Get Started →
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
