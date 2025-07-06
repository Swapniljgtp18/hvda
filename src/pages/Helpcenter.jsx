import React from "react";
import { Container } from "react-bootstrap";

const HelpCenter = () => {
  return (
    <Container className="py-5">
      <h1 className="fw-bold mb-4 text-center">Help Center</h1>

      <section className="mb-4">
        <h5 className="fw-bold">What is Hvda?</h5>
        <p>
          Hvda is a digital platform that allows users to quickly and securely pay utility bills, recharge mobile/DTH services, and top-up FASTag accounts — all in one place.
        </p>
      </section>

      <section className="mb-4">
        <h5 className="fw-bold">How to Pay Utility Bills?</h5>
        <p>
          To pay your electricity, water, gas, or broadband bill:
          <ul>
            <li>Navigate to the "Bill Payments" section</li>
            <li>Select the biller and enter your consumer number</li>
            <li>View bill details and proceed to payment using your preferred method</li>
          </ul>
        </p>
      </section>

      <section className="mb-4">
        <h5 className="fw-bold">How to Recharge Mobile or DTH?</h5>
        <p>
          For mobile or DTH recharge:
          <ul>
            <li>Select “Recharge” from the home screen</li>
            <li>Choose between Mobile or DTH</li>
            <li>Enter number/card ID and select plan</li>
            <li>Complete payment securely</li>
          </ul>
          Recharges are typically processed instantly.
        </p>
      </section>

      <section className="mb-4">
        <h5 className="fw-bold">How to Recharge FASTag?</h5>
        <p>
          To recharge your FASTag:
          <ul>
            <li>Go to the "FASTag Recharge" section</li>
            <li>Select your provider (e.g., NHAI, ICICI, Paytm, etc.)</li>
            <li>Enter vehicle number or FASTag ID</li>
            <li>Choose an amount and pay</li>
          </ul>
          Your FASTag balance is updated in real-time or within minutes.
        </p>
      </section>

      <div className=" text-center fw-bold mb-2 mt-2"></div>

      <section className="mb-4">
        <h5 className="fw-bold">Payment Confirmation & History</h5>
        <p>
          After a successful transaction, you’ll receive confirmation via SMS/email. You can also check the “Transaction History” section to view or download your receipts at any time.
        </p>
      </section>

      <section className="mb-4">
        <h5 className="fw-bold">Refunds for Failed Transactions</h5>
        <p>
          If a payment fails but the amount is debited, it is automatically refunded within 2–5 business days. You can track status under "Transaction History" or raise a support request if needed.
        </p>
      </section>

      <section className="mb-4">
        <h5 className="fw-bold">Customer Support</h5>
        <p>
          We're here to assist you with any issues or queries:
        </p>
        <ul>
          <li>Email: support@Hvda.com</li>
          <li>Phone: 1800-123-4567 (Toll-Free)</li>
          <li>Live Chat: Available 9 AM – 9 PM daily</li>
        </ul>
      </section>

      <section className="mb-4">
        <h5 className="fw-bold">Security Tips</h5>
        <p>
          Your safety is our priority:
          <ul>
            <li>Use only the official Hvda app or website</li>
            <li>Never share OTPs, passwords, or payment info</li>
            <li>We never ask for personal details via phone or message</li>
          </ul>
        </p>
      </section>
    </Container>
  );
};

export default HelpCenter;
