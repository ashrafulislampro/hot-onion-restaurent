import { TableFooter } from '@material-ui/core';
import React from 'react';
import logo from '../../images/logo2.png';
import './Footers.css';
const Footers = () => {
          return (
                    <div style={{backgroundColor: 'rgb(95, 93, 93)' , marginTop: '150px'}}>
                             <div className="footer-content">
                                        <div>
                                                  <img src={logo} alt=""/>
                                        </div>
                                        
                                        <div className='text'>
                                                  <p>About Online Food</p>
                                                  <p>Read our blog</p>
                                                  <p>Sign up to deliver</p>
                                                  <p>Add your restaurant</p>
                                        </div>
                                        <div className='text'>
                                                  <p>Get Help</p>
                                                  <p>Read FAQS</p>
                                                  <p>View all cities</p>
                                                  <p>Restaurant near me</p>
                                        </div>
                             </div>
                              
                              <TableFooter style={{display: 'flex', paddingBottom : '5px'}}>
                                        <p>Copyright $$ 2021 Online food</p>
                                        <div className='text-footer'>
                                                  <p>Privacy Policy</p>
                                                  <p>Terms of Use</p>
                                                  <p>Pricing</p>
                                        </div>
                              </TableFooter>
                    </div>
          );
};

export default Footers;