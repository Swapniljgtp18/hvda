
import React, { useState } from 'react';

import { Button } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Container, Row, Col, Form, InputGroup, FormControl } from 'react-bootstrap';
import '../App.css';  // One level up from /pages
import { Modal } from 'react-bootstrap';
import {
  faChartLine,
  faComments,
  faKey,
  faCog,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Index() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalVariant, setModalVariant] = useState('success'); // 'success' or 'error'


  const APP_URL =
    'https://script.google.com/macros/s/AKfycbwkH8qdGDcdrbsJhhUyjpYh4e6FAat0mRWssCsHdsqxadmfvm58kXJWcv913VmE6Hy3/exec';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const params = new URLSearchParams({
        action: 'submit',
        email,
      });

      const url = `${APP_URL}?${params.toString()}`;
      const response = await fetch(url, { method: 'GET' });
      const result = await response.json();

      if (result.result === 'success') {
        setModalMessage('Thank you for subscribing, our team will be in touch with you!');
        setModalVariant('success');
        setEmail('');
      } else {
        setModalMessage(`❌ Failed to subscribe. ${result.message || 'Server error.'}`);
        setModalVariant('error');
      }

    } catch (error) {
      setModalMessage('❌ Network error. Please try again later.');
      setModalVariant('error');
    } finally {
      setIsSubmitting(false);
      setShowModal(true);
    }
  };

  return (
    <>

      <div className="hero-section">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="hero-title " style={{ marginTop: '0%', fontWeight: 'bold', color: 'black', }}>
                Make all the right <br /> money moves
              </h1>

              {/* <InputGroup className="search-bar mt-4 mx-auto" style={{ backgroundColor: 'grey !important' }}>
                <FormControl
                  placeholder="Search now.."
                  aria-label="Search"
                  className="search-input"
                />
                <InputGroup.Text className="search-icon">
                  <i className="bi bi-search"></i>
                </InputGroup.Text>
              </InputGroup> */}
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="hero-image-wrapper">
                <img
                  src="/assets/hero.svg"
                  alt="Hero Illustration"
                  className=" hero-image"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="about" className="integrated-suite-section py-5">
        <Container fluid>
          <Row className="align-items-center">
            <Col xs={12} md={4} className="text-start mb-2 mb-md-0">
              <img
                src="/assets/suite.svg"
                alt="Integrated Suite"
                className="suite-image"
              />
            </Col>

            <Col xs={12} md={8} className="text-center text-md-start " style={{ marginTop: '-20px', padding: '60px' }}>
              <h2 className="fw-bold mb-3" style={{ fontSize: '2.8rem' }}>
                Move faster with an <br /> integrated suite
              </h2>
              <p className="text-muted mb-4">
                Software and infrastructure for e-commerce, recurring billing, marketplaces, and more.
              </p>
              <div className="d-flex justify-content-center justify-content-md-start gap-3">
                <Button variant="outline-dark" className="circle-btn">
                  <i className="bi bi-chevron-left"></i>
                </Button>
                <Button variant="dark" className="circle-btn">
                  <i className="bi bi-chevron-right text-white"></i>
                </Button>
              </div>

            </Col>
          </Row>
        </Container>
      </div>

      <div id="solutions" className="solutions-section py-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold" style={{ fontSize: '3rem' }}>
            Our Solutions</h1>
          <p className="text-muted text-center mb-5">
            A complete payments platform engineered for growth.</p>
        </div>

        <Container>
          <Row className="justify-content-center align-items-center text-center">
            <Col xs={10} md={4} className="mb-4 mb-md-0">
              <div className="solution-card left-card">
                <img src="/assets/s2.webp" alt="Link" className="solution-image" />
                <h5 className="fw-bold mt-3">Utility Payments</h5>
                <p>Unified, secure utility bill payment platform</p>
              </div>
            </Col>

            <Col xs={10} md={4} className="mb-4 mb-md-0">
              <div className="solution-card center-card">
                <img src="/assets/s1.jpg" alt="Clear" className="solution-image" />
                <h5 className="fw-bold mt-3"> Mobile & DTH Recharge
                </h5>
                <p>Instant recharge for all telecom & DTH</p>
              </div>
            </Col>

            <Col xs={10} md={4}>
              <div className="solution-card right-card">
                <img src="/assets/s3.jpg" alt="Core" className="solution-image" />
                <h5 className="fw-bold mt-3"> Fastag Recharge
                </h5>
                <p>Instant FASTag recharge for smooth travel</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="newsletter" className="newsletter-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col
              md={6}
              className="mb-4 mb-md-0 text-center text-md-start d-flex flex-column align-items-center align-items-md-start"
            >
              <h2 className="fw-bold" style={{ fontSize: '3rem' }}>
                Subscribe to our <br /> useful newsletter
              </h2>
              <p className="text-muted">
                Get tips, updates, and insights delivered straight to your inbox.
                No spam, just useful stuff to help you stay informed.
              </p>
              <Form
                onSubmit={handleSubmit}
                className="d-flex flex-column flex-sm-row newsletter-form w-100 justify-content-center justify-content-md-start align-items-center gap-2 gap-sm-0"
              >
                <Form.Control
                  type="email"
                  placeholder="Your email address"
                  className="rounded-pill me-sm-2 mb-2 mb-sm-0"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button
                  type="submit"
                  variant="dark"
                  className="rounded-circle d-flex align-items-center justify-content-center p-0"
                  style={{ width: '36px', height: '36px' }}
                  disabled={isSubmitting}
                >
                  <i className="bi bi-arrow-right text-white"></i>
                </Button>
              </Form>
            </Col>
            <Col
              md={6}
              className="d-flex justify-content-center align-items-center mt-3 mt-md-0"
            >
              <div className="image-wrapper">
                <img
                  src="/assets/newsletter.svg"
                  alt="Newsletter illustration"
                  className="newsletter-image"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header
          closeButton
          style={{
            backgroundColor: '#000',
            color: 'white',
            backgroundImage: 'url(/assets/pattern-white.png)', // optional pattern
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto',
          }}
        >
          <Modal.Title>You're Subscribed!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center py-4">
          <p style={{ fontSize: '1.1rem', marginBottom: 0 }}>
            Thank you for subscribing, our team will be in touch with you.
          </p>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="dark" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Index;
