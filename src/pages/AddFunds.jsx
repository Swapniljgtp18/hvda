// import React, { useState } from "react";
// import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
// import { addFunds } from "../api/wallet";
// import { useNavigate } from "react-router-dom";

// const AddFunds = () => {
//   const [amount, setAmount] = useState("");
//   const [method, setMethod] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleAddFunds = async () => {
//     if (!amount || !method) {
//       alert("Please fill all fields.");
//       return;
//     }

//     const token = localStorage.getItem("token");
//     const email = localStorage.getItem("email");

//     if (!token || !email) {
//       alert("Missing auth info. Please log in again.");
//       return;
//     }

//     setLoading(true);

//     try {
//       console.log("🚀 Requesting Top-up with:", {
//         amount,
//         email,
//         token: token?.slice(0, 20) + "...",
//       });

//       const result = await addFunds({ amount, email, token });

//       console.log("✅ Wallet API response:", result);

//       alert("Top-up request successful!");

//       if (result?.payment_url) {
//         window.location.href = result.payment_url;
//       } else {
//         navigate("/dashboard");
//       }
//     } catch (error) {
//       console.error(" Top-up failed:", error);
//       console.log(" Full error response:", error?.response);
//       alert(
//         error?.response?.data?.message || "Top-up failed. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container className="py-5" style={{ height: "100vh" }}>
//       <Row className="justify-content-center">
//         <Col xs={12} md={8} lg={6} style={{ marginTop: "15px" }}>
//           <Card className="p-4 border-0">
//             <h4 className="mb-4 text-center fw-bold">Add Funds</h4>
//             <Form>
//               <Form.Group className="mb-3 mt-3">
//                 <Form.Label>Enter Amount</Form.Label>
//                 <Form.Control
//                   type="number"
//                   value={amount}
//                   onChange={(e) => setAmount(e.target.value)}
//                   placeholder="₹1000"
//                 />
//               </Form.Group>

//               <Form.Label className="mb-2 mt-4">Select Payment Method</Form.Label>

//               <div className="d-flex flex-column gap-3">
//                 {["PhonePe", "Google Pay", "Amazon Pay"].map((payMethod) => (
//                   <div
//                     key={payMethod}
//                     className={`d-flex align-items-center rounded p-2 ${
//                       method === payMethod ? "bg-white" : "bg-light"
//                     }`}
//                     onClick={() => setMethod(payMethod)}
//                     style={{
//                       cursor: "pointer",
//                       border:
//                         method === payMethod
//                           ? "1.5px solid black"
//                           : "1px solid transparent",
//                     }}
//                   >
//                     <Form.Check
//                       type="radio"
//                       name="paymentMethod"
//                       value={payMethod}
//                       checked={method === payMethod}
//                       onChange={(e) => setMethod(e.target.value)}
//                       className="me-2"
//                       style={{
//                         accentColor: "black",
//                       }}
//                     />
//                     <img
//                       src={`/assets/payment/${payMethod
//                         .toLowerCase()
//                         .replace(" ", "")}.svg`}
//                       alt={payMethod}
//                       width="24"
//                       height="24"
//                       className="me-2"
//                     />
//                     <span className="fw-medium">{payMethod}</span>
//                   </div>
//                 ))}
//               </div>

//               <Button
//                 variant="primary"
//                 onClick={handleAddFunds}
//                 disabled={loading}
//                 className="w-100"
//                 style={{
//                   backgroundColor: "black",
//                   borderColor: "black",
//                   marginTop: "10%",
//                   borderRadius: "30px",
//                 }}
//               >
//                 {loading ? "Processing..." : "Add Money"}
//               </Button>
//               <div className="fw-bold text-center">
//                 <div className="">

//                 </div>
//               </div>
//             </Form>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default AddFunds;


// working with modal and qr code->

// import React, { useState } from "react";
// import {
//   Container,
//   Row,
//   Col,
//   Form,
//   Button,
//   Card,
//   Modal,
// } from "react-bootstrap";
// import { addFunds } from "../api/wallet";
// import { useNavigate } from "react-router-dom";
// import { QRCodeCanvas } from "qrcode.react";

// const AddFunds = () => {
//   const [amount, setAmount] = useState("");
//   const [method, setMethod] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [paymentUrl, setPaymentUrl] = useState(null);
//   const navigate = useNavigate();

