// GreenRewards.js
import React from 'react';
import logo from '../img/logo.png';
import userIcon from '../img/user-icon.png';
import rewardIcon1 from '../img/reward-icon1.png'; // replace with actual path or use appropriate icon library
import rewardIcon2 from '../img/reward-icon2.png'; // replace with actual path or use appropriate icon library
import rewardIcon3 from '../img/reward-icon3.png';
 // replace with actual path or use appropriate icon library

const GreenRewards = () => {
    return (
        <div className="bg-white min-h-screen">
            <header className="flex justify-between items-center p-4 bg-white shadow">
                <div className="logo">
                    <img src={logo} alt="Meco Logo" className="h-10" />
                </div>
                <nav className="flex space-x-6 ml-auto">
                    <a href="#" className="text-sm font-semibold text-gray-700">Home</a>
                    <a href="#" className="text-sm font-semibold text-gray-700">About Us</a>
                    <a href="#" className="text-sm font-semibold text-gray-700">FAQ</a>
                    <div className="relative">
                        <button id="services-button" className="text-sm font-semibold text-gray-700 flex items-center">
                            Services
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <div id="services-dropdown" className="absolute hidden bg-white shadow-lg rounded mt-1">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700">Thrift Clothes</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700">Rent Clothes</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700">Green Rewards Profile</a>
                        </div>
                    </div>
                </nav>
                <div className="user-icon ml-4">
                    <img src={userIcon} alt="User Icon" className="h-8" />
                </div>
            </header>
            <main className="py-8">
                <section className="text-center">
                    <h1 className="text-green-500 text-2xl font-bold mb-2">GREEN REWARDS PROGRAM</h1>
                    <div className="flex justify-center items-center space-x-4 mt-6">
                        <div className="bg-green-100 p-6 rounded-lg shadow-md max-w-xs">
                            <p className="text-green-500 font-semibold">sometimes, what you sow, is not what you reap – because sometimes, you reap <span className="text-red-500">a little more</span></p>
                            <p className="text-gray-600 mt-4">with green rewards program, every green choice of yours is appreciated.</p>
                        </div>
                        <div>
                            <div className="text-gray-700 text-lg">your green stats</div>
                            <div className="flex justify-center items-center mt-4">
                                <div className="text-center mx-2">
                                    <span className="text-3xl text-pink-500">2</span><br />
                                    <span className="text-xs">points earned</span>
                                </div>
                                <div className="text-center mx-2">
                                    <span className="text-3xl text-pink-500">8</span><br />
                                    <span className="text-xs">points earned</span>
                                </div>
                                <div className="text-center mx-2">
                                    <span className="text-3xl text-pink-500">0</span><br />
                                    <span className="text-xs">points earned</span>
                                </div>
                            </div>
                            <div className="mt-6">
                                <div className="flex items-center">
                                    <div className="bg-gray-300 w-4 h-4 rounded-full mr-2"></div>
                                    <span className="text-xs text-gray-700">28 points from thrifting</span>
                                </div>
                                <div className="flex items-center mt-2">
                                    <div className="bg-gray-300 w-4 h-4 rounded-full mr-2"></div>
                                    <span className="text-xs text-gray-700">168 points from renting</span>
                                </div>
                                <div className="flex items-center mt-2">
                                    <div className="bg-gray-300 w-4 h-4 rounded-full mr-2"></div>
                                    <span className="text-xs text-gray-700">84 points from donations</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-12">
                    <div className="flex justify-around items-start">
                        <div className="text-center max-w-xs">
                            <img src={rewardIcon1} alt="Reward Icon 1" className="h-16 mx-auto mb-4" />
                            <p className="text-red-500">get discounts that make you want to grab as many deals as you can, as soon as you can</p>
                        </div>
                        <div className="text-center max-w-xs">
                            <img src={rewardIcon2} alt="Reward Icon 2" className="h-16 mx-auto mb-4" />
                            <p className="text-red-500">choose to receive exclusively curated selection of sustainable fashion items as regularly as you want</p>
                        </div>
                        <div className="text-center max-w-xs">
                            <img src={rewardIcon3} alt="Reward Icon 3" className="h-16 mx-auto mb-4" />
                            <p className="text-red-500">gain opportunities to donate to causes that move you; that make you feel like you did what you could to save the world</p>
                            <p className="text-xs text-red-500">(click here to donate)</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default GreenRewards;



// // GreenRewards.js
// import React from 'react';
// import logo from '../img/logo.png';
// import userIcon from '../img/user-icon.png';
// import rewardIcon1 from '../img/reward-icon1.png'; // replace with actual path or use appropriate icon library
// import rewardIcon2 from '../img/reward-icon2.png'; // replace with actual path or use appropriate icon library
// import rewardIcon3 from '../img/reward-icon3.png'; // replace with actual path or use appropriate icon library

// const GreenRewards = () => {
//     return (
//         <div className="bg-white min-h-screen">
//             <header className="flex justify-between items-center p-4 bg-white shadow">
//                 <div className="logo">
//                     <img src={logo} alt="Meco Logo" className="h-10" />
//                 </div>
//                 <nav className="flex space-x-6 ml-auto">
//                     <a href="#" className="text-sm font-semibold text-gray-700">Home</a>
//                     <a href="#" className="text-sm font-semibold text-gray-700">About Us</a>
//                     <a href="#" className="text-sm font-semibold text-gray-700">FAQ</a>
//                     <div className="relative">
//                         <button id="services-button" className="text-sm font-semibold text-gray-700 flex items-center">
//                             Services
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
//                                 <path fillRule="evenodd" d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z" clipRule="evenodd" />
//                             </svg>
//                         </button>
//                         <div id="services-dropdown" className="absolute hidden bg-white shadow-lg rounded mt-1">
//                             <a href="#" className="block px-4 py-2 text-sm text-gray-700">Thrift Clothes</a>
//                             <a href="#" className="block px-4 py-2 text-sm text-gray-700">Rent Clothes</a>
//                             <a href="#" className="block px-4 py-2 text-sm text-gray-700">Green Rewards Profile</a>
//                         </div>
//                     </div>
//                 </nav>
//                 <div className="user-icon ml-4">
//                     <img src={userIcon} alt="User Icon" className="h-8" />
//                 </div>
//             </header>
//             <main className="py-8">
//                 <section className="text-center">
//                     <h1 className="text-green-500 text-2xl font-bold mb-2">GREEN REWARDS PROGRAM</h1>
//                     <div className="flex justify-center items-center space-x-4 mt-6">
//                         <div className="bg-green-100 p-6 rounded-lg shadow-md max-w-xs">
//                             <p className="text-green-500 font-semibold">sometimes, what you sow, is not what you reap – because sometimes, you reap <span className="text-red-500">a little more</span></p>
//                             <p className="text-gray-600 mt-4">with green rewards program, every green choice of yours is appreciated.</p>
//                         </div>
//                         <div>
//                             <div className="text-gray-700 text-lg">your green stats</div>
//                             <div className="flex justify-center items-center mt-4">
//                                 <div className="text-center mx-2">
//                                     <span className="text-3xl text-pink-500">2</span><br />
//                                     <span className="text-xs">points earned</span>
//                                 </div>
//                                 <div className="text-center mx-2">
//                                     <span className="text-3xl text-pink-500">8</span><br />
//                                     <span className="text-xs">points earned</span>
//                                 </div>
//                                 <div className="text-center mx-2">
//                                     <span className="text-3xl text-pink-500">0</span><br />
//                                     <span className="text-xs">points earned</span>
//                                 </div>
//                             </div>
//                             <div className="mt-6">
//                                 <div className="flex items-center">
//                                     <div className="bg-gray-300 w-4 h-4 rounded-full mr-2"></div>
//                                     <span className="text-xs text-gray-700">28 points from thrifting</span>
//                                 </div>
//                                 <div className="flex items-center mt-2">
//                                     <div className="bg-gray-300 w-4 h-4 rounded-full mr-2"></div>
//                                     <span className="text-xs text-gray-700">168 points from renting</span>
//                                 </div>
//                                 <div className="flex items-center mt-2">
//                                     <div className="bg-gray-300 w-4 h-4 rounded-full mr-2"></div>
//                                     <span className="text-xs text-gray-700">84 points from donations</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//                 <section className="mt-12">
//                     <div className="flex justify-around items-start">
//                         <div className="text-center max-w-xs">
//                             <img src={rewardIcon1} alt="Reward Icon 1" className="h-16 mx-auto mb-4" />
//                             <p className="text-red-500">get discounts that make you want to grab as many deals as you can, as soon as you can</p>
//                         </div>
//                         <div className="text-center max-w-xs">
//                             <img src={rewardIcon2} alt="Reward Icon 2" className="h-16 mx-auto mb-4" />
//                             <p className="text-red-500">choose to receive exclusively curated selection of sustainable fashion items as regularly as you want</p>
//                         </div>
//                         <div className="text-center max-w-xs">
//                             <img src={rewardIcon3} alt="Reward Icon 3" className="h-16 mx-auto mb-4" />
//                             <p className="text-red-500">gain opportunities to donate to causes that move you; that make you feel like you did what you could to save the world</p>
//                             <p className="text-xs text-red-500">(click here to donate)</p>
//                         </div>
//                     </div>
//                 </section>
//             </main>
//         </div>
//     );
// };

// export default GreenRewards;
