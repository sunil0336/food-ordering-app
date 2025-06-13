import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';


function useRestaurantMenu(id) {
    // const { id } = useParams();
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

      return { restaurant }
}

export default useRestaurantMenu