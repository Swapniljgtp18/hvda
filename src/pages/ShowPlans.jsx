// import React, { useEffect, useState } from 'react';
// import { Container, Row, Col, Nav, Card, Spinner, Alert } from 'react-bootstrap';
// import { useLocation } from 'react-router-dom';
// import { getRechargePlans } from '../api/recharge';

// const ShowPlans = () => {
//     const { state } = useLocation();
//     const operator = state?.operator || localStorage.getItem('operator');
//     const mobile = state?.mobile || localStorage.getItem('mobile');
//     const circle = state?.circle || localStorage.getItem('circle');

//     const [tabs, setTabs] = useState([]);
//     const [activeTab, setActiveTab] = useState('');
//     const [plans, setPlans] = useState({});
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');

//     const fetchPlans = async () => {
//         if (!operator || !mobile || !circle) {
//             setError("Missing required information to fetch plans.");
//             return;
//         }

//         setLoading(true);
//         try {
//             const token = localStorage.getItem('token');
//             const response = await getRechargePlans({
//                 operator,
//                 mobile,
//                 circle,
//                 token,
//             });

//             const planData = response.plans || {};
//             const availableTabs = Object.keys(planData).filter(k => k !== 'status');

//             setPlans(planData);
//             setTabs(availableTabs);
//             setActiveTab(availableTabs[0] || '');
//             setError('');
//         } catch (err) {
//             console.error('Error loading plans:', err);
//             setError('Failed to load plans. Please try again.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchPlans();
//     }, []);

//     const renderPlans = () => {
//         if (loading) return <Spinner animation="border" />;
//         if (error) return <Alert variant="danger">{error}</Alert>;
//         if (!plans[activeTab] || plans[activeTab].length === 0) {
//             return <p>No plans available for this category.</p>;
//         }

//         return plans[activeTab].map((plan, index) => (
//             <Card key={index} className="mb-3 shadow-sm">
//                 <Card.Body>
//                     <Card.Title className="fw-bold">₹{plan.rs}</Card.Title>
//                     <Card.Text className="mb-2"><strong>Validity:</strong> {plan.validity}</Card.Text>
//                     <Card.Text className="text-muted">{plan.desc}</Card.Text>
//                 </Card.Body>
//             </Card>
//         ));
//     };

//     return (
//         <Container fluid className="py-5 mt-5 bg-light" style={{ minHeight: '100vh' }}>
//             <Row>
//                 <Col xs={12} md={3} className="mb-3 mb-md-0 mt-4">
//                     <Nav
//                         variant="pills"
//                         className="flex-md-column"
//                         activeKey={activeTab}
//                         onSelect={(key) => setActiveTab(key)}
//                     >
//                         {tabs.map((tab, idx) => (
//                             <Nav.Item key={idx}>
//                                 <Nav.Link eventKey={tab}
//                                     style={{
//                                         backgroundColor: activeTab === tab ? '#1c1c1c' : '#f1f1f1',
//                                         color: activeTab === tab ? '#f1f1f1' : '#000',
//                                         marginBottom: '6px',
//                                         borderRadius: '6px',
//                                         fontWeight: activeTab === tab ? 'bold' : 'normal',
//                                         padding: '10px 15px',
//                                     }}
//                                 >
//                                     {tab}</Nav.Link>
//                             </Nav.Item>
//                         ))}
//                     </Nav>
//                 </Col>

//                 <Col xs={12} md={9} className='mt-4'>
//                     <h5 className="fw-bold mb-3">{activeTab} Plans</h5>
//                     {renderPlans()}
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export default ShowPlans;


// now->
import React, { useEffect, useState } from 'react';
import {
    Container,
    Row,
    Col,
    Nav,
    Card,
    Spinner,
    Alert,
    Modal,
    Button,
    Form
} from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { getRechargePlans } from '../api/recharge';
import { initiateRecharge } from '../api/rechargenew';
import { QRCodeCanvas } from 'qrcode.react';
import { v4 as uuidv4 } from 'uuid';

