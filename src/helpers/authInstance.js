import axios from 'axios';

const authInstance = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 6000,
});

authInstance.interceptors.response.use(response => {
  const accessToken = response.headers['authorization']?.replace('Bearer ', '');

  if (accessToken) {
    localStorage.setItem('access_token', accessToken);
  }

  return response;
});

export const authRequest = async (endpoint, data) => {
  try {
    const response = await authInstance({
      url: endpoint,
      method: 'POST',
      data: data,
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    } else {
      throw error;
    }
  }
};
