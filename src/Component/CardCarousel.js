import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BuyNowButton from './BuyNowButton';
import AddToCartButton from './AddToCartButton';
import { useCart } from './CartContext'; 
import { useNavigate } from 'react-router-dom';

// Import images
import image1 from '../images/gg.jpg';
import image2 from '../images/hh.jpg';
import image3 from '../images/ff.jpg';
import image4 from '../images/kk.jpg';

function CardCarousel() {
  const { addToCart } = useCart(); 
  const navigate = useNavigate();
  
  // Define card data including imported images
  const cards = [
    { title: 'Monk Strap', price: '300', image: image1 },
    { title: 'Chukka Boots', price: '600', image: image2 },
    { title: 'Oxford Shoes', price: '800', image: image3 },
    { title: 'Derby Shoes', price: '300', image: image4 },
    { title: 'Sneakers', price: '700', image: image1 },
    { title: 'Brouges', price: '200', image: image2 },
    { title: 'Chukka Boots', price: '900', image: image3 },
    { title: 'Sneakers', price: '500', image: image4 },
  ];

  // Group cards into sets of 4
  const groupedCards = [];
  for (let i = 0; i < cards.length; i += 4) {
    groupedCards.push(cards.slice(i, i + 4));
  }
  
  const handleBuyNow = (card) => {
    navigate('/buy', { state: { card } }); // Redirect to the Buy page with card data
  };
  const handleAddToCart = (card) => {
    addToCart(card); // Add the item to the cart
    navigate('/cart'); // Redirect to the cart page
  };

  return (
    <>
    <Container>
        <h1>Trending</h1>
      <Carousel indicators={false}>
        {groupedCards.map((group, idx) => (
          <Carousel.Item key={idx}>
            <Row>
              {group.map((card, index) => (
                <Col key={index} md={3}>
                <Card>
              <Card.Img variant="top" src={card.image} style={{height:'250px'}} />
              <div style={{marginLeft:'15px',marginRight:'15px'}} >
                <div style={{display:'flex',justifyContent:'space-between'}}>
              <h3 >shoes</h3>
              <br></br>
              <h3>{card.price}</h3>
              </div>
              <p style={{marginLeft:'15px'}}>
              Note that the development build is not optimized.To create a production build, use
              </p>
              
              </div>
              <Card.Body  style={{display:'flex',justifyContent:'space-between'}}>
                
              <BuyNowButton onBuyNow={() => handleBuyNow(card)} />
              <AddToCartButton onAddToCart={() => handleAddToCart(card)} />
              </Card.Body>
            </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
    </>
  );
}

export default CardCarousel;