//   const isMobile = /Mobi|Android/i.test(navigator.userAgent);

//   const handleAddFunds = async () => {
//     if (!amount || !method) {
//       alert("Please fill all fields.");
//       return;
//     }

//     const token = localStorage.getItem("token");
//     const email = localStorage.getItem("email");

//     if (!token || !email) {
//       alert("Missing auth info. Please log in again.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const result = await addFunds({ amount, email, token });

//       if (result?.payment_url) {
//         if (isMobile) {
//           window.location.href = result.payment_url;
//         } else {
//           setPaymentUrl(result.payment_url);
//         }
//       } else {
//         alert("Top-up successful.");
//         navigate("/dashboard");
//       }
//     } catch (error) {
//       console.error("Top-up failed:", error);
//       alert(
//         error?.response?.data?.message || "Top-up failed. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container className="py-5" style={{ height: "100vh" }}>
//       <Row className="justify-content-center">
//         <Col xs={12} md={8} lg={6} style={{ marginTop: "15px" }}>
//           <Card className="p-4 border-0">
//             <h4 className="mb-4 text-center fw-bold">Add Funds</h4>
//             <Form>
//               <Form.Group className="mb-3 mt-3">
//                 <Form.Label>Enter Amount</Form.Label>
//                 <Form.Control
//                   type="number"
//                   value={amount}
//                   onChange={(e) => setAmount(e.target.value)}
//                   placeholder="₹1000"
//                 />
//               </Form.Group>

//               <Form.Label className="mb-2 mt-4">Select Payment Method</Form.Label>

//               <div className="d-flex flex-column gap-3">
//                 {["PhonePe", "Google Pay", "Amazon Pay"].map((payMethod) => (
//                   <div
//                     key={payMethod}
//                     className={d-flex align-items-center rounded p-2 ${method === payMethod ? "bg-white" : "bg-light"
//                       }}
//                     onClick={() => setMethod(payMethod)}
//                     style={{
//                       cursor: "pointer",
//                       border:
//                         method === payMethod
//                           ? "1.5px solid black"
//                           : "1px solid transparent",
//                     }}
//                   >
//                     <Form.Check
//                       type="radio"
//                       name="paymentMethod"
//                       value={payMethod}
//                       checked={method === payMethod}
//                       onChange={(e) => setMethod(e.target.value)}
//                       className="me-2"
//                       style={{
//                         accentColor: "black",
//                       }}
//                     />
//                     <img
//                       src={/assets/payment/${payMethod
//                         .toLowerCase()
//                         .replace(" ", "")}.svg}
//                       alt={payMethod}
//                       width="24"
//                       height="24"
//                       className="me-2"
//                     />
//                     <span className="fw-medium">{payMethod}</span>
//                   </div>
//                 ))}
//               </div>

//               <Button
//                 variant="primary"
//                 onClick={handleAddFunds}
//                 disabled={loading}
//                 className="w-100"
//                 style={{
//                   backgroundColor: "black",
//                   borderColor: "black",
//                   marginTop: "10%",
//                   borderRadius: "30px",
//                 }}
//               >
//                 {loading ? "Processing..." : "Add Money"}
//               </Button>
//             </Form>
//           </Card>
//         </Col>
//       </Row>

//       {/* QR Code Modal */}
//       <Modal show={!!paymentUrl} onHide={() => setPaymentUrl(null)} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Scan to Pay</Modal.Title>
//         </Modal.Header>
//         <Modal.Body className="text-center">
//           <p>
//             Open your UPI app (PhonePe, Google Pay, Amazon Pay) and scan this
//             QR code.
//           </p>
//           <QRCodeCanvas value={paymentUrl} size={200} />
//           <p className="mt-3">Or copy this link on your mobile:</p>
//           <Form.Control value={paymentUrl} readOnly className="mb-2" />
//         </Modal.Body>
//       </Modal>
//     </Container>
//   );
// };

// export default AddFunds;
import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Modal,
  Alert,
} from "react-bootstrap";
import { addFunds, checkWalletTopupStatus } from "../api/wallet";
import { useNavigate } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";

