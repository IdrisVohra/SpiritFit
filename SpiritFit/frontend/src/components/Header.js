// components/Header/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiShoppingBag, FiUser, FiMenu, FiX } from 'react-icons/fi';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = [
    { name: 'New In', path: '/new-in' },
    { name: 'Clothing', path: '/clothing' },
    { name: 'Footwear', path: '/footwear' },
    { name: 'Accessories', path: '/accessories' },
    { name: 'Brands', path: '/brands' },
    { name: 'Sale', path: '/sale' }
  ];

  return (
    <header className="header">
      <div className="top-bar">
        <div className="container">
          <p>Free shipping on orders over £50</p>
        </div>
      </div>

      <div className="main-header">
        <div className="container">
          <div className="header-inner">
            <button 
              className="mobile-menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            <Link to="/" className="logo">
              URBAN MONKEY
            </Link>

            <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
              <ul>
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="header-actions">
              <button 
                className="search-btn"
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <FiSearch size={20} />
              </button>
              <Link to="/account" className="account-btn">
                <FiUser size={20} />
              </Link>
              <Link to="/cart" className="cart-btn">
                <FiShoppingBag size={20} />
                <span className="cart-count">0</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {searchOpen && (
        <div className="search-bar">
          <div className="container">
            <div className="search-container">
              <input 
                type="text" 
                placeholder="Search for products..." 
                autoFocus
              />
              <button className="close-search" onClick={() => setSearchOpen(false)}>
                <FiX size={24} />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;