export const MODE = process.env.NODE_ENV;
export const API = process.env.NODE_ENV === 'production' ? '' : process.env.REACT_APP_API_URL;
