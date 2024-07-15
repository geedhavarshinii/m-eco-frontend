import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const OTPPage = ({ username, phoneNumber }) => {
    const [otp, setOTP] = useState(['', '', '', '']); // Array to store OTP digits
    const [timer, setTimer] = useState(30); // Timer in seconds
    const otpInputs = useRef([]); // Ref to store references to OTP input fields

    // Countdown timer effect
    useEffect(() => {
        const countdown = setInterval(() => {
            setTimer((prevTimer) => prevTimer - 1);
        }, 1000);

        // Clear interval on component unmount or timer reaches 0
        return () => clearInterval(countdown);
    }, []);

    const handleOTPChange = (index, value) => {
        // Ensure only numeric input for OTP
        const newValue = value.replace(/\D/g, '');

        // Update OTP array with new value at specified index
        const newOTP = [...otp];
        newOTP[index] = newValue;
        setOTP(newOTP);

        // Move focus to next input box if current box has a value
        if (newValue !== '' && index < otp.length - 1) {
            otpInputs.current[index + 1].focus();
        }
    };

    const handleOTPKeyDown = (index, e) => {
        // Move focus to previous input box on backspace if current box is empty
        if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
            otpInputs.current[index - 1].focus();
        }
    };

    const handleOTPSubmit = (e) => {
        e.preventDefault();
        // Handle OTP submission logic here (e.g., validation, API call)
        const enteredOTP = otp.join(''); // Join OTP array into a single string
        console.log('Submitted OTP:', enteredOTP);
        // Redirect or handle further logic after OTP verification
    };

    return (
        <div>
            
                <div className="max-w-sm w-full bg-white p-4 rounded-lgs=" style={{ marginTop: 'calc(10% - 1rem)' }}> {/* Adjusted marginTop */}
                    <h3 className="text-lg font-semibold mb-4 text-center">Enter OTP</h3>
                    <form id="otp-form" className="space-y-4" onSubmit={handleOTPSubmit}>
                        <p className="text-center">An OTP has been sent to your mobile number ending in {phoneNumber.slice(-4)}</p>
                        <div className="flex justify-center space-x-2">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    id={`otp-${index}`}
                                    name={`otp-${index}`}
                                    maxLength={1}
                                    className="w-16 h-16 text-4xl text-center border border-gray-300 rounded"
                                    style={{ minWidth: '4rem', background: 'none' }}
                                    value={digit}
                                    onChange={(e) => handleOTPChange(index, e.target.value)}
                                    onKeyDown={(e) => handleOTPKeyDown(index, e)}
                                    ref={(input) => (otpInputs.current[index] = input)}
                                    required
                                />
                            ))}
                        </div>
                        <button type="submit" className="w-full bg-pink-500 text-white p-2 rounded hover:bg-pink-600">
                            <Link to="/dashboard">Verify OTP</Link>
                        </button>
                        <p className="text-xs text-gray-500 text-center">
                            {timer > 0 ? `Resend OTP in ${timer} seconds` : 'Did not receive OTP? '}
                            <a href="#" className="text-pink-500"> Resend OTP</a>
                        </p>
                    </form>
                </div>
            
        </div>
    );
};

export default OTPPage;

