import React from 'react';
import { FaStar, FaStopwatch } from 'react-icons/fa';

const RestaurantCard = ({ restaurant }) => {
  return (
    <div
      key={restaurant.id}
      className="relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
    >
      <img
        src={restaurant.image}
        alt={restaurant.resName}
        className="w-full h-48 object-cover"
      />
        <div className="absolute top-0 rihgt-0 bg-gradient-to-r from-purple-600 to-red-500 text-white text-xs font-semibold px-2 py-1 rounded-br-lg">
          {/* {restaurant.discount} */}
          10 % OFF
        </div>
      {/* )} */}

      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 truncate">
          {restaurant.resName}
        </h2>

        <div className="flex items-center justify-between mt-1 text-sm">
          <div className="flex items-center">
            <FaStar className="w-4 h-4 text-green-500 mr-1" />
            <span className="font-bold text-green-600">
              {restaurant.rating}
            </span>
            <span className="text-gray-500 ml-1 mr-1">•</span>
            <p className="text-gray-700 font-medium flex items-center gap-1">
              <FaStopwatch className="w-4 h-4" />
              {restaurant.eta} mins
            </p>
          </div>
        </div>
        
        <p className="text-sm text-gray-500 truncate mt-1">
          {restaurant.cuisine}
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
