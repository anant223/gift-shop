import React from 'react'
import {ChevronRight} from "lucide-react";

const FeaturedCard = ({image, title, description}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow text-gray-700 duration-300 px-1 py-2 bg-white">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="py-2">
        <div className="font-bold text-xl mb-2">{title}</div>
        {description && (
          <p className="text-gray-700 text-base">{description}</p>
        )}
      </div>
      <div className="py-2">
        <a className="flex items-center">
          Explore Gift
          <ChevronRight className=" w-4 h-4 mt-1" />
        </a>
      </div>
    </div>
  );
}

export default FeaturedCard;