import { v4 as uuidv4 } from 'uuid';

export const defaults = {
  baseURL: `${process.env.REACT_APP_API_URL}`,
  headers: () => ({
    'Content-Type': 'application/json',
    'X-Request-ID': uuidv4(),
  }),
  error: {
    code: 'INTERNAL_ERROR',
    message:
      'Something went wrong. Please check your internet connection or contact our support.',
    status: 503,
    data: {},
  },
};
