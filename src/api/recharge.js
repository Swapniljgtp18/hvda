import axios from 'axios';

export const getRechargePlans = async ({ operator, mobile, circle, token }) => {
  const response = await axios.get(
    'https://lms.codemodulo.in/recharge/v1/recharge/plans',
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        operator: operator.toLowerCase(), 
        mobile,
        circle,
        type: 'prepaid'
      }
    }
  );

  return response.data.data; // because your API returns `{ data: { plans: { ... } } }`
};
