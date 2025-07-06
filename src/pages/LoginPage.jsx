import React, { useState } from 'react';
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import { FaEnvelope } from 'react-icons/fa';
import { sendOtp } from '../api/auth';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');
        try {
            await sendOtp(email);
            localStorage.setItem('email', email);
            console.log("Saved email in localStorage:", localStorage.getItem('email'));

            navigate('/otp');

        } catch (err) {
            setError(err.response?.data?.message || 'Failed to send OTP');
        } finally {
            setLoading(false);
        }
    };

    return (

        <Container fluid className="vh-100">
            <Row className="h-100">
              
                <Col md={6} className="d-none d-md-flex flex-column justify-content-center align-items-center bg-light text-white p-5">
                    <img src="/assets/hero.svg" alt="Hero" style={{ width: '70%', maxHeight: '400px', objectFit: 'contain' }} />
                </Col>
            
                <Col md={6} className="d-flex justify-content-center align-items-center  bg-light py-5">
                    <Row className="w-100 justify-content-center">
                        <Col xs={11} sm={8} md={10} lg={8}>
                            <div className="text-center mb-0 mt-0">
                                <h2 className="fw-bold">Welcome to HVDA</h2>
                                <p className="text-muted">Sign in to your account.</p>
                            </div>

                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formEmail" className="mb-3">
                                    <InputGroup>
                                        <InputGroup.Text>
                                            <FaEnvelope />
                                        </InputGroup.Text>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter Email ID"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </InputGroup>
                                </Form.Group>

                                <p className="text-muted text-center small mb-5">
                                    Enter 6-digit verification code which has been sent to your email ID.
                                </p>

                                {error && <div className="text-danger text-center mb-2">{error}</div>}
                                {success && <div className="text-success text-center mb-2">{success}</div>}

                                <Button
                                    type="submit"
                                    variant="primary"
                                    className="w-100 rounded-pill"
                                    disabled={loading}
                                    style={{ backgroundColor: 'black', borderColor: 'black', marginTop: '15%' }}
                                >
                                    {loading ? 'Sending...' : 'Send OTP'}
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>

//         Before single section ->
//    <Container fluid className="d-flex vh-100 justify-content-center align-items-center bg-light py-5">
//             <Row className="w-100 justify-content-center">
//                 <Col xs={11} sm={8} md={6} lg={4}>
//                     <div className="text-center mb-0 mt-0">
//                         <h2 className="fw-bold">Welcome to HVDA</h2>
//                         <p className="text-muted">Sign in to your account.</p>
//                     </div>

//                     <Form onSubmit={handleSubmit}>
//                         <Form.Group controlId="formEmail" className="mb-3 ">
//                             <InputGroup>
//                                 <InputGroup.Text>
//                                     <FaEnvelope />
//                                 </InputGroup.Text>
//                                 <Form.Control
//                                     type="email"
//                                     placeholder="Enter Email ID"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     required
//                                 />
//                             </InputGroup>
//                         </Form.Group>

//                         <p className="text-muted text-center small mb-5">
//                             Enter 6-digit verification code which has been sent to your email ID.
//                         </p>

//                         {error && <div className="text-danger text-center mb-2">{error}</div>}
//                         {success && <div className="text-success text-center mb-2">{success}</div>}

//                         <Button
//                             type="submit"
//                             variant="primary"
//                             className="w-100 rounded-pill"
//                             disabled={loading}
//                             style={{ backgroundColor: 'black', borderColor: 'black', marginTop: '15%' }}
//                         >
//                             {loading ? 'Sending...' : 'Send OTP'}
//                         </Button>
//                     </Form>
//                 </Col>
//             </Row>
//         </Container>
    );
};

export default LoginPage;
