import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getWalletBalance } from "../api/wallet";

import {
  FaBolt, FaWifi, FaTint, FaPhoneAlt, FaGasPump, FaBurn,
  FaBook, FaMobileAlt, FaNetworkWired, FaSimCard
} from 'react-icons/fa';

const services = [
  { name: 'Postpaid Mobile', icon: <FaMobileAlt />, route: '/mobile-recharge' },
  { name: 'Electricity', icon: <FaBolt />, route: '/electricity' },
  { name: 'Wi-Fi', icon: <FaWifi />, route: '/wifi' },
  { name: 'Water', icon: <FaTint />, route: '/water' },
  { name: 'Landline', icon: <FaPhoneAlt />, route: '/landline' },
  { name: 'Gas Cylinder', icon: <FaGasPump />, route: '/gas-cylinder' },
  { name: 'Piped Gas', icon: <FaBurn />, route: '/piped-gas' },
  { name: 'Education', icon: <FaBook />, route: '/education' },
  { name: 'Broadband Postpaid', icon: <FaNetworkWired />, route: '/broadband' },
  { name: 'Datacard', icon: <FaSimCard />, route: '/datacard' }
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [walletBalance, setWalletBalance] = useState(null);

  useEffect(() => {
    const fetchBalance = async () => {
      const email = localStorage.getItem("email");
      const token = localStorage.getItem("token");

      if (!email || !token) {
        console.warn("Missing email or token");
        setWalletBalance(0);
        return;
      }

      try {
        const balance = await getWalletBalance(email, token);
        setWalletBalance(balance ?? 0);
      } catch (err) {
        console.error("Error fetching wallet balance:", err);
        setWalletBalance(0);
      }
    };

    fetchBalance();
  }, []);

  return (
    <Container className="py-5" style={{ minHeight: '100vh' }}>
      {/* Wallet Balance Card */}
      <Card className="text-center shadow-sm mb-3 mt-4"
        style={{
          borderRadius: '16px',
          background: 'black',
          color: '#fff',
          width: '50%',
          margin: '0 auto'
        }}
      >
        <Card.Body>
          <h6>Your Wallet Balance</h6>
          <h2>
            ₹{walletBalance !== null ? walletBalance.toLocaleString() : '--'}
          </h2>
          <Button
            variant="light"
            className="rounded-pill mt-2 px-4 fw-semibold"
            onClick={() => navigate('/addfunds')}
          >
            Add Funds
          </Button>
        </Card.Body>
      </Card>

      {/* Utility Services */}
      <Card className="p-3 shadow-sm" style={{ borderRadius: '16px' }}>
        <h5 className="mb-3 fw-bold">Utility Bills</h5>
        <Row xs={4} sm={5} md={5} lg={5} className="g-3">
          {services.map((service, index) => (
            <Col key={index} className="text-center">
              <Button
                variant="outline-light"
                className="rounded-circle p-3 bg-white shadow-sm"
                onClick={() => navigate(service.route)}
                style={{ width: '64px', height: '64px' }}
              >
                <span style={{ fontSize: '1.25rem', color: '#008080' }}>
                  {service.icon}
                </span>
              </Button>
              <div className="mt-2" style={{ fontSize: '0.75rem' }}>
                {service.name}
              </div>
            </Col>
          ))}
        </Row>
      </Card>

      {/* Bottom Navigation */}
      <div className="d-flex justify-content-around mt-2 pt-2 pb-3 bg-white rounded-pill mx-auto" style={{ maxWidth: '500px' }}>
        <Button variant="outline-dark" className="rounded-pill px-4 py-2" disabled>
          Home
        </Button>
        <Button
          variant="outline-primary"
          className="rounded-pill px-4 py-2"
          onClick={() => navigate('/history')}
          style={{
            backgroundColor: 'transparent',
            borderColor: 'grey',
            color: 'black',
            transition: 'all 0.3s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'black';
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = 'black';
          }}
        >
          History
        </Button>
      </div>
    </Container>
  );
};

export default Dashboard;
