import React, { useEffect } from 'react'
import ShimmerCard from '../Simmer/SimmerCard';
import { FaStar, FaStopwatch } from 'react-icons/fa';
import RestaurantCard from './RestaurantCard';
import useRestaurant from '../../Hooks/useRestaurant';

function Restaurants() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [toprated, setTopRated] = React.useState(false);
  const { restaurantData, loading } = useRestaurant();

  const filteredRestaurants = restaurantData.filter(restaurant =>
    restaurant.resName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const dispatchedRestaurants = toprated
    ? filteredRestaurants.filter(restaurant => restaurant.rating >= 4.5)
    : filteredRestaurants;

  const handleShowTopRated = () => {
    setTopRated(!toprated);
  }

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-center my-4 gap-2 sm:gap-0">
        <input
          type="text"
          placeholder="Search for restaurants..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
            setTopRated(false);
          }}
          className="border border-gray-300 rounded-lg p-2 w-full max-w-xs sm:max-w-md"
        />

        <div className="flex items-center gap-2">
          <button
            onClick={handleShowTopRated}
            className={`sm:ml-2 mt-2 sm:mt-0 px-4 py-2 rounded-lg hover:scale-105 transition-all duration-300 ${toprated ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 '}`}
          >
            {toprated ? 'Show All' : 'Show Top Rated'}
          </button>
          <button
            onClick={() => {
              setSearchTerm('');
              setTopRated(false);
            }}
            className="sm:ml-2 mt-2 sm:mt-0 px-4 py-2 bg-red-200 hover:bg-red-400 hover:scale-105 transition-all duration-300 text-gray-700 rounded-lg"
          >
            Clear Search
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-8">
        {loading ? (
          Array.from({ length: 10 }).map((_, index) => (

            <ShimmerCard key={index} />

          ))
        ) : (
          <>
            {dispatchedRestaurants.map((restaurant) => (

              <RestaurantCard key={restaurant.id} restaurant={restaurant} />

            ))}

            {dispatchedRestaurants.length === 0 && (
              <div className="col-span-4 text-center text-gray-500">
                No restaurants found.
              </div>
            )}
          </>
        )}
      </div>

    </>
  )
}

export default Restaurants