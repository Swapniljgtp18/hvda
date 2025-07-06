import React from 'react';
import { Container, Table } from 'react-bootstrap';

const transactions = [
  {
    created_at: 1751634279886,
    wallet_transaction_id: 'RW3243964071425227',
    payin_id: '0704324564057580038386',
    payment_status: 'payment_completed',
    recharge_amount: 10.0,
  },
  {
    created_at: 1751742677428,
    wallet_transaction_id: 'RW1056675448188625',
    payin_id: '0705312399741179424071',
    payment_status: null,
    recharge_amount: 10.0,
  },
  {
    created_at: 1751747322537,
    wallet_transaction_id: 'RW3070091732479770',
    payin_id: '0705176333395371370251',
    payment_status: null,
    recharge_amount: 10.0,
  },
  {
    created_at: 1751748109445,
    wallet_transaction_id: 'RW2444044170551266',
    payin_id: '0705135853000011343125',
    payment_status: null,
    recharge_amount: 10.0,
  },
  {
    created_at: 1751749150747,
    wallet_transaction_id: 'RW2530378862969630',
    payin_id: '0705432951620312927264',
    payment_status: null,
    recharge_amount: 10.0,
  },
  {
    created_at: 1751749192096,
    wallet_transaction_id: 'RW4188995900686556',
    payin_id: '0705205819973968537803',
    payment_status: null,
    recharge_amount: 10.0,
  },
  {
    created_at: 1751749197745,
    wallet_transaction_id: 'RW1266286379945062',
    payin_id: '0705815608295914857282',
    payment_status: null,
    recharge_amount: 10.0,
  },
  {
    created_at: 1751749203566,
    wallet_transaction_id: 'RW1996803484750238',
    payin_id: '0705238368209807589231',
    payment_status: null,
    recharge_amount: 10.0,
  },
  {
    created_at: 1751749210260,
    wallet_transaction_id: 'RW3218467672327683',
    payin_id: '0705234536683197413969',
    payment_status: null,
    recharge_amount: 10.0,
  },
  {
    created_at: 1751749216459,
    wallet_transaction_id: 'RW2209575223232053',
    payin_id: '0705298992945405069439',
    payment_status: null,
    recharge_amount: 10.0,
  },
];

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleString();
};

const History = () => {
  return (
    <Container className="py-4">
      <h4 className="mb-4 text-center">Transaction History</h4>
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
            <tr key={txn.wallet_transaction_id}>
              <td>{index + 1}</td>
              <td>{txn.wallet_transaction_id}</td>
              <td>{txn.payin_id}</td>
              <td>{txn.recharge_amount.toFixed(2)}</td>
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
    </Container>
  );
};

export default History;
