import React, { useState } from 'react';
import './login.css';
import Logo from '../img/logo.png';
import userIcon from '../img/user-icon.png';

const Login = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    return (
        <div className="bg-pink-100 min-h-screen">
            <header className="flex justify-between items-center p-4 bg-white shadow">
                <div className="logo">
                    <img src={Logo} alt="Meco Logo" className="h-10" />
                </div>
                <nav className="flex space-x-6 ml-auto">
                    <a href="#" className="text-sm font-semibold text-gray-700">Home</a>
                    <a href="#" className="text-sm font-semibold text-gray-700">About Us</a>
                    <a href="#" className="text-sm font-semibold text-gray-700">FAQ</a>
                    <div className="relative">
                        <button
                            id="services-button"
                            className="text-sm font-semibold text-gray-700 flex items-center"
                            onMouseEnter={() => setDropdownVisible(true)}
                            onMouseLeave={() => setDropdownVisible(false)}
                        >
                            Services
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z" clipRule="evenodd" />
                            </svg>
                        </button>
                        {dropdownVisible && (
                            <div
                                id="services-dropdown"
                                className="absolute bg-white shadow-lg rounded mt-1"
                                onMouseEnter={() => setDropdownVisible(true)}
                                onMouseLeave={() => setDropdownVisible(false)}
                            >
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700">Thrift Clothes</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700">Rent Clothes</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700">Green Rewards Profile</a>
                            </div>
                        )}
                    </div>
                </nav>
                <div className="user-icon ml-4">
                    <img src={userIcon} alt="User Icon" className="h-8" />
                </div>
            </header>
            <main className="flex flex-col items-center justify-center min-h-screen py-12">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
                    <h3 className="text-lg font-semibold mb-4 text-center">Login or Signup</h3>
                    <form id="login-form" className="space-y-4">
                        <label htmlFor="mobile-number" className="hidden">Mobile Number</label>
                        <input type="text" id="mobile-number" name="mobile-number" placeholder="+91 | Mobile Number" className="w-full p-2 border border-gray-300 rounded" />
                        <button type="submit" className="w-full bg-pink-500 text-white p-2 rounded hover:bg-pink-600">Continue</button>
                        <p className="text-xs text-gray-500 text-center">
                            By continuing, I agree to the <a href="#" className="text-pink-500">Terms of Use</a> & <a href="#" className="text-pink-500">Privacy Policy</a>
                        </p>
                        <a href="#" className="text-xs text-pink-500 text-center block">Have trouble logging in? Get help</a>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Login;
