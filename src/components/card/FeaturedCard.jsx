import React from 'react'
import {ChevronRight, Star} from "lucide-react";

const FeaturedCard = ({image, title, description, price, type ="btn", ratting}) => {
  
  return (
    <div className="relative max-w-sm bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-105 group">
      <div className="relative">
        {image && (
          <img
            className="w-full h-48 object-cover transition-transform duration-300 transform group-hover:scale-110"
            src={image}
            alt={title}
          />
        )}
      </div>
      <div className="p-4">
        {ratting && (
          <div className="flex">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        )}
        <h3 className="text-gray-800 font-bold text-lg group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        {description && (
          <p className="text-gray-600 text-sm mt-2 text-justify">
            {description}
          </p>
        )}
        <div className="flex items-center justify-between mt-4">
          {price && (
            <span className="text-green-600 font-semibold text-lg">
              ${price}
            </span>
          )}
          {type === "btn" ? (
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-400/50 transition-all duration-300">
              Add to Cart
            </button>
          ) : (
            <a className="flex items-center">
              Explore
              <ChevronRight className=" w-4 h-4 mt-1 hover:text-red-500" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default FeaturedCard;