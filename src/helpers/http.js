import axios from 'axios';

const DEFAULT_CONFIG = {
  url: '',
  silent: false,
  useApiNameSpace: true,
  handleCustomError: false,
  authRequired: true,
  headers: {},
  data: {},
};

axios.defaults.baseURL = 'http://localhost:3001';
const getAuthToken = () => localStorage.getItem('access_token');

const http = async (method = 'get', userConfig = {}) => {
  const config = {
    ...DEFAULT_CONFIG,
    ...userConfig,
  };

  const { headers, data, authRequired } = config;
  const paramsKey = method === 'get' ? 'params' : 'data';
  const { url } = config;
  const requestHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    ...(authRequired ? { authorization: getAuthToken() } : {}),
    ...headers,
  };

  try {
    const response = await axios({
      method,
      url,
      headers: requestHeaders,
      [paramsKey]: data,
    });

    return response.data;
  } catch (error) {
    const { response } = error;

    return response.data;
  }
};

export const getRequest = config => http('get', config);

export const postRequest = config => http('post', config);

export const putRequest = config => http('put', config);

export const patchRequest = config => http('patch', config);

export const deleteRequest = config => http('delete', config);
