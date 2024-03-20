import axios from 'axios';

const authAxios = axios.create({
  baseURL: 'http://localhost:3001',
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
});

// authAxios.interceptors.request.use(
//   config => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   error => Promise.reject(error)
// );

// authAxios.interceptors.response.use(
//   response => response,
//   error => {
//     if (error.response && error.response.status === 401) {
//       console.error('Unauthorized access');
//     }
//     return Promise.reject(error);
//   }
// );

export const registrUser = async ({ name, email, password }) => {
  try {
    const response = await authAxios.post('/signup', {
      user: {
        name,
        email,
        password,
      },
    });
    const { data, headers } = response;
    const accessToken = headers['authorization']?.replace('Bearer ', '');
    localStorage.setItem('access_token', accessToken);
    return data;
  } catch (error) {
    const { response } = error;
    if (response.data) return response.data;
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    const response = await authAxios.post('/signin', {
      user: {
        email,
        password,
      },
    });
    const { data, headers } = response;
    const accessToken = headers['authorization']?.replace('Bearer ', '');
    localStorage.setItem('access_token', accessToken);
    return data;
  } catch (error) {
    const { response } = error;
    if (response.data) return response.data;
  }
};
