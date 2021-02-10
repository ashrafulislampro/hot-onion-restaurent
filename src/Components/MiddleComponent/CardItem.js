import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import './CartItem.css';
import { Button } from '@material-ui/core';
import { CardActions } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
          root: {
            maxWidth: 345,
          },
          media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
          },
          expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
              duration: theme.transitions.duration.shortest,
            }),
          },
          expandOpen: {
            transform: 'rotate(180deg)',
          },
          avatar: {
            backgroundColor: red[500],
          },
        }));
const CartItem = () => {
          const classes = useStyles();
         
        return (
                   <div className="main-container">
                     <div className="text-items">
                      <h1>Why you choose us</h1>
                      <p>Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashWoods at. Boy prosperous increasing surrounded.</p>
                     </div>
                     <div  className="d-flex justify-content-center ">
                        <div className="cartItem">
                          <Card className={classes.root}>
                                <CardMedia
                                  className={classes.media}
                                  image="https://i.ibb.co/0ZKXMPk/adult-blur-blurred-background-687824.png"
                                  title="Paella dish"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                  Fast Delivery
                                </Typography>
                                  <Typography variant="body2" color="textSecondary" component="p">
                                      This impressive paella is a perfect party dish and a fun meal to cook together with your
                                      guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                  </Typography>
                                </CardContent>
                                <CardActions>
                                  <Button size="small" color="primary">
                                    Share
                                  </Button>
                                  <Button size="small" color="primary">
                                    Learn More
                                  </Button>
                                </CardActions>
                          </Card> 
                        </div>
                        <div className="cartItem">
                          <Card className={classes.root} >
                                <CardMedia
                                  className={classes.media}
                                  image="https://i.ibb.co/0h7Yxhg/chef-cook-food-33614.png"
                                  title="Paella dish"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                  A Good Auto Responder
                                </Typography>
                                  <Typography variant="body2" color="textSecondary" component="p">
                                      This impressive paella is a perfect party dish and a fun meal to cook together with your
                                      guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                  </Typography>
                                </CardContent>
                                <CardActions>
                                  <Button size="small" color="primary">
                                    Share
                                  </Button>
                                  <Button size="small" color="primary">
                                    Learn More
                                  </Button>
                                </CardActions>
                          </Card> 
                        </div>
                        <div className="cartItem">
                          <Card className={classes.root} >
                                <CardMedia
                                  className={classes.media}
                                  image="https://i.ibb.co/G3kLZt5/images.png"
                                  title="Paella dish"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                  A Good Auto Responder
                                </Typography>
                                  <Typography variant="body2" color="textSecondary" component="p">
                                      This impressive paella is a perfect party dish and a fun meal to cook together with your
                                      guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                  </Typography>
                                </CardContent>
                                <CardActions>
                                  <Button size="small" color="primary">
                                    Share
                                  </Button>
                                  <Button size="small" color="primary">
                                    Learn More
                                  </Button>
                                </CardActions>
                          </Card> 
                        </div>
                       <div className="cartItem">
                        <Card className={classes.root}>
                                <CardMedia
                                  className={classes.media}
                                  image="https://i.ibb.co/NVrdKfD/architecture-building-city-2047397.png"
                                  title="Paella dish"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                  Home Delivery
                                </Typography>
                                  <Typography variant="body2" color="textSecondary" component="p">
                                      This impressive paella is a perfect party dish and a fun meal to cook together with your
                                      guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                  </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                      Share
                                    </Button>
                                    <Button size="small" color="primary">
                                      Learn More
                                    </Button>
                                </CardActions>
                          </Card> 
                       </div>
                      </div>  
                   </div> 
          );
};

export default CartItem;