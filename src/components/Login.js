import React, { useState } from 'react';
import './login.css';
import Logo from '../img/logo.png';
import userIcon from '../img/user-icon.png';
import Navbar from './Navbar'

const Login = () => {
    return (
        <div className="bg-pink-100 min-h-screen">
            <Navbar />
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
