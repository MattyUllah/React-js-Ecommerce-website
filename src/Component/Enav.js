import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import CardCarousel from './CardCarousel';
import CardGrid from './cardGrid';
import Footer from './Footer';
import { useNavigate } from 'react-router';


// Import the images
import image1 from '../images/gg.jpg';
import image2 from '../images/hh.jpg';
import image3 from '../images/kk.jpg';


function Enav() {
  const navigate = useNavigate();
  function logoin(){
    navigate('/Contact')
  }

  function Signin(){
    navigate('/Signin')
  }
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ECOMMERCE</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="/">Contact</Nav.Link>
            <Nav.Link href="/">Services</Nav.Link>
          </Nav>
          <div  style={{marginLeft:'4px'}}>
                
                <button className='btn bg-primary' style={{color:'white'}} onClick={()=>logoin()}>LogIN</button>
                
                
                <button className='btn bg-primary'  style={{color:'white',marginLeft:'4px'}} onClick={()=>Signin()}>LogOUT</button>
              </div>
        </Container>
      </Navbar>

      <Carousel  style={{ height: '500px',color:'black' }}>
        <Carousel.Item  style={{ height: '500px' }}>
          <ExampleCarouselImage imageSrc={image1} text="First slide" />
          
        </Carousel.Item>
        <Carousel.Item  style={{ height: '500px' }}>
          <ExampleCarouselImage imageSrc={image2} text="Second slide" />
          
        </Carousel.Item>
        <Carousel.Item  style={{ height: '500px' }}> 
          <ExampleCarouselImage imageSrc={image3} text="Third slide" />
          
        </Carousel.Item>
      </Carousel>

<br/>

      <CardCarousel />


<br/>
<CardGrid />
<br/>
<Footer/>


    </>
  );
}

export default Enav;
