import axios from 'axios';
/**
 * Fetches recharge payment history for a customer
 * @param {string} email - customer_email
 * @param {string} token - auth token
 * @returns {Array} list of recharge payments
 */
export const getRechargePayments = async (email, token) => {
  try {
    const response = await axios.get(
      `https://lms.codemodulo.in/recharge/v1/recharge/payments/${email}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data?.data?.txns || [];
  } catch (err) {
    console.error("❌ Failed to fetch recharge payments:", err?.response?.data || err.message);
    throw err;
  }
};