import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const UserDetails = () => {
    const [mobile, setMobile] = useState('');
    const [circles, setCircles] = useState([]);
    const [selectedCircle, setSelectedCircle] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const operator = location.state?.operator || null;

    useEffect(() => {
        if (!operator) {
            navigate('/');
        }
    }, [operator, navigate]);

    useEffect(() => {
        const fetchCircles = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(
                    'https://lms.codemodulo.in/recharge/v1/recharge/operators-circles',
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                const data = response.data?.data?.operator_circles?.circles || [];
                setCircles(data);
            } catch (err) {
                console.error('Failed to load circles', err);
                setError('Could not load circle list');
            }
        };

        fetchCircles();
    }, []);

    const handleSubmit = (e) => {
        debugger
        e.preventDefault();

        if (!mobile || mobile.length !== 10 || !selectedCircle) {
            alert('Please enter a valid mobile number and select a region');
            return;
        }

        // Store for fallback
        localStorage.setItem('operator', operator.name);
        localStorage.setItem('mobile', mobile);
        localStorage.setItem('circle', selectedCircle);

        navigate('/show-plans', {
            state: {
                operator: operator.name,
                mobile,
                circle: selectedCircle
            }
        });
    };

    return (
        <Container fluid className="vh-100">
            <Row className="h-100">
                <Col
                    md={6}
                    className="d-none d-md-flex flex-column justify-content-center align-items-center text-white bg-light"
                    style={{ padding: '2rem' }} >

                    <img
                        src="/assets/hero.svg"
                        alt="Hero"
                        style={{ width: '70%', maxHeight: '400px', objectFit: 'contain' }}
                    />
                </Col>

                <Col md={6} className="d-flex flex-column justify-content-center align-items-center bg-light px-4">
                    <div className="w-100" style={{ maxWidth: '400px' }}>
                        <h1 className="text-center mb-4 mt-5 fw-bold" style={{ fontSize: '30px' }}>
                            Prepaid Recharge
                        </h1>
                        <Form onSubmit={handleSubmit} className="p-3 rounded">
                            <Form.Group className="mb-4">
                                <Form.Control
                                    type="tel"
                                    placeholder="Enter your Mobile Number"
                                    value={mobile}
                                    maxLength={10}
                                    onChange={(e) => {
                                        const cleaned = e.target.value.replace(/\D/g, '');
                                        if (cleaned.length <= 10) setMobile(cleaned);
                                    }}
                                />
                            </Form.Group>

                            <Form.Group className="mb-4">
                                <Form.Select
                                    value={selectedCircle}
                                    onChange={(e) => setSelectedCircle(e.target.value)}
                                >
                                    <option value="">Select Circle</option>
                                    {circles.map((circleObj, idx) => (
                                        <option key={idx} value={circleObj.circle}>
                                            {circleObj.circle} - {circleObj.regions.join(', ')}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>

                            {error && <div className="text-danger text-center mb-2">{error}</div>}

                            <p className="text-muted small text-center mb-4">
                                Note: Please select the correct region!. We are not responsible for wrong recharge.
                            </p>

                            <Button
                                type="submit"
                                variant="primary"
                                className=" mt-5"
                                style={{
                                    backgroundColor: 'black',
                                    borderColor: 'black',
                                    borderRadius: '30px',
                                    width: '100%', 
                                    display: 'block',
                                    margin: '0 auto',
                                }}
                                disabled={loading}
                            >
                                {loading ? 'Loading...' : 'View Plans'}
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>

        // single section only->
        // <Container fluid className="d-flex flex-column justify-content-center align-items-center bg-light" style={{ minHeight: '100vh' }}>
        //     <h1 className='text-center mb-4 mt-5 fw-bold' style={{fontSize:'30px'}}>Prepaid Recharge</h1>
        //   <Row className="w-100 justify-content-center">
        //     <Col xs={11} sm={8} md={6} lg={4}>
        //       <Form onSubmit={handleSubmit} className="p-3 rounded">
        //         <Form.Group className="mb-4">
        //           <Form.Control
        //             type="tel"
        //             placeholder="Enter your Mobile Number"
        //             value={mobile}
        //             maxLength={10}
        //             onChange={(e) => {
        //               const cleaned = e.target.value.replace(/\D/g, '');
        //               if (cleaned.length <= 10) setMobile(cleaned);
        //             }}
        //           />
        //         </Form.Group>

        //         <Form.Group className="mb-4">
        //           <Form.Select
        //             value={selectedCircle}
        //             onChange={(e) => setSelectedCircle(e.target.value)}
        //           >
        //             <option value="">Select Circle</option>
        //             {circles.map((circleObj, idx) => (
        //               <option key={idx} value={circleObj.circle}>
        //                 {circleObj.circle} - {circleObj.regions.join(', ')}
        //               </option>
        //             ))}
        //           </Form.Select>
        //         </Form.Group>

        //         {error && <div className="text-danger text-center mb-2">{error}</div>}

        //         <p className="text-muted small text-center mb-4">
        //           Note: Please select the correct region!. We are not responsible for wrong recharge.
        //         </p>

        //         <Button
        //           type="submit"
        //           variant="primary"
        //           className="w-100 mt-5"
        //           style={{ backgroundColor: 'black', borderColor: 'black', borderRadius: '30px' }}
        //           disabled={loading}
        //         >
        //           {loading ? 'Loading...' : 'View Plans'}
        //         </Button>
        //       </Form>
        //     </Col>
        //   </Row>
        // </Container>
    );
};

export default UserDetails;
