import React from "react";
import { Container } from "react-bootstrap";

const Community = () => {
  return (
    <Container className="py-5">
      <h1 className="fw-bold mb-4 text-center">Community</h1>

      <section className="mb-4">
        <h5 className="fw-bold">Welcome to the Hvda User Community</h5>
        <p>
          Hvda’s community brings together users who rely on our platform daily for secure bill payments, mobile and DTH recharges, FASTag top-ups, and wallet transactions. It’s a space for users to connect, share experiences, and help each other with tips and feedback.
        </p>
      </section>

      <section className="mb-4">
        <h5 className="fw-bold">Why Join the Hvda Community?</h5>
        <ul>
          <li>Get updates on new features, services, and offers</li>
          <li>Share feedback to improve our platform</li>
          <li>Connect with other users to solve common issues</li>
          <li>Contribute helpful tips and suggestions</li>
          <li>Participate in community-driven beta tests and events</li>
        </ul>
      </section>

      <section className="mb-4">
        <h5 className="fw-bold">Community Guidelines</h5>
        <p>
          We promote respectful, safe, and constructive discussions. Please do not share sensitive information like OTPs, wallet PINs, or account details. Let’s work together to keep this community trustworthy and helpful.
        </p>
      </section>

      <section className="mb-4">
        <h5 className="fw-bold">Contribute Ideas</h5>
        <p>
          Many improvements in Hvda come directly from user suggestions. Have an idea for a better recharge flow or a new biller to add? Let us know. Your input shapes the future of our services.
        </p>
      </section>

      <section className="mb-4">
        <h5 className="fw-bold">Events & Contests</h5>
        <p>
          Join upcoming in-app events, recharge contests, feedback drives, and early-access programs. These events reward active users and provide a platform to voice opinions that drive change.
        </p>
      </section>

      <section className="mb-4">
        <h5 className="fw-bold">Be a Helper</h5>
        <p>
          If you’ve found solutions to recharge failures, wallet issues, or bill payment delays, share your knowledge with fellow users. Your experience can save someone else time and stress.
        </p>
      </section>

      <section className="mb-4">
        <h5 className="fw-bold">Safe & Moderated</h5>
        <p>
          The community is monitored to ensure everyone feels welcome and safe. Posts or comments that are abusive, fraudulent, or misleading will be removed, and accounts may be restricted.
        </p>
      </section>

      <section className="mb-4">
        <h5 className="fw-bold">Need Help?</h5>
        <p>
          If you face issues or want to share a concern, you can reach our community support via in-app feedback or email. We’re listening and here to support you.
        </p>
      </section>

      <section>
        <h5 className="fw-bold">Built Together, Grown Together</h5>
        <p>
          Every recharge, bill payment, or wallet load you make contributes to a smarter digital India. Hvda is more than an app — it's a movement made stronger by its users. Let’s build together.
        </p>
      </section>
    </Container>
  );
};

export default Community;
