import React from 'react';

const DashBoard = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <main className="mt-24 p-4">
                <div className="scrollable-element bg-gray-200 p-60 mb-4">
                    <p>Scrollable content goes here. You can add more text or elements to make it scrollable.</p>
                </div>
            </main>
            <div className="carousel-container relative">
                <div className="carousel flex justify-center overflow-hidden relative">
                    <div className="card bg-white rounded-lg shadow-md p-10 m-4 flex-shrink-0 w-80 h-80 flex items-center justify-center">
                        <p className="text-center font-semibold">THRIFT CLOTHES</p>
                    </div>
                    <div className="card bg-white rounded-lg shadow-md p-10 m-4 flex-shrink-0 w-80 h-80 flex items-center justify-center">
                        <p className="text-center font-semibold">RENT CLOTHES</p>
                    </div>
                    <div className="card bg-white rounded-lg shadow-md p-10 m-4 flex-shrink-0 w-80 h-80 flex items-center justify-center">
                        <p className="text-center font-semibold">GREEN REWARDS PROFILE</p>
                    </div>
                </div>
                <button id="prev" className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300">&#8249;</button>
                <button id="next" className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300">&#8250;</button>
            </div>
        </div>
    );
};

export default DashBoard;
