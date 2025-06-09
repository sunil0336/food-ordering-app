import React from 'react'
import restaurantData from '../../data/restaurants';

function Restaurants() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [toprated, setTopRated] = React.useState(false);


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
        <h1>Data</h1>
        <div className="flex justify-center my-4">
            <input
                type="text"
                placeholder="Search for restaurants..."
                value={searchTerm}
                onChange={(e) =>{
                  setSearchTerm(e.target.value)
                  setTopRated(false); // Reset to show all when searching
                } }
                className="border border-gray-300 rounded-lg p-2 w-full max-w-md"
            />
            <button
                onClick={handleShowTopRated}
                className={`ml-2 px-4 py-2 rounded-lg hover:scale-105 transition-all duration-300 ${toprated ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 '}`}
            >
                {toprated ? 'Show All' : 'Show Top Rated'}
            </button>
            <button
                onClick={() => {
                  setSearchTerm('');
                  setTopRated(false);
                }}
                className="ml-2 px-4 py-2 bg-red-200 hover:bg-red-400 hover:scale-105 transition-all duration-300 text-gray-700 rounded-lg"
            >
                Clear Search
            </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-8">
            {dispatchedRestaurants.map((restaurant) => (
                <div key={restaurant.id} className="border p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
                    <img src={restaurant.image} alt={restaurant.resName} className="w-full h-48 object-cover rounded-t-lg" />
                    <h2 className="text-xl font-semibold mt-2">{restaurant.resName}</h2>
                    <p className="text-gray-600">{restaurant.cuisine}</p>
                    <p className="text-gray-500">Rating: {restaurant.rating}</p>
                    <p className="text-gray-500">ETA: {restaurant.eta}</p>
                </div>
            ))}
            {dispatchedRestaurants.length === 0 && (
                <div className="col-span-4 text-center text-gray-500">
                    No restaurants found.
                </div>
            )}
        </div>
    </>
  )
}

export default Restaurants