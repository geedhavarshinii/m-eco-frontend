import React, { useState } from "react";
import "./login.css";
import Logo from "../img/logo.png";
import userIcon from "../img/user-icon.png";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  return (
    <div>
      <header className="flex justify-between items-center p-4 bg-white shadow">
        <div className="logo">
          <img src={Logo} alt="Meco Logo" className="h-10" />
        </div>
        <nav className="flex space-x-6 ml-auto">
          <a href="#" className="text-sm font-semibold text-gray-700">
            Home
          </a>
          <a href="#" className="text-sm font-semibold text-gray-700">
            About Us
          </a>
          <a href="#" className="text-sm font-semibold text-gray-700">
            FAQ
          </a>
          <div className="relative">
            <button
              id="services-button"
              className="text-sm font-semibold text-gray-700 flex items-center"
              onMouseEnter={() => setDropdownVisible(true)}
              onMouseLeave={() => setDropdownVisible(false)}
            >
              Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {dropdownVisible && (
              <div
                id="services-dropdown"
                className="absolute bg-white shadow-lg rounded mt-1"
                onMouseEnter={() => setDropdownVisible(true)}
                onMouseLeave={() => setDropdownVisible(false)}
              >
                <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                  Thrift Clothes
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                  Rent Clothes
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                  Green Rewards Profile
                </a>
              </div>
            )}
          </div>
        </nav>
        <div className="user-icon ml-4">
          <img src={userIcon} alt="User Icon" className="h-8" />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
