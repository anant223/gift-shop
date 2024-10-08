import React from 'react'
import {ChevronRight, Star} from "lucide-react";
import Button from '../Button';

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
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-red-900 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        {description && (
          <p className="text-sm md:text-base lg:text-lg text-gray-600 mt-2 leading-snug">
            {description}
          </p>
        )}
        <div className="flex items-center justify-between mt-4">
          {price && (
            <span className="text-red-900 font-semibold text-lg">${price}</span>
          )}
          {type === "btn" ? (
            <Button
              children="Add to Cart"
              color="text-white"
              className="bg-red-500 text-white font-semibold rounded-md py-2 px-4 text-xs md:text-sm lg:text-base hover:bg-red-600"
            />
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