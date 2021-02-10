import { Button } from 'react-bootstrap';
import React, { useContext, useEffect, useState } from 'react';
import allProducts from '../Data/Data';
import Product from '../Products/Product';
import { CategoryContext } from '../RootComponent/RootComponent';

import './Shop.css';
const Shop = () => {
   
    const [category , setCategory] = useContext(CategoryContext);
    const [foodItems, setFoodItems] = useState([]);

    useEffect(() =>{
        
        const matchedProducts = allProducts.filter(pdf => pdf.category.toUpperCase() === category.toUpperCase());
        setFoodItems(matchedProducts);
    },[category])
    // console.log(foodItems);
    return (
        <div>
            <div className="item d-flex justify-content-center">

               <Button variant="contained" color="secondary"  onClick={() => setCategory('Breakfast')}>Breakfast</Button>
               <Button variant="contained" color="secondary"  onClick={() => setCategory('Lunch')}>Lunch</Button>
               <Button variant="contained" color="secondary" onClick={() => setCategory('Dinner')}>Dinner</Button>
                

            </div>

                {
                    foodItems.map(foodItem => <Product foodItem={foodItem} key={foodItem.img}></Product>)
                }
        </div>
    );
};

export default Shop;