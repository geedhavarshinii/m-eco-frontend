import React, { useState } from "react";

const DonateItComp = ({ donation }) => {
  const [amount, setAmount] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d*\.?\d{0,2}$/.test(value)) {
      setAmount(value);
    }
  };

  return (
    <div className="flex flex-row justify-between items-center w-3/4 border border-gray-200 p-5 rounded-lg shadow-md">
      <div className="flex-1">
        <div className="h-40 bg-greenone bg-opacity-60 m-5 rounded-lg flex items-center justify-center font-bold text-white">
          <p className="text-lg mt-4 m-5 p-10">{donation.label}</p>
        </div>
      </div>
      <div className="flex-2">
        <div className="font-semibold text-lg m-5 text-pinkone">
          {donation.details}
        </div>
      </div>
      <div className="flex flex-col m-5 items-center justify-center w-1/4">
        <div className="relative w-full mb-4">
          <input
            type="text"
            value={amount}
            onChange={handleInputChange}
            placeholder=" "
            className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-pinkone"
          />
          <label className="absolute left-0 top-2 text-gray-400 duration-300 transform -translate-y-6 scale-75 origin-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            enter amount
          </label>
        </div>
        <button className="px-4 py-2 bg-pinkone text-white font-semibold rounded-md hover:bg-pinkone hover: bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-pinkone focus:ring-opacity-50">
          DONATE IT
        </button>
      </div>
    </div>
  );
};

export default DonateItComp;

