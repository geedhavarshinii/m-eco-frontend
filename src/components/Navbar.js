import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import Logo from "../img/logo.png";
import userIcon from "../img/user-icon.png";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [userDropdownVisible, setUserDropdownVisible] = useState(false);

  const services = [
    { label: "Thrift It", link: "/thriftithome" },
    { label: "Rent It", link: "/rentithome" },
    { label: "Green Rewards Profile", link: "/greenrewards" },
    { label: "Donate It", link: "/donateit" },
  ];

  const userOptions = [
    { label: "User", link: "#" },
    { label: "Log out", link: "/login" }
  ];

  return (
    <div>
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="flex justify-between items-center container mx-auto">
          <div className="logo">
            <img src={Logo} alt="Meco Logo" className="h-10" />
          </div>
          <nav className="flex flex-grow justify-end space-x-4">
            <Link to="/dashboard" className="text-base font-semibold text-gray-700 hover:text-pinkone px-2">
              Home
            </Link>
            <Link to="/dashboard" className="text-base font-semibold text-gray-700 hover:text-pinkone px-2">
              About Us
            </Link>
            <Link to="/dashboard" className="text-base font-semibold text-gray-700 hover:text-pinkone px-2">
              FAQ
            </Link>
            <div className="relative">
              <button
                id="services-button"
                className="text-base font-semibold text-gray-700 flex items-center hover:text-pinkone px-2"
                onMouseEnter={() => setDropdownVisible(true)}
                onMouseLeave={() => setDropdownVisible(false)}
              >
                Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ml-1 transition-transform ${dropdownVisible ? 'transform rotate-180' : ''}`}
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
              <div
                id="services-dropdown"
                className={`absolute bg-white shadow-lg rounded mt-1 w-48 max-w-xs transition-all duration-500 transform ${dropdownVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
                onMouseEnter={() => setDropdownVisible(true)}
                onMouseLeave={() => setDropdownVisible(false)}
                style={{ right: '0', left: 'auto' }} // Adjust the dropdown position to the left
              >
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.link}
                    className={`block px-4 py-2 text-base ${hoveredItem === index ? 'text-pinkone' : 'text-gray-700'}`}
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
          <div className="relative ml-4">
            <img 
              src={userIcon} 
              alt="User Icon" 
              className="h-12 cursor-pointer" 
              onMouseEnter={() => setUserDropdownVisible(true)}
              onMouseLeave={() => setUserDropdownVisible(false)}
            />
            <div
              className={`absolute right-0 mt-1 bg-white shadow-lg rounded w-40 transition-all duration-500 transform ${userDropdownVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
              onMouseEnter={() => setUserDropdownVisible(true)}
              onMouseLeave={() => setUserDropdownVisible(false)}
            >
              {userOptions.map((option, index) => (
                <Link
                  key={index}
                  to={option.link}
                  className="block px-4 py-2 text-base text-gray-700 hover:text-pinkone"
                >
                  {option.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;





