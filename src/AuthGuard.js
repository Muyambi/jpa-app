import  { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { useNavigate } from 'react-router-dom';

function AuthGuard({ children }) {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  // If the user is not authenticated, redirect to the login page
  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  // Otherwise, render the children components
  return children;
}

export default AuthGuard;
