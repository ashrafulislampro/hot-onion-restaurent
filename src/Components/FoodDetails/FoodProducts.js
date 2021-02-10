import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import allProduct from '../Data/Data';
import FoodDetails from './FoodDetails';
import allProducts from '../Data/Data'

const FoodProducts = () => {
  const { foodId } = useParams();
  const [foodDetails, setFoodDetails] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const matchedFoodId = allProduct.filter(food => food.id === foodId);
    setFoodDetails(matchedFoodId);
  }, [foodId]);



  // useEffect(() => {
  //   const savedCart = getDatabaseCart();
  //   const foodProductId = Object.keys(savedCart);

  //   const foodToCarts = foodProductId.map(fdId => {
  //     const product = allProducts.find(fd => fd.id === fdId)
  //     product.quantity = savedCart[fdId];
  //     return product;
  //   })
  //   setCart(foodToCarts);
  // })


  const handleAdd = () => {
    const newCart = [...cart, foodDetails[0]];
    setCart(newCart);
    const sameFoodItem = newCart.filter(food => food.id === foodDetails[0].id);
    const count = sameFoodItem.length;
    addToDatabaseCart(foodDetails[0].id, count);
  }


  const handleRemove = () => {
    console.log("remove from decrease");

  }

  console.log(foodDetails);
  return (
    <div>

      {
        foodDetails.map(foodItem => <FoodDetails foodItem={foodItem}
          key={foodItem.id}
          handleAdd={handleAdd}
          handleRemove={handleRemove}
          cart={cart}
        ></FoodDetails>)
      }

    </div>
  );
};

export default FoodProducts;