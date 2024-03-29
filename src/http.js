import axios from 'axios';

const DEFAULT_CONFIG = {
  url: '',
  silent: false,
  useApiNameSpace: true,
  handleCustomError: false,
  headers: {},
  data: {},
};

axios.defaults.baseURL = 'http://localhost:3001';

// axios.interceptors.request.use(
//   config => {
//     if (!config.headers.Authorization) {
//       config.headers.Authorization = `Bearer ${authContext.getAccessToken()}`;
//     }

//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   },
// );

const http = async (method = 'get', userConfig = {}) => {
  const config = {
    ...DEFAULT_CONFIG,
    ...userConfig,
  };

  const { headers, data } = config;
  const paramsKey = method === 'get' ? 'params' : 'data';
  const { url } = config;
  const requestHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    ...headers,
  };

  try {
    const response = await axios({
      method,
      url,
      headers: requestHeaders,
      [paramsKey]: data,
    });

    const { data: responseData } = response;
    if (responseData) {
      return responseData;
    }
  } catch (error) {
    const { response } = error;

    if (response && response.status) {
      const { data: responseData } = response;
      if (responseData) {
        return responseData;
      }
    }
  }
};

export const getRequest = config => http('get', config);

export const postRequest = config => http('post', config);

export const putRequest = config => http('put', config);

export const patchRequest = config => http('patch', config);

export const deleteRequest = config => http('delete', config);
