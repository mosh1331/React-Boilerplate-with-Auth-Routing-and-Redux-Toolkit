import { apiWithHeaders, apiWithoutHeaders } from './apiConfig';

export const apiAuthenticatedRequest = async (options) => {
  try {
    return await apiWithHeaders(options);
  } catch (exception) {
    return exception;
  }
};

export const apiRequest = async (options) => {
  try {
    return await apiWithoutHeaders(options);
  } catch (exception) {
    return exception;
  }
};
