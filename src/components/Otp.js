import React, { useState } from 'react';
import './login.css'; // Ensure your CSS file for styling is imported here

const Otp = () => {
    const [otp, setOtp] = useState('');

    const handleOtpChange = (e) => {
        // Ensure only numeric input for OTP
        const value = e.target.value.replace(/\D/g, '');
        setOtp(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle OTP submission logic here (e.g., validation, API call)
        console.log('Submitted OTP:', otp);
        // Redirect or handle next steps after OTP submission
    };

    return (
        <div className="bg-pink-100 min-h-screen">
            <main className="flex flex-col items-center justify-center min-h-screen py-12">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
                    <h3 className="text-lg font-semibold mb-4 text-center">Enter OTP</h3>
                    <form id="otp-form" className="space-y-4" onSubmit={handleSubmit}>
                        <label htmlFor="otp" className="sr-only">OTP</label>
                        <input
                            type="text"
                            id="otp"
                            name="otp"
                            placeholder="Enter OTP"
                            className="w-full p-2 border border-gray-300 rounded"
                            value={otp}
                            onChange={handleOtpChange}
                            maxLength={6} // Limit to 6 characters for OTP
                            pattern="[0-9]{6}" // Pattern for numeric input with exactly 6 digits
                            title="Please enter a valid 6-digit OTP"
                            required
                        />
                        <button type="submit" className="w-full bg-pink-500 text-white p-2 rounded hover:bg-pink-600">
                            Continue
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Otp;
