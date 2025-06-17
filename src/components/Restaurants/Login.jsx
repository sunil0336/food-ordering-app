import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () => {
        dispatch({ type: 'auth/login' });
        navigate('/cart');
    }
    const handleLogout = () => {
        dispatch({ type: 'auth/logout' });
        navigate('/');
    }
    
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Login Page</h1>
      <button
        onClick={handleLogin}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
      >
        Login
      </button>
      <button
        onClick={handleLogout}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
      >
        Logout
      </button>
    </div>
    
  )
}

export default Login