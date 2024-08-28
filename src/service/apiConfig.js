import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_API;
const refreshEndpoint = process.env.REACT_APP_BASE_API;

// Define a variable to hold the Redux store instance
let reduxStore;

// Function to set the Redux store instance
export const setReduxStore = (store) => {
  reduxStore = store;
};

// Axios instance with interceptors for handling headers
const apiWithHeaders = axios.create({
  baseURL: baseUrl,
});


apiWithHeaders.interceptors.request.use((config) => {
  if (!reduxStore) {
    throw new Error('Redux store not set. Please set the store using setReduxStore function.');
  }
  const state = reduxStore.getState();
  const token = state.auth.token; 
  // console.log(config.headers,'config.headers')
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  if (config.headers.formData == 'true') {
    config.headers['Content-Type'] = 'multipart/form-data';
    config.headers['Accept'] = 'application/json'
  }

  return config;
});

//to do refresh token logic
apiWithHeaders.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const refreshToken = localStorage.getItem('refreshToken');

    if (error.response.status === 401 && !originalRequest._retry && refreshToken) {
      originalRequest._retry = true;

      try {
        const response = await axios.post(refreshEndpoint, { refreshToken });
        const newAccessToken = response.data.accessToken;

        localStorage.setItem('accessToken', newAccessToken);

        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;  
        return axios(originalRequest);
      } catch (refreshError) {
        console.log('Refresh token failed', refreshError);
      }
    }

    return Promise.reject(error);
  },
);

// Axios instance without interceptors for signup and login purposes
const apiWithoutHeaders = axios.create({
  baseURL: baseUrl,
});

export { apiWithHeaders, apiWithoutHeaders };
