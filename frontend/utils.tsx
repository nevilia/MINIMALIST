import {jwtDecode} from 'jwt-decode';

export const getUserIdFromToken = () => {
  const token = localStorage.getItem('token');
  if (token) {
    const decodedToken = jwtDecode<{ userId: string }>(token);
    return decodedToken.userId;
  }
  return null; // Return null if token is not found or invalid
};
