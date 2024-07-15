// productcardforrent.js

import React from 'react';

function ProductCardForRent({ product }) {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-greenone bg-opacity-20 hover:bg-pink-100 transition duration-200 ease-in-out h-200 w-100 flex flex-col justify-between">
      <div className="h-80 w-full mb-4 rounded-lg flex items-center justify-center bg-gray-100">
        <img src={product.imageUrl} alt={product.name} className="max-h-full max-w-full object-contain" />
      </div>
      <div className="text-center text-xl font-bold truncate">{product.name}</div>
      <div className="text-center text-gray-600 truncate">{product.description}</div>
      <div className="text-center text-lg font-semibold mt-2">₹{product.price}</div>
      <div className="text-center text-gray-500 font-semibold">BOUGHT FOR ₹{product.mrp}</div>
      <div className="text-center mt-2 flex justify-center items-center">
        <div className="flex items-center">
          <span className="text-yellow-500 mr-2">★</span>
          <span>{product.rating}</span>
        </div>
        <div className="ml-4 text-gray-500">| {product.reviews} Reviews</div>
      </div>
    </div>
  );
}

export default ProductCardForRent;
