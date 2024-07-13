import React, { useState } from 'react';
import './login.css';
import Logo from '../img/logo.png';
import userIcon from '../img/user-icon.png';
import Navbar from './Navbar';

const Login = () => {
    const [username, setUsername] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePhoneNumberChange = (e) => {
        // Ensure only numeric input for phone number
        const value = e.target.value.replace(/\D/g, '');
        setPhoneNumber(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., validation, API call)
        console.log('Submitted:', { username, phoneNumber });
    };

    return (
        <div className="bg-gradient-to-br from-pink-200 to-white min-h-screen">
            <Navbar />
            <main className="flex flex-col items-center justify-center min-h-screen py-12">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
                    <h3 className="text-lg font-semibold mb-4 text-center">Login or Signup</h3>
                    <form id="login-form" className="space-y-4" onSubmit={handleSubmit}>
                        <label htmlFor="username" className="sr-only">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Username"
                            className="w-full p-2 border border-gray-300 rounded"
                            value={username}
                            onChange={handleUsernameChange}
                            required
                        />
                        <label htmlFor="mobile-number" className="sr-only">Mobile Number</label>
                        <input
                            type="tel"
                            id="mobile-number"
                            name="mobile-number"
                            placeholder="Mobile Number"
                            className="w-full p-2 border border-gray-300 rounded"
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                            maxLength={10} // Limit to 10 digits
                            pattern="[0-9]{10}" // Pattern for numeric input with 10 digits
                            title="Please enter a valid 10-digit phone number"
                            required
                        />
                        <button type="submit" className="w-full bg-pink-500 text-white p-2 rounded hover:bg-pink-600">
                            Continue
                        </button>
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
