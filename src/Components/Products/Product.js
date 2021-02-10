
import { Button } from '@material-ui/core';
import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Product.css';
const Product = (props) => {
        const {img, description, title, price, id} = props.foodItem;
        const history = useHistory();

        const handleClick = (foodId) => {
                history.push(`/food/${foodId}`)
        }
        
        return (
                    <div className="product-item">
                           
                            <Card style={{ width: '18rem', padding: '5px', borderRadius: '10px', textAlign: 'center' }}>
                                <Card.Img variant="top" src={img} />
                                <Card.Body>
                                        <Card.Title><h4>{title}</h4></Card.Title>
                                                <Card.Text>
                                                        {description}
                                                        <h2>${price}</h2>
                                                </Card.Text>
                                                <Button variant="contained" color="secondary"
                                                        onClick={() =>handleClick(id)}
                                                        >
                                                        Order Now
                                                </Button>
                                </Card.Body>
                           </Card>
                    </div>
          );
};

export default Product;