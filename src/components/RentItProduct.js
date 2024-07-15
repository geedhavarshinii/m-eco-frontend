import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaCalendarAlt } from 'react-icons/fa'; // Import the calendar icon
import userIcon from '../img/user-icon.png';
import Chat from './Chat';

const RentItProduct = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state;
  const [showChat, setShowChat] = useState(false); // State to manage chat visibility
  const [rentFrom, setRentFrom] = useState('');
  const [rentTill, setRentTill] = useState('');

  if (!product) {
    return <div>Product not found</div>;
  }

  const openChat = () => {
    setShowChat(true);
  };

  const closeChat = () => {
    setShowChat(false);
  };

  return (
    <div className="RentItProduct">
      <main className="pt-4 md:pt-8 bg-greenone bg-opacity-20 min-h-screen flex justify-center items-start">
        <section className="container max-w-4xl bg-white flex flex-col md:flex-row items-start p-8 rounded-lg shadow-lg">
          <div className="md:w-1/2 lg:w-1/3 flex justify-center">
            <img src={product.imageUrl} alt={product.name} className="w-auto h-auto object-contain rounded-lg" />
          </div>
          <div className="md:w-1/2 lg:w-2/3 px-4 mt-8 md:mt-0">
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="flex items-center mb-4">
              <div className="flex items-center mr-4">
                <span className="text-yellow-500 mr-2">★</span>
                <span>{product.rating}</span>
              </div>
              <div className="text-gray-500">| {product.reviews} Reviews</div>
            </div>
            <p className="text-xl font-semibold mb-2">RENT: ₹{product.price} PER DAY</p>
            <p className="text-gray-500 mb-2">RENT: ₹{product.mrp} PER WEEK</p>
            <p className="text-lg font-semibold mb-2">AVAILABLE SIZE: <span className="border border-gray-300 px-2 py-1 rounded">XS</span></p>

            {/* Renting Duration Section */}
            <div className="flex items-center mb-4 mt-4">
              <FaCalendarAlt className="text-greenone mr-2" size={20} />
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="mb-2 md:mb-0 md:mr-4">
                  <label className="block text-pinkone">Rent From:</label>
                  <input
                    type="date"
                    value={rentFrom}
                    onChange={(e) => setRentFrom(e.target.value)}
                    className="border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-green-500"
                  />
                </div>
                <div>
                  <label className="block text-pinkone">Rent Till:</label>
                  <input
                    type="date"
                    value={rentTill}
                    onChange={(e) => setRentTill(e.target.value)}
                    className="border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-green-500"
                  />
                </div>
              </div>
            </div>

            <div className="flex mb-4 my-7">
              <button
                onClick={() => navigate('/not-found')}
                className="bg-pinkone text-white px-10 py-3 rounded mr-2 hover:bg-pink-600 transition duration-300"
              >
                ADD TO BAG
              </button>
              <button
                onClick={() => navigate('/not-found')}
                className="border border-gray-300 text-gray-500 px-12 py-3 rounded mx-8 hover:bg-gray-200 transition duration-300"
              >
                WISHLIST
              </button>
            </div>
            <div className="bg-pink-100 p-4 rounded-lg mt-4 flex items-center justify-between">
              <div className="flex items-center">
                <img src={userIcon} alt="Seller" className="h-12 w-12 rounded-full mr-4" />
                <div>
                  <h2 className="text-lg font-semibold text-gray-700">Meet your seller</h2>
                  <p className="font-semibold">Shanthi</p>
                  <p className="text-gray-500 text-sm">Fashion Designer</p>
                </div>
              </div>
              <button
                onClick={openChat}
                className="bg-white shadow-lg font-semibold text-gray-700 px-4 py-2 rounded hover:bg-gray-200 transition duration-300"
              >
                MESSAGE 
              </button>
            </div>
          </div>
        </section>
      </main>

      {showChat && (
        <Chat
          recipientName="Shanthi" // Pass seller's name here dynamically
          onClose={closeChat}
        />
      )}
    </div>
  );
}

export default RentItProduct;