import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.auth.users);

  // State for form fields, error, and password visibility
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!form.username || !form.password) {
      setError('Please enter both username and password.');
      return;
    }
    const user = users.find((u) => u.username === form.username);
    if (!user) {
      setError('User does not exist.');
      return;
    }
    if (user.password !== form.password) {
      setError('Incorrect password.');
      return;
    }
    dispatch({ type: 'auth/login', payload: { username: form.username, password: form.password } });
    navigate('/cart');
  };

  return (
    <div
      className="flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 py-8"
      style={{ minHeight: 'calc(100vh - 68px)' }} // Adjust 64px to your header's height
    >
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 mx-2">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label htmlFor="username" className="block text-sm font-semibold text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={form.username}
              onChange={handleChange}
              className="w-full p-3 border-2 border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              placeholder="Enter username"
              autoComplete="username"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full p-3 border-2 border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition pr-10"
                placeholder="Enter password"
                autoComplete="current-password"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400"
                onClick={() => setShowPassword((prev) => !prev)}
                tabIndex={-1}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl shadow hover:from-purple-600 hover:to-pink-600 transition"
          >
            Login
          </button>
          <div className="text-center mt-4">
            <span className="text-gray-600 text-sm">Don't have an account?</span>
            <Link
              to="/register"
              className="ml-2 text-purple-600 font-semibold hover:underline"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;