const ShowPlans = () => {
    const { state } = useLocation();
    const operator = state?.operator || localStorage.getItem('operator');
    const mobile = state?.mobile || localStorage.getItem('mobile');
    const circle = state?.circle || localStorage.getItem('circle');

    const [tabs, setTabs] = useState([]);
    const [activeTab, setActiveTab] = useState('');
    const [plans, setPlans] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const [deepLink, setDeepLink] = useState(null);
    const [showQR, setShowQR] = useState(false);

    const fetchPlans = async () => {
        if (!operator || !mobile || !circle) {
            setError("Missing required information to fetch plans.");
            return;
        }

        setLoading(true);
        try {
            const token = localStorage.getItem('token');
            const response = await getRechargePlans({
                operator,
                mobile,
                circle,
                token,
            });

            const planData = response.plans || {};
            const availableTabs = Object.keys(planData).filter(k => k !== 'status');

            setPlans(planData);
            setTabs(availableTabs);
            setActiveTab(availableTabs[0] || '');
            setError('');
        } catch (err) {
            console.error('Error loading plans:', err);
            setError('Failed to load plans. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPlans();
    }, []);

const handleRecharge = async (plan) => {
  const token = localStorage.getItem('token');
  const email = localStorage.getItem('email');

  if (!token || !email) {
    alert("Missing user info. Please log in again.");
    return;
  }

  const payload = {
    recharge_mobile: mobile,
    customer_email: email,
    operator,
    circle,
    recharge_amount: plan.rs,
    type: 'PREPAID',
    client_request_id: uuidv4(),
  };

        try {
            const result = await initiateRecharge(payload, token); // Only reaches here if status === 200

            // ✅ API call successful (HTTP 200)
            if (result?.deep_link) {
                // Deep link means wallet insufficient → pay manually
                if (/Mobi|Android/i.test(navigator.userAgent)) {
                    window.location.href = result.deep_link;
                } else {
                    setDeepLink(result.deep_link);
                    setShowQR(true);
                }
            } else {
                // Wallet had enough, recharge done
                alert("✅ Recharge completed using wallet.");
            }

        } catch (err) {
            // ❌ API returned 400 or something else failed
            console.error("❌ Recharge failed:", err);

            const backendMessage =
                err?.response?.data?.error?.message ||
                err?.response?.data?.message ||
                err?.message ||
                "An unknown error occurred.";

            alert(`${backendMessage}`);
        }
    };
    const renderPlans = () => {
        if (loading) return <Spinner animation="border" />;
        if (error) return <Alert variant="danger">{error}</Alert>;
        if (!plans[activeTab] || plans[activeTab].length === 0) {
            return <p>No plans available for this category.</p>;
        }

        return plans[activeTab].map((plan, index) => (
            <Card
                key={index}
                className="mb-3 shadow-sm"
                onClick={() => handleRecharge(plan)}
                style={{ cursor: 'pointer' }}
            >
                <Card.Body>
                    <Card.Title className="fw-bold">₹{plan.rs}</Card.Title>
                    <Card.Text className="mb-2">
                        <strong>Validity:</strong> {plan.validity}
                    </Card.Text>
                    <Card.Text className="text-muted">{plan.desc}</Card.Text>
                </Card.Body>
            </Card>
        ));
    };

    return (
        <Container fluid className="py-5 mt-5 bg-light" style={{ minHeight: '100vh' }}>
            <Row>
                <Col xs={12} md={3} className="mb-3 mb-md-0 mt-4">
                    <Nav
                        variant="pills"
                        className="flex-md-column"
                        activeKey={activeTab}
                        onSelect={(key) => setActiveTab(key)}
                    >
                        {tabs.map((tab, idx) => (
                            <Nav.Item key={idx}>
                                <Nav.Link
                                    eventKey={tab}
                                    style={{
                                        backgroundColor: activeTab === tab ? '#1c1c1c' : '#f1f1f1',
                                        color: activeTab === tab ? '#f1f1f1' : '#000',
                                        marginBottom: '6px',
                                        borderRadius: '6px',
                                        fontWeight: activeTab === tab ? 'bold' : 'normal',
                                        padding: '10px 15px',
                                    }}
                                >
                                    {tab}
                                </Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                </Col>

                <Col xs={12} md={9} className="mt-4">
                    <h5 className="fw-bold mb-3">{activeTab} Plans</h5>
                    {renderPlans()}
                </Col>
            </Row>

            {/* QR Code Modal */}
            <Modal show={showQR} onHide={() => setShowQR(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Scan to Pay</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <p>Open your UPI app and scan this QR code to complete the recharge.</p>
                    {deepLink && <QRCodeCanvas value={deepLink} size={200} />}
                    <p className="mt-3">Or copy this link:</p>
                    <Form.Control value={deepLink} readOnly className="mb-2" />
                    <Button
                        variant="outline-secondary"
                        onClick={() => navigator.clipboard.writeText(deepLink)}
                    >
                        Copy UPI Link
                    </Button>
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default ShowPlans;
