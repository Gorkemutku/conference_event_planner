import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css';

const Navbar = () => {
  const cart = useSelector(state => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar_container">
        <Link to="/" className="navbar_logo">
          Paradise Nursery
        </Link>
        
        <ul className="navbar_menu">
          <li className="navbar_item">
            <Link to="/" className="navbar_link">Home</Link>
          </li>
          <li className="navbar_item">
            <Link to="/products" className="navbar_link">Plants</Link>
          </li>
          <li className="navbar_item">
            <Link to="/cart" className="navbar_link cart_link">
              🛒 Cart 
              {totalItems > 0 && <span className="cart_count">{totalItems}</span>}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
