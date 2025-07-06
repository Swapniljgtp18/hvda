import axios from 'axios';

const API = axios.create({
  baseURL: 'https://lms.codemodulo.in/recharge/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchElectricityBillers = async (token) => {
  const response = await API.post(
    '/recharge/billers',
    { category: 'Electricity' },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data?.data || [];
};
