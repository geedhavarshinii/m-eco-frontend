import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import userIcon from '../img/user-icon.png';
import Chat from './Chat';

const ThriftItProduct = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state;
  const [showChat, setShowChat] = useState(false); // State to manage chat visibility

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
    <div className="ThriftItProduct">
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
            <p className="text-xl font-semibold mb-2">PRICE: ₹{product.price}</p>
            <p className="text-gray-500 mb-2">BOUGHT FOR ₹{product.mrp}</p>
            <p className="text-red-500 mb-4">(USED FOR: {product.duration} YEARS)</p>
            <p className="text-lg font-semibold mb-2">AVAILABLE SIZE: <span className="border border-gray-300 px-2 py-1 rounded">XS</span></p>
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
                  <p className="font-semibold">Ashley</p>
                  <p className="text-gray-500 text-sm">Active seller from 2020</p>
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
          recipientName="Ashley" // Pass seller's name here dynamically
          onClose={closeChat}
        />
      )}
    </div>
  );
}

export default ThriftItProduct;
