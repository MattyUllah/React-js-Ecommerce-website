import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

function Buy() {
  const location = useLocation();
  const { card } = location.state || {}; 
  const [count, setcount] = useState(1);
  const total =count*card.price
  

  if (!card) {
    return <p>No item selected to buy.</p>;
  }


  return (
    <>
    
    <Container style={{display:'flex',}}>
    <Container>
      <h1 style={{ textAlign:'center',color:'blue',marginLeft:"350px" }}>Buy Now</h1>
      <Card style={{ height: '250px',width:'300px' }}>
        <Card.Img variant="top" src={card.image} style={{ height: '250px' }} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h3>${card.price}</h3>
            </div>
            <p style={{ marginLeft: '15px' }}>
              Note that the development build is not optimized. To create a production build, use
            </p>
          </Card.Text>
        </Card.Body>
      </Card>

      {/* You can add more buy-related functionalities here */}
    </Container>
    
    <Container style={{marginTop:'70px'}}>
        <h1>YOUR AMOUNT</h1>
        <input type='number' value={count}  onChange={(e) => setcount(e.target.value)} 
        style={{ marginBottom: '10px' }} /> 
        <br />
       <span style={{marginLeft:"10px"}}> TOTAL AMOUNT  <b >${total} </b></span>
       <br/>
        
        <button style={{ marginLeft:'30px',marginTop: '10px',backgroundColor:'blue',color:'white',width:'100px',borderRadius:'10px' }} onClick={() => alert(`Buying ${card.title} for $${total}`)}> BUY</button>

    </Container>
    </Container>
    </>
  );
}

export default Buy;
