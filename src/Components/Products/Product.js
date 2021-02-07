
import { Button } from '@material-ui/core';
import React from 'react';
import { Card } from 'react-bootstrap';
import './Product.css';
const Product = (props) => {
        const {img, description, title, price} = props.foodItem;
        
        return (
                    <div className="product-item">
                            <Card style={{ width: '20rem'}}>
                                <Card.Img variant="top" src={img} />
                                <Card.Body>
                                        <Card.Title>{title}</Card.Title>
                                                <Card.Text>
                                                        {description}
                                                        <h2>{price}</h2>
                                                </Card.Text>
                                                <Button variant="contained" color="secondary">
                                                        Order Now
                                                </Button>
                                </Card.Body>
                           </Card>
                    </div>
          );
};

export default Product;