// components/Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Footer = () => {
  return (
    <>
      <footer className="custom-footer text-light">
        <Container>
          <Row>
            <Col md={3} sm={6} xs={12} className="footer-column">
            <p>© 2025 HVDA, inc. <br></br>  All rights reserved. </p>

              {/* <img
                src="/assets/logo.svg" 
                alt="Logo"
                height="40"
                className="my-2"
              /> */}

              {/* Social Icons */}
              <div className="d-flex gap-3 my-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/fb.svg" alt="Instagram" height="24" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/instagram.svg" alt="Instagram" height="24" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/Twitter.svg" alt="Twitter" height="24" />
                </a>
               
              </div>

             
             
              
            
          </Col>
          <Col md={3} sm={6} xs={12} className="footer-column">
            <h5>About Us </h5>
            <ul>
              <li><a href="/">Home</a></li>
              {/* <li><a href="#">Carrers</a></li> */}
              <li><a href="/#solutions">Solutions</a></li>
              <li><a href="/#newsletter">Newsletter</a></li>
            </ul>
          </Col>
          <Col md={3} sm={6} xs={12} className="footer-column">
            <h5>Help</h5>
            <ul>
              <li><a href="help-center">Help center</a></li>
              <li><a href="support-team">Support Team</a></li>
              <li><a href="community">Community</a></li>
              {/* <li><a href="#">Security</a></li>
              <li><a href="#">Security FAQs</a></li> */}
            </ul>
          </Col>
          <Col md={3} sm={6} xs={12} className="footer-column">
            <h5>Legal</h5>
            <ul>
              <li><a href="terms">Terms & Conditions</a></li>
              <li><a href="privacy">Privacy policy</a></li>
              

            </ul>
          </Col>
        </Row>
      </Container>
    </footer >

      
    </>
  );
};

export default Footer;
