
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // scroll threshold
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <Navbar
      expand="lg"
      variant="light"
      className={`custom-navbar position-fixed top-0 w-100 z-3 
        }`}
      style={{
        backgroundColor: 'white',
        transition: 'background-color 0.3s ease',
      }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-dark px-2">
          <img
            src="/assets/logonew.svg"
            alt="Manmad Logo"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="w-100">

          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link href="/" style={{ color: 'black', paddingLeft: '1rem', paddingRight: '1rem' }}>Home</Nav.Link>
            <Nav.Link href="/#about" style={{ color: 'black', paddingLeft: '1rem', paddingRight: '1rem' }}>About</Nav.Link>
            <Nav.Link href="/#solutions" style={{ color: 'black', paddingLeft: '1rem', paddingRight: '1rem' }}>Solutions</Nav.Link>
            <Nav.Link href="/help-center" style={{ color: 'black', paddingLeft: '1rem', paddingRight: '1rem' }}>Help Center</Nav.Link>
          </Nav>



          <a
            // href="https://play.google.com/store/apps/details?id=your.package.name"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <Button
            onClick={() => navigate('/login')}
              style={{
                background: 'black',
                color: 'white',
                fontWeight: 'bold',
                borderRadius: '30px',
                padding: '6px 15px',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '5px', // Space between logo and text
              }}
            >
              {/* <img
                src="/assets/playstore.svg"
                alt="Play Store"
                style={{ width: '20px', height: '20px' }}
              /> */}
              Log in
            </Button>
          </a>



        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

