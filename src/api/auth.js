import axios from "axios";
// ✅ Send OTP
export const sendOtp = async (email) => {
  const partnerId = 'HVDA638734';
  const response = await axios.post('https://lms.codemodulo.in/recharge/v1/user/otp', {
    email,
    partner_id: partnerId,
  });
  return response.data;
};

// ✅ Verify OTP
export const verifyOtp = async (email, otp) => {
  const partnerId = 'HVDA638734';

  const response = await axios.post('https://lms.codemodulo.in/recharge/v1/user/sign-in', {
    email,
    otp: otp,

    partner_id: partnerId,
  });

  console.log(response);
  console.log(response.data.data.token);


  const token = response.data.data.token;
  const emailFromResponse = response.data.data.email; // add this line

  if (token) {
    localStorage.setItem('token', token);
    // localStorage.setItem('email', emailFromResponse); // ✅ ADD THIS LINE

  }

  return response.data.data;
};
