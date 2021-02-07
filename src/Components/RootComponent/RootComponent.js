import React from 'react';
import Footers from '../Footers/Footers';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Shop from '../MainContainer/Shop';
import CartItem from '../MiddleComponent/CardItem';



const RootComponent = () => {
          return (
                    <div>
                              <Header></Header>
                              <Home></Home>
                              <Shop></Shop>
                              <CartItem></CartItem>
                              <Footers></Footers>

                    </div>
          );
};

export default RootComponent;