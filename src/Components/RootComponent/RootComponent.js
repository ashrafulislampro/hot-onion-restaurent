import React, { createContext, useEffect, useState } from 'react';
import Footers from '../Footers/Footers';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Shop from '../MainContainer/Shop';
import CartItem from '../MiddleComponent/CardItem';


export const CategoryContext = createContext();

const RootComponent = () => {
          const [category, setCategory] = useState('Lunch');
          
          return (
                    <CategoryContext.Provider value={[category, setCategory]}>
                              <Header></Header>
                              <Home></Home>
                              <Shop></Shop>
                              <CartItem></CartItem>
                              <Footers></Footers>

                    </CategoryContext.Provider>
          );
};

export default RootComponent;