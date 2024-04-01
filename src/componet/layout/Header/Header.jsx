import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="header-container">
        <a href="#" className="logo">
          Logo
        </a>
        <div className="menu-toggle">
          <button id="nav-toggle">
            <svg className="hamburger" viewBox="0 0 24 24">
              <path
                d="M4 6h16M4 12h16m-7 6h7"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="menu-items">
          <a href="#" className="menu-item">
            Products
          </a>
          <a href="#" className="menu-item">
            Contact
          </a>
          <a href="#" className="menu-item">
            Meow
          </a>

          <div className="search-box">
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
            />
            <button className="search-button">
              <svg className="search-icon" viewBox="0 0 24 24">
                <path
                  d="M21.71 20.29l-5.71-5.71A7.85 7.85 0 0019 10a8 8 0 10-8 8 7.85 7.85 0 004.58-1.5l5.71 5.71a1 1 0 101.42-1.42zM4 10a6 6 0 116 6 6 6 0 01-6-6z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
