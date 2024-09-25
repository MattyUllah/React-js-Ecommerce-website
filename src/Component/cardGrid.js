import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BuyNowButton from './BuyNowButton';
import AddToCartButton from './AddToCartButton';
import { useCart } from './CartContext'; // Import the useCart hook

import image1 from '../images/bl.jpg';
import image2 from '../images/rw.jpeg';
import image3 from '../images/w.jpeg';
import image4 from '../images/ww.jpeg';
import image5 from '../images/kk.jpg';
import image6 from '../images/hh.jpg';
import image7 from '../images/gg.jpg';
import image8 from '../images/ff.jpg';


function CardGrid() {
  const [sortOrder, setSortOrder] = useState('high-to-low'); // Default sort order
  const { addToCart } = useCart(); // Get the addToCart function from the context
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const cards = [
    { title: 'Derby Shoes', image: image1, price: 300 },
    { title: 'Chelsea Boots', image: image2, price: 400 },
    { title: 'Sneakers', image: image3, price: 600 },
    { title: 'Monk Strap Shoes', image: image4, price: 600 },
    { title: 'Brogues', image: image5, price: 700 },
    { title: 'Chukka Boots', image: image6, price: 800 },
    { title: 'Oxford Shoes', image: image7, price: 200 },
    { title: 'Monk Strap', image: image8, price: 900 },
    { title: 'Derby Shoes', image: image1, price: 600 },
    { title: 'Chelsea Boots', image: image2, price: 900 },
    { title: 'Sneakers', image: image3, price: 200 },
    { title: 'SMonk Strap', image: image4, price: 1000 },
  ];

  const sortedCards = cards.sort((a, b) => {
    return sortOrder === 'low-to-high' ? a.price - b.price : b.price - a.price;
  });

  const handleAddToCart = (card) => {
    addToCart(card); // Add the item to the cart
    navigate('/cart'); // Redirect to the cart page
  };

  const handleBuyNow = (card) => {
    navigate('/buy', { state: { card } }); // Redirect to the Buy page with card data
  };

  return (
    <>
      <Container>
        <h1>Products</h1>
        
  <label htmlfor="sortOrder" style={{display: 'block', marginbottom: '10px', fontweight: 'bold',
     backgroundcolor: 'black', color: 'white', textalign: 'center', padding: '5px',width:'300px'}}  >
    Sort by Price:
  </label>
  <select
  id="sortOrder"
    name="sortOrder"
    value={sortOrder}
    onChange={(e) => setSortOrder(e.target.value)}
    style={{ marginTop:'-15px' ,padding: '6px', borderRadius: '4px', border: '1px solid #ccc', width: '13%' ,backgroundColor:'blue',color:'white'}}
  >
    
    <option value="high-to-low">Price: High to Low</option>
    <option value="low-to-high">Price: Low to High</option>
  </select>
  <br/><br />
        <Row>
          {sortedCards.map((card, index) => (
            <Col key={index} md={3} className="mb-4">
              <Card>
                <Card.Img variant="top" src={card.image} style={{ height: '250px' }} />
                <div style={{ marginLeft: '15px', marginRight: '15px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h3>{card.title}</h3>
                    <h3>${card.price}</h3>
                  </div>
                  <p style={{ marginLeft: '15px' }}>
                    Note that the development build is not optimized. To create a production build, use
                  </p>
                </div>
                <Card.Body style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <BuyNowButton onBuyNow={() => handleBuyNow(card)} />
                  <AddToCartButton onAddToCart={() => handleAddToCart(card)} />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default CardGrid;
