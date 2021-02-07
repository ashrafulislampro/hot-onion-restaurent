import React from 'react';
import logo2 from '../../images/logo2.png';
import './Header.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Button } from '@material-ui/core';



const Header = () => {
          return (
                    <div>
                            <div className="header-container">
                                        <div className="img-styles">
                                                  <img src={logo2} alt="" />
                                        </div>     
                                        <div className="header-content">
                                                 <ShoppingCartIcon></ShoppingCartIcon>
                                                 <Button variant="contained">Log in</Button>
                                                 <Button variant="contained" color="secondary">Sign up</Button>   
                                        </div>
                            </div>
                               
                    </div>
          );
};

export default Header;