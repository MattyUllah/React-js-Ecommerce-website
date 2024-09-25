import React from 'react';
import { useCart } from './CartContext';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import BuyNowButton from './BuyNowButton';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cart } = useCart();
  const navigate = useNavigate();
  const handleBuyNow = (card) => {
    navigate('/buy', { state: { card } }); // Redirect to the Buy page with card data
  }; // Get the cart items from the context

  return (
    <Container>
      <h1  style={{ textAlign:'center',color:'blue' }}>Your Cart</h1>
      
      <card style={{ height: '250px', width:'300px', display:'flex'}}>
        {cart.map((item, index) => (
          <ListGroup.Item key={index} >
            <Card style={{ height: '250px', width:'300px'}}>
              <Card.Img variant="top" src={item.image}  style={{ height: '250px', width:'300px'}} />
              <Card.Body  style={{ height: '250px', width:'300px'}}>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h3>${item.price}</h3>
                  </div>
                  <p style={{ marginLeft: '15px' }}>
                    Note that the development build is not optimized. To create a production build, use
                  </p>
                  <BuyNowButton onBuyNow={() => handleBuyNow(item)} />
                </Card.Text>
              </Card.Body>
            </Card>
          </ListGroup.Item>
        ))}
      </card>
    </Container>
  );
}

export default Cart;
