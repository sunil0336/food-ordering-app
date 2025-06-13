import React, { useEffect, useState } from 'react'

function useRestaurant() {
    const [restaurantData, setRestaurantData] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/restaurants');
      const data = await response.json();
      setRestaurantData(data);
      console.log('Fetched data:', data);

      setTimeout(() => {
        setLoading(false);
      }, 1500);

    } catch (error) {
      console.error('Error fetching data:', error);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

    return { restaurantData, loading }
}

export default useRestaurant