const AddFunds = () => {
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("");
  const [loading, setLoading] = useState(false);
  const [paymentUrl, setPaymentUrl] = useState(null);
  const [payinId, setPayinId] = useState(null);

  const navigate = useNavigate();
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  const handleAddFunds = async () => {
    if (!amount || !method) {
      alert("Please fill all fields.");
      return;
    }

    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");

    if (!token || !email) {
      alert("Missing token or email. Please log in again.");
      return;
    }

    setLoading(true);

    try {
      const result = await addFunds({ amount, email, token });

      if (result?.deep_link && result?.payment_id) {
        console.log("✅ Deep Link:", result.deep_link);
        console.log("💳 Payment ID:", result.payment_id);
        setPayinId(result.payment_id);

        if (isMobile) {
          window.location.href = result.deep_link;
        } else {
          setPaymentUrl(result.deep_link);
        }
      } else {
        alert("Top-up initiated but no UPI link returned.");
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Top-up failed:", error?.response?.data || error.message);
      alert(
        error?.response?.data?.message || "Top-up failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // 🧠 Poll for payment status
  useEffect(() => {
    if (!payinId) return;

    const token = localStorage.getItem("token");

    const interval = setInterval(async () => {
      try {
        const statusRes = await checkWalletTopupStatus(payinId, token);
        const status = statusRes?.data?.status;

        if (status === "payment_completed") {
          clearInterval(interval);
          alert("✅ Payment completed!");
          setPaymentUrl(null);
          navigate("/dashboard"); // Dashboard will fetch latest balance
        } else {
          console.log("⏳ Waiting for payment... Status:", status);
        }
      } catch (err) {
        console.error("Error checking top-up status:", err);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [payinId]);

  return (
    <Container className="py-5" style={{ height: "100vh" }}>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6} style={{ marginTop: "15px" }}>
          <Card className="p-4 border-0">
            <h4 className="mb-4 text-center fw-bold">Add Funds</h4>

            {!isMobile && (
              <Alert variant="warning" className="text-center">
                For faster payments, open this page on your mobile OR scan the QR code below after generating the link.
              </Alert>
            )}

            <Form>
              <Form.Group className="mb-3 mt-3">
                <Form.Label>Enter Amount</Form.Label>
                <Form.Control
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="₹1000"
                />
              </Form.Group>

              <Form.Label className="mb-2 mt-4">Select Payment Method</Form.Label>
              <div className="d-flex flex-column gap-3">
                {["PhonePe", "Google Pay", "Amazon Pay"].map((payMethod) => (
                  <div
                    key={payMethod}
                    className={`d-flex align-items-center rounded p-2 ${method === payMethod ? "bg-white" : "bg-light"
                      }`}
                    onClick={() => setMethod(payMethod)}
                    style={{
                      cursor: "pointer",
                      border:
                        method === payMethod
                          ? "1.5px solid black"
                          : "1px solid transparent",
                    }}
                  >
                    <Form.Check
                      type="radio"
                      name="paymentMethod"
                      value={payMethod}
                      checked={method === payMethod}
                      onChange={(e) => setMethod(e.target.value)}
                      className="me-2"
                      style={{ accentColor: "black" }}
                    />
                    <img
                      src={`/assets/payment/${payMethod
                        .toLowerCase()
                        .replace(" ", "")}.svg`}
                      alt={payMethod}
                      width="24"
                      height="24"
                      className="me-2"
                    />
                    <span className="fw-medium">{payMethod}</span>
                  </div>
                ))}
              </div>

              <Button
                variant="primary"
                onClick={handleAddFunds}
                disabled={loading}
                className="w-100"
                style={{
                  backgroundColor: "black",
                  borderColor: "black",
                  marginTop: "10%",
                  borderRadius: "30px",
                }}
              >
                {loading ? "Processing..." : "Add Money"}
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>

      <Modal show={!!paymentUrl} onHide={() => setPaymentUrl(null)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Scan to Pay</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p>
            Open your UPI app (PhonePe, Google Pay, Amazon Pay) and scan this
            QR code.
          </p>
          <QRCodeCanvas value={paymentUrl} size={200} />
          <p className="mt-3">Or copy this link on your mobile:</p>
          <Form.Control value={paymentUrl} readOnly className="mb-2" />
          <Button
            variant="outline-secondary"
            onClick={() => navigator.clipboard.writeText(paymentUrl)}
          >
            Copy UPI Link
          </Button>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default AddFunds;
