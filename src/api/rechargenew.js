import axios from 'axios';

/**
 * Initiates a mobile recharge using wallet balance or UPI fallback
 * @param {Object} payload - recharge details
 * @param {string} token - user's auth token
 * @returns {Object} data { deep_link, recharge_id, status, etc. }
 */
export const initiateRecharge = async (payload, token) => {
  try {
    const response = await axios.post(
      'https://lms.codemodulo.in/recharge/v1/recharge/initiate',
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const result = response.data;

    // 🔍 Logical error handling
    const rechargeStatus = result?.data?.recharge_status;
    const statusCode = result?.status_code;

    if (statusCode !== 200 || rechargeStatus !== 'recharge_success') {
      const reason =
        result?.data?.provider_resp?.recharge_partner_status_text ||
        'Recharge failed.';
      throw new Error(reason);
    }

    return result.data;

  } catch (err) {
    console.error("❌ Recharge Error:", err.message);
    throw err;
  }
};

