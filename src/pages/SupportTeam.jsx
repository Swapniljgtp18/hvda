import React from "react";
import { Container } from "react-bootstrap";

const SupportTeam = () => {
  return (
    <Container className="py-5">
      <h1 className="fw-bold mb-4 text-center">Support Team</h1>

      <section className="mb-4">
        <h5 className="fw-bold">Our Commitment</h5>
        <p>
          We are committed to delivering fast and reliable support to help you with bill payments, mobile/DTH recharges, FASTag top-ups, and wallet services. Whether it's a failed recharge or a wallet issue, our support team is here to assist you.
        </p>
      </section>

      <section className="mb-4">
        <h5 className="fw-bold">When to Contact Support</h5>
        <p>You can contact us for help with:</p>
        <ul>
          <li>Failed or delayed bill payments</li>
          <li>Recharge not reflecting on mobile, DTH, or FASTag</li>
          <li>Wallet load issues or incorrect deductions</li>
          <li>Refund not received within expected time</li>
          <li>Payment stuck during checkout</li>
          <li>General queries or feedback</li>
          <li>Reporting suspicious activity or fraud</li>
        </ul>
      </section>

      <section className="mb-4">
        <h5 className="fw-bold">Wallet Support</h5>
        <p>
          You can easily load money into your Hvda wallet using your debit/credit card, net banking, or other supported payment methods. Wallet balance can be used for quick and secure transactions across all services.
        </p>
        <p>
          If your wallet load fails but the amount is debited from your bank, it is usually refunded within 3–5 business days. If not, please contact support with the transaction ID.
        </p>
      </section>

      <section className="mb-4">
        <h5 className="fw-bold">How to Reach Us</h5>
        <p>We’re here for you through multiple channels:</p>
        <ul>
          <li><strong>Email Support:</strong> 24x7 response via <a href="mailto:support@hvda.online">support@hvda.online</a></li>
          <li><strong>Phone Support:</strong> Available 9 AM – 9 PM IST (Monday to Saturday)</li>
          <li><strong>In-App Chat:</strong> For real-time help during service hours</li>
          <li><strong>Help Center:</strong> Browse FAQs and self-help guides in the app or on our website</li>
        </ul>
      </section>

      <section className="mb-4">
        <h5 className="fw-bold">Response Time</h5>
        <p>
          - Email queries: typically answered within 24 hours<br />
          - Phone/Chat: Immediate support during working hours<br />
          - Escalated issues: Resolved within 48–72 hours
        </p>
      </section>

      <section className="mb-4">
        <h5 className="fw-bold">Security and Privacy</h5>
        <p>
          Your privacy and security are our top priorities. We never ask for your OTPs, card details, or passwords. Always use the official Hvda app or website, and report any suspicious activity immediately.
        </p>
      </section>

      <section className="mb-4">
        <h5 className="fw-bold">Escalation Process</h5>
        <p>
          If you're unsatisfied with our initial support, your case will be escalated to a senior team member. Every concern is tracked until resolved with fair and timely updates.
        </p>
      </section>

      <section className="mb-4">
        <h5 className="fw-bold">Feedback & Suggestions</h5>
        <p>
          We value your input. Share your ideas or feedback via email or our in-app form — it helps us improve the Hvda experience.
        </p>
      </section>

      <section className="mb-4">
        <h5 className="fw-bold">Support Hours</h5>
        <p>
          <strong>Live Support:</strong> Mon–Sat, 9:00 AM to 9:00 PM IST<br />
          <strong>Email Support:</strong> Available 24x7, including holidays
        </p>
      </section>

      <section className="mb-4">
        <h5 className="fw-bold">Contact Information</h5>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:support@hvda.online">support@hvda.online</a></li>
        </ul>
      </section>
    </Container>
  );
};

export default SupportTeam;
