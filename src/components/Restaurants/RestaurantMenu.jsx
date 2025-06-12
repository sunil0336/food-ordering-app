import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function RestaurantMenu() {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3001/restaurants/${id}`);
                const data = await response.json();
                setRestaurant(data);
                console.log('Fetched Menu:', data);
            } catch (error) {
                console.error('Error fetching restaurant:', error);
            }
        };
        fetchData();
    }, [id]);

    const handleAddToCart = (item) => {
        // Replace this with your cart logic
        alert(`Added ${item.name} to cart!`);
    };

    if (!restaurant) {
        return <div className="text-center text-gray-500">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 to-gray-100 py-8">
            <div className="max-w-screen-xl mx-auto bg-white shadow-2xl rounded-2xl p-8">
                <div className="flex flex-col md:flex-row items-center mb-8">
                    <img
                        src={restaurant.image}
                        alt={restaurant.resName}
                        className="w-32 h-32 object-cover rounded-2xl shadow-lg mb-4 md:mb-0 md:mr-8"
                    />
                    <div>
                        <h1 className="text-4xl font-extrabold text-purple-700 mb-2">{restaurant.resName}</h1>
                        <div className="flex flex-wrap gap-4 text-gray-600 mb-2">
                            <span className="bg-purple-200 px-3 py-1 rounded-full text-sm font-medium">
                                Cuisine: {restaurant.cuisine}
                            </span>
                            <span className="bg-yellow-200 px-3 py-1 rounded-full text-sm font-medium">
                                Rating: {restaurant.rating} ⭐
                            </span>
                            <span className="bg-green-200 px-3 py-1 rounded-full text-sm font-medium">
                                ETA: {restaurant.eta} mins
                            </span>
                        </div>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Menu</h2>
                <ul className="space-y-6">
                    {restaurant.menu.map(item => (
                        <li
                            key={item.id}
                            className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-white to-purple-50 p-6 rounded-xl shadow hover:shadow-lg transition"
                        >
                            <div className="flex items-center gap-6 w-full md:w-auto">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-20 h-20 object-cover rounded-lg border-2 border-purple-200"
                                />
                                <div>
                                    <h3 className="text-xl font-semibold text-purple-800">{item.name}</h3>
                                    <p className="text-gray-500 text-sm mb-1">{item.description}</p>
                                    <p className="text-lg font-bold text-green-700">₹{item.price}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => handleAddToCart(item)}
                                className="mt-4 md:mt-0 px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg shadow hover:bg-purple-700 transition"
                            >
                                Add to Cart
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="mt-10 text-center">
                    <Link
                        to="/"
                        className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-xl shadow-sm text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400 transition"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default RestaurantMenu;