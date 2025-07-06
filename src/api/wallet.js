// src/api/wallet.js
import axios from 'axios';

// Axios instance with base config
const API = axios.create({
  baseURL: 'https://lms.codemodulo.in/recharge/v1', // Uses CRA proxy to avoid CORS
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json', // ensure correct response type
  },
});

/**
 * Add funds to the user's wallet
 * @param {Object} payload - { amount, email, token }
 * @returns {Object} response.data.data
 */
export const addFunds = async ({ amount, email, token }) => {
  const payload = {
    amount: parseFloat(amount),
    customer_email: email,
  };

  console.log("➡️ [wallet.js] Preparing to call Wallet Top-Up API");
  console.log("🟡 Payload:", payload);
  console.log("🟡 Token:", token?.slice(0, 20) + '...'); // Shorten log for security

  try {
    const response = await API.post(
      '/recharge/wallet/top-up',
      payload,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json', // override just in case
          'Accept': 'application/json',
        },
      }
    );

    console.log("✅ [wallet.js] API call success:", response.data);
    return response.data.data;

  } catch (error) {
    console.error("❌ [wallet.js] Wallet Top-Up failed.");

    if (error.response) {
      // Server responded with a status
      console.error("Status:", error.response.status);
      console.error("Response:", error.response.data);
    } else if (error.request) {
      // Request was made but no response
      console.error("❌ No response received from server.");
    } else {
      // Something else failed
      console.error("❌ Request setup error:", error.message);
    }

    throw error;
  }
};


/**
 * Check wallet top-up status
 * @param {string} payinId
 * @param {string} token
 */
export const checkWalletTopupStatus = async (payinId, token) => {
  try {
    const response = await API.get(`/recharge/wallet/${payinId}/status`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (err) {
    console.error("❌ [wallet.js] Error fetching wallet top-up status:", err);
    throw err;
  }
};

/**
 * Get wallet balance for user
 * @param {string} email
 * @param {string} token
 */
export const getWalletBalance = async (email, token) => {
  try {
    const response = await API.get(`/user/balance/${email}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data?.data?.balance;
  } catch (err) {
    console.error("❌ [wallet.js] Error fetching wallet balance:", err);
    throw err;
  }
};
