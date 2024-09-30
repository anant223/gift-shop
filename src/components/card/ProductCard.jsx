import {Button} from "../index"
import React from 'react'



const ProductCard = ({ image, title, price, description, onAddToCart }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 px-1 py-2">
      <img
        className="w-full h-48 object-cover rounded-t-lg"
        src={image}
        alt={title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4 flex items-center justify-between">
       <span className="text-gray-900 font-semibold text-lg">${price}</span>
        <Button
          onClick={onAddToCart}
          className="rounded-md hover:bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          color="bg-red-500"
          children="Add to Cart"
        />
      </div>
    </div>
  );
};

export default ProductCard;