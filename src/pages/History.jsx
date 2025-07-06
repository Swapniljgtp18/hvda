import React, { useEffect, useState } from 'react';
import { Container, Table, Spinner, Alert } from 'react-bootstrap';
import { getRechargePayments } from '../api/history'; // ✅ Ensure this file returns response.data.data

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleString();
};

const History = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchPayments = async () => {
    const email = localStorage.getItem('email');
    const token = localStorage.getItem('token');

    if (!email || !token) {
      setError('Missing authentication. Please log in again.');
      return;
    }

    try {
      setLoading(true);
      const payments = await getRechargePayments(email, token);

      if (!Array.isArray(payments)) {
        console.warn('⚠️ Unexpected API format:', payments);
        setTransactions([]);
      } else {
        console.log("📄 Recharge Transactions:", payments);
        setTransactions(payments);
      }
    } catch (err) {
      console.error('❌ Failed to fetch payment history:', err);
      setError('Unable to fetch payment history.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  return (
    <Container className="py-4">
      <h4 className="mb-4 text-center">Transaction History</h4>

      {loading && (
        <div className="text-center my-4">
          <Spinner animation="border" />
        </div>
      )}

      {error && (
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      )}

      {!loading && !error && transactions.length === 0 && (
        <Alert variant="info" className="text-center">
          No transactions found.
        </Alert>
      )}

      {!loading && transactions.length > 0 && (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Wallet Txn ID</th>
              <th>Payin ID</th>
              <th>Amount (₹)</th>
              <th>Status</th>
              <th>Date & Time</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn, index) => (
              <tr key={txn.wallet_transaction_id || index}>
                <td>{index + 1}</td>
                <td>{txn.wallet_transaction_id || '--'}</td>
                <td>{txn.payin_id || '--'}</td>
                <td>{txn.recharge_amount?.toFixed(2) || '0.00'}</td>
                <td>
                  {txn.payment_status === 'payment_completed'
                    ? '✅ Completed'
                    : '❌ Pending'}
                </td>
                <td>{formatDate(txn.created_at)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default History;
