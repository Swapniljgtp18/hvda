import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, InputGroup, ListGroup, Spinner } from 'react-bootstrap';
import { fetchElectricityBillers } from '../api/billers';

const Electricity = () => {
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    console.log("Token in Electricity.jsx:", token);

    const loadBillers = async () => {
      try {
        const token = localStorage.getItem('token');
        const data = await fetchElectricityBillers(token);
        setProviders(data);
      } catch (err) {
        console.error('Failed to load billers:', err);
      } finally {
        setLoading(false);
      }
    };
    loadBillers();
  }, []);

  const filteredProviders = providers.filter(provider =>
    provider.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container className="pt-4 pb-5">
      <h5 className="text-center mb-3 fw-bold">Billers</h5>

      <InputGroup className="mb-4">
        <Form.Control
          placeholder="Search Provider"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </InputGroup>

      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <ListGroup>
          {filteredProviders.map((provider, idx) => (
            <ListGroup.Item key={idx} className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <img
                  src={provider.logo || '/assets/default-logo.png'}
                  alt={provider.name}
                  width={30}
                  height={30}
                  className="me-3 rounded-circle"
                />
                <span>{provider.name}</span>
              </div>
              <span>&gt;</span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}

      {/* <div className="fixed-bottom">
        <Footer />   // ✅ Uncomment later when Footer is ready
      </div> */}
    </Container>
  );
};

export default Electricity;
