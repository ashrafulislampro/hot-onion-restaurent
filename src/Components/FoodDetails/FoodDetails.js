import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React from 'react';
import { Button } from 'react-bootstrap';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import './FoodDetails.css';

const FoodDetails = (props) => {
          
          const { img, price, category } = props.foodItem;
          const cart = props.cart;
          
          console.log(cart);
          const totalPrice = cart.reduce((total, sum) => total + sum.price, 0)

          const tax = totalPrice / 10;

          let deliveryCost = 0;
          if( totalPrice > 35){
                    deliveryCost = 0;
          } 
          else if(totalPrice > 15){
                    deliveryCost = 4.99;
          }
          else if(totalPrice > 0){
                    deliveryCost = 12.99;
          }
          
          const grandTotal = totalPrice + tax + deliveryCost;

          const FormatNumber = num =>{
                    const precision = num.toFixed(2);
                    return Number(precision);
          }
          const handleAdd = props.handleAdd;
          const handleRemove = props.handleRemove;
          return (
                    <Container>
                              <Row>
                                        <Col xs={6} style={{ marginTop: '270px' }}>
                                                  <h1>Light {category}</h1>
                                                  <p><span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur voluptas veniam maiores sint? Ab eveniet rem magnam possimus? Qui doloremque exercitationem autem laborum neque labore earum quas eos dolorum dolore?</span></p>
                                                  <br />
                                                  <div className="container">
                                                            <h2>${price}</h2>
                                                            <div className="icon-container">
                                                                      <RemoveIcon onClick={handleRemove}></RemoveIcon>
                                                                      <AddIcon onClick={()=> handleAdd(props.FoodItem)}></AddIcon>
                                                            </div>
                                                           


                                                  </div>
                                                  <div>
                                                           <p>Order Item : {cart.length}</p>
                                                            <p>Product Price : $ {FormatNumber(totalPrice)}</p>
                                                            <p>Quantity : </p>
                                                            <p>Tax : {FormatNumber(tax)}</p>
                                                            <p>Delivery Cost : {deliveryCost}</p>
                                                            <p>Total Price : $ {FormatNumber(grandTotal)}</p>
                                                  </div>
                                                  <br />
                                                  <Button variant="danger"> <ShoppingCartIcon /> add to card</Button>
                                        </Col>
                                        <Col xs={6} style={{ marginTop: '130px' }}>
                                                  <img src={img} alt="" />
                                        </Col>
                              </Row>

                    </Container>
          );
};

export default FoodDetails;