import React, { useRef } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import './DashBoard.css';
import dashboard_img1 from '../img/dashboard_img1.png';
import dashboard_img2 from '../img/dashboard_img2.png';
import dashboard_img3 from '../img/dashboard_img3.png';
import thriftclothes_img from '../img/thriftclothes_img.png';
import rentclothes_img from '../img/rentclothes_img.png';
import greenrewards_img from '../img/greenrewards_img.png';

const DashBoard = () => {
    const scrollableRef = useRef(null);

    // Function to scroll content left
    const scrollLeft = () => {
        if (scrollableRef.current) {
            scrollableRef.current.scrollTo({
                left: scrollableRef.current.scrollLeft - scrollableRef.current.clientWidth,
                behavior: 'smooth',
            });
        }
    };

    // Function to scroll content right
    const scrollRight = () => {
        if (scrollableRef.current) {
            scrollableRef.current.scrollTo({
                left: scrollableRef.current.scrollLeft + scrollableRef.current.clientWidth,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="bg-white min-h-screen font-krub">
            <Navbar />
            <div className="dashboard-content mt-16">
                <main className="p-3 relative z-0">
                    <div className="scroll-btn-container">
                        <button onClick={scrollLeft} className="scroll-btn left-2">
                            &lt;
                        </button>
                        <div ref={scrollableRef} className="scrollable-element px-4 py-10 mb-4 mx-auto w-full overflow-hidden relative">
                            {/* Scrollable content */}
                            <div className="scrollable-images flex">
                                <img src={dashboard_img1} alt="Dashboard Image 1" className="dashboard-img" />
                                <img src={dashboard_img2} alt="Dashboard Image 2" className="dashboard-img" />
                                <img src={dashboard_img3} alt="Dashboard Image 3" className="dashboard-img" />
                            </div>
                        </div>
                        <button onClick={scrollRight} className="scroll-btn right-2">
                            &gt;
                        </button>
                    </div>
                
                    <div className="carousel-container relative mt-4 mb-28">
                        <div className="carousel flex justify-center overflow-x-scroll scrollbar-hide relative">
                            {/* Slider content */}
                            <Link to="/thriftithome">
                            <div className="card bg-greenone bg-opacity-60 rounded-lg p-10 m-4 flex-shrink-0 w-96 h-96 flex items-center justify-center green-shadow">
                                <img src={thriftclothes_img} alt="Thrift Clothes" className="carousel-img"/>
                                <p className="carousel-label">Thrift Clothes</p>
                            </div>
                            </Link>
                            <Link to="/rentithome">
                            <div className="card bg-white rounded-lg p-10 m-4 flex-shrink-0 w-96 h-96 flex items-center justify-center green-shadow">
                                <img src={rentclothes_img} alt="Rent Clothes" className="carousel-img" />
                                <p className="carousel-label">Rent Clothes</p>
                            </div>
                            </Link>
                            <Link to="/greenrewards">
                            <div className="card bg-white rounded-lg p-10 m-4 flex-shrink-0 w-96 h-96 flex items-center justify-center green-shadow">
                                <img src={greenrewards_img} alt="Green Rewards Profile" className="carousel-img" />
                                <p className="carousel-label">Green Rewards</p>
                            </div>
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashBoard;
