import React, { useEffect, useState } from 'react';
import products from '../Data/Data';
import Product from '../Products/Product';

import './Shop.css';
const Shop = () => {
        const [foodItems , setFoodItems] = useState([]);
        useEffect(() =>{
              setFoodItems(products);
        },[])

        const handleBreakfast = (category) => {
            console.log("breakfast add");
            const lunchFood = foodItems.filter(foodItem => foodItem.category === category.breakfast);
            setFoodItems(lunchFood);
        }
         
        const handleLunch = (category) => {
            console.log("lunch added");
            const lunchFood = foodItems.filter(foodItem => foodItem.category === category.lunch);
            setFoodItems(lunchFood);
        }

        const handleDinner = (category) => {
            console.log("lunch added");
            const dinnerFood = foodItems.filter(foodItem => foodItem.category === category.dinner);
            setFoodItems(dinnerFood);
        }
      //   console.log(foodItems);
          return (
                    <div>
                           <div className="item d-flex justify-content-center">
                                 
                                 <p onClick={handleBreakfast}>Breakfast</p>
                                 <p onClick={handleLunch}>Lunch</p>
                                 <p onClick={handleDinner}>Dinner</p>
                                 
                           </div>
                             {
                                   foodItems.map(foodItem => <Product 
                                    foodItem={foodItem}
                                    key={foodItem.img}
                                   
                                    ></Product>)
                             }
                              
                    </div>
          );
};

export default Shop;