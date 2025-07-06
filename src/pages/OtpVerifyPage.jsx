import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { verifyOtp, sendOtp } from '../api/auth';
import { useNavigate } from 'react-router-dom';


const OtpVerifyPage = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(60);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // ✅ Get email from localStorage once at the top
  const email = localStorage.getItem('email');

  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => setTimer(prev => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleOtpChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleResend = async () => {
    try {
      await sendOtp(email);
      setTimer(60);
    } catch (err) {
      setError('Failed to resend OTP.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const fullOtp = otp.join('');
      console.log(' Email read from localStorage before OTP verify:', email);
      await verifyOtp(email, fullOtp);
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };
    //  const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setLoading(true);
    //     setError('');
    //     try {

    //         const response = await axios.post('https://lms.codemodulo.in/recharge/v1/user/sign-in', {
    //             email: "dhirajjgtp15@gmail.com",
    //             otp: "320190",
    //             partner_id: "S2K78914"
    //         });

    //         console.log('API Response:', response.data); 
    //         localStorage.setItem('token', response.data.token);
    //         onSuccess(); 

    //     } catch (err) {
    //         console.error('Hardcoded test failed:', err.response?.data || err.message);
    //         setError('Still failing in browser, even with correct values.');
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    return (
        <Container fluid className="vh-100">
            <Row className="h-100">              
                <Col md={6} className="d-none d-md-flex flex-column justify-content-center align-items-center text-white bg-light p-5"
                    style={{ backgroundColor: '#000', padding: '2rem' }}>
                    <img src="/assets/hero.svg" alt="Hero" style={{ width: '70%', maxHeight: '400px', objectFit: 'contain' }} /></Col>
            
                <Col md={6} className="d-flex justify-content-center align-items-center bg-light">
                    <Row className="w-100 justify-content-center">
                        <Col xs={11} sm={8} md={10} lg={8}>
                            <div className="text-center mb-4">
                                <h2 className="fw-bold">Welcome to HVDA</h2>
                                <p className="text-muted">Sign in to your account.</p>
                            </div>

                            <p className="text-center text-muted">
                                Enter 6-digit verification code which has been sent to your email ID.
                            </p>

                            <Form onSubmit={handleSubmit}>
                                <Row className="justify-content-center mb-3">
                                    {otp.map((digit, index) => (
                                        <Col key={index} xs={2} className="px-1">
                                            <Form.Control
                                                type="text"
                                                inputMode="numeric"
                                                maxLength={1}
                                                value={digit}
                                                id={`otp-${index}`}
                                                className="text-center fs-4 py-2"
                                                onChange={(e) => handleOtpChange(e.target.value, index)}
                                            />
                                        </Col>
                                    ))}
                                </Row>

                                <div className="d-flex justify-content-between text-muted small px-1 mb-3">
                                    <span>
                                        {timer > 0 ? `0:${timer < 10 ? '0' + timer : timer}` : null}
                                    </span>
                                    {timer === 0 && (
                                        <span
                                            className="text-primary fw-semibold"
                                            role="button"
                                            onClick={handleResend}
                                        >
                                            Resend OTP
                                        </span>
                                    )}
                                </div>

                                {error && (
                                    <div className="text-danger text-center mb-2">{error}</div>
                                )}

                                <Button
                                    type="submit"
                                    variant="primary"
                                    className="w-100 rounded-pill"
                                    disabled={loading}
                                    style={{
                                        backgroundColor: 'black',
                                        borderColor: 'black',
                                        marginTop: '10%',
                                    }}
                                >
                                    {loading ? 'Verifying...' : 'Login'}
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>

//         Before single section ->
        // <Container fluid className="d-flex vh-100 justify-content-center align-items-center bg-light">
        //     <Row className="w-100 justify-content-center">
        //         <Col xs={11} sm={8} md={6} lg={4}>
        //             <div className="text-center mb-4">
        //                 <h2 className="fw-bold">Welcome to HVDA</h2>
        //                 <p className="text-muted">Sign in to your account.</p>
        //             </div>

        //             <p className="text-center text-muted">Enter 6-digit verification code which has been sent to your email ID.</p>

        //             <Form onSubmit={handleSubmit}>
        //                 <Row className="justify-content-center mb-3">
        //                     {otp.map((digit, index) => (
        //                         <Col key={index} xs={2} className="px-1">
        //                             <Form.Control
        //                                 type="text"
        //                                 inputMode="numeric"
        //                                 maxLength={1}
        //                                 value={digit}
        //                                 id={`otp-${index}`}
        //                                 className="text-center fs-4 py-2"
        //                                 onChange={(e) => handleOtpChange(e.target.value, index)}
        //                             />
        //                         </Col>
        //                     ))}
        //                 </Row>

        //                 <div className="d-flex justify-content-between text-muted small px-1 mb-3">
        //                     <span>{timer > 0 ? `0:${timer < 10 ? '0' + timer : timer}` : null}</span>
        //                     {timer === 0 && (
        //                         <span
        //                             className="text-primary fw-semibold"
        //                             role="button"
        //                             onClick={handleResend}
        //                         >
        //                             Resend OTP
        //                         </span>
        //                     )}
        //                 </div>

        //                 {error && <div className="text-danger text-center mb-2">{error}</div>}

        //                 <Button
        //                     type="submit"
        //                     variant="primary"
        //                     className="w-100 rounded-pill"
        //                     disabled={loading}
        //                     style={{ backgroundColor: 'black', borderColor: 'black', marginTop: '10%' }}
        //                 >
        //                     {loading ? 'Verifying...' : 'Login'}
        //                 </Button>
        //             </Form>
        //         </Col>
        //     </Row>
        // </Container>
    );
};

export default OtpVerifyPage;
