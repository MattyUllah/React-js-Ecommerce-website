import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

import './Footer.css'; // Import custom CSS for styling

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5>About Us</h5>
            <p>
              We are a leading e-commerce platform offering a wide range of products.
              Our mission is to provide exceptional service and deliver the best shopping
              experience to our customers.
            </p>
          </Col>
          <Col md={4} className="mb-4">
            <h5>Quick Links</h5>
            <ListGroup>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#contact">Contact</a>
            </ListGroup>
          </Col>
          <Col md={4} className="mb-4">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="https://facebook.com" aria-label="Facebook">Facebook </a>
              <br/>
              <a href="https://twitter.com" aria-label="Twitter">Twitter </a>
              <br/>
              <a href="https://instagram.com" aria-label="Instagram">Instagram </a>
              <br/>
              <a href="https://linkedin.com" aria-label="LinkedIn">Linkedin </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-4">
            <p>&copy; {new Date().getFullYear()} E-Commerce Platform. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
