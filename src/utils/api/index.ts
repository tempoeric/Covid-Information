import axios from 'axios';
import { objectToQueryString } from './url';
import { defaults } from './defaults';
import { checkStatus } from './checkStatus';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const api = (url, variables, method) =>
  new Promise((resolve, reject) => {
    let responseType: any = undefined;
    if (url === 'stock/export' || url === 'product/export') {
      responseType = 'blob';
    }
    axios({
      url: `${defaults.baseURL}${url}`,
      method,
      headers: defaults.headers(),
      params: method === 'get' ? variables : undefined,
      responseType,
      data: method !== 'get' ? variables : undefined,
      paramsSerializer: objectToQueryString,
    }).then(
      response => {
        // @ts-ignore
        resolve(checkStatus(response));
      },
      error => {
        let errorInformation;
        if (error.response) {
          // TODO: Handle special errors here. ( waiting for exception codes implementation )
          // sample : if (error.response.data.error.code === 'INVALID_TOKEN')
          if (error?.response?.data?.message) {
            errorInformation = [error.response.data.message];
          } else if (
            error?.response?.data?.hasOwnProperty('errors') &&
            error?.response?.data?.errors[0]?.title ===
              'BadCredentialsException'
          ) {
            errorInformation = error.response.data.errors;
          } else if (
            error?.response?.data?.hasOwnProperty('errors') &&
            (error?.response?.data?.errors[0]?.title ===
              'AccessDeniedException' ||
              error?.response?.data?.errors[0].title ===
                'AccountNumberException')
          ) {
            errorInformation = error.response.data.errors;
          } else if (
            // TODO: this should be updated with proper code and title
            error?.response?.data?.hasOwnProperty('errors') &&
            error?.response?.data?.errors[0]?.title === 'entity not found'
          ) {
            errorInformation = error.response.data.errors;
          } else {
            errorInformation = defaults.error;
          }

          reject(errorInformation);
        }
        reject(errorInformation);
      },
    );
  });

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: (url, data) => api(url, data, 'get'),
  post: (url, data) => api(url, data, 'post'),
  delete: (url, data) => api(url, data, 'delete'),
  put: (url, data) => api(url, data, 'put'),
  patch: (url, data) => api(url, data, 'patch'),
};
