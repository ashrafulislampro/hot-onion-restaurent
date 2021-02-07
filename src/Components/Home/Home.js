import { Button } from '@material-ui/core';
import React from 'react';
import './Home.css';
const Home = () => {


          return (
                    <div  className="home-content">
                              
                              <input type="search" name="search" id="" placeholder="search food items"/>
                              <Button variant="contained" color="secondary">Search</Button>
                             
                             <div className="text-item">
                                        <h1>Best food waiting for your belly</h1>
                             </div>
                              
                             
                    </div>
          );
};

export default Home;