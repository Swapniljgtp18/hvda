import React, { useState } from 'react';
import { Container, Row, Col, Form, InputGroup, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const mockOperators = [
  { name: 'Airtel', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Bharti_Airtel_Logo.svg' },
  { name: 'BSNL', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/17/BSNL_logo_with_slogan.svg' },
  { name: 'RelianceJIO', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Reliance_Jio_Logo.svg' },
  { name: 'Vodafone', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Vodafone_Idea_logo.svg' },
];

const MobileRecharge = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const filteredOperators = mockOperators.filter(op =>
    op.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleOperatorClick = (operator) => {
    navigate('/user-details', { state: { operator } });
  };

  return (
    <Container fluid className="d-flex flex-column align-items-center justify-content-start py-5 bg-light mt-4" style={{ minHeight: '100vh' }}>
      <Row className="w-100 justify-content-center">
        <Col xs={11} md={8} lg={6}>
          <h5 className="fw-bold text-center mb-4 mt-4" style={{ fontSize: '30px' }}>Billers</h5>
          <InputGroup className="mb-4">
            <InputGroup.Text className="border-end-0 bg-light">🔍</InputGroup.Text>
            <Form.Control
              placeholder="Search Provider"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border-start-0 bg-light"
            />
          </InputGroup>

          <div className="d-flex flex-column gap-3">
            {filteredOperators.map((operator, idx) => (
              <div
                key={idx}
                className="d-flex align-items-center justify-content-between p-3 rounded border shadow-sm bg-white"
                style={{ cursor: 'pointer' }}
                onClick={() => handleOperatorClick(operator)}
              >
                <div className="d-flex align-items-center">
                  <Image
                    src={operator.logo}
                    alt={operator.name} 
                    width={35}
                    height={35}
                    className="me-3"
                  />
                  <span className="fw-medium">{operator.name}</span>
                </div>
                <span style={{ fontSize: '1.2rem', color: '#ccc' }}>›</span>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MobileRecharge;
