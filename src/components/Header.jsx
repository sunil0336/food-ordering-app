import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../slice/authSlice';
import { FaShoppingCart } from 'react-icons/fa';

function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  // Use qty/quantity fallback for total items
  const totalItems = cartItems.reduce((total, item) => total + (item.qty || item.quantity || 1), 0);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const activeLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-700 bg-blue-100 px-3 py-2 rounded-md transition-colors duration-200"
      : "text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md transition-colors duration-200 hover:bg-gray-100";

  return (
    <nav className="sticky top-0 z-10 p-4 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <NavLink to="/" className="text-gray-700">Food Ordering</NavLink>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>

        <ul className="hidden md:flex space-x-2 font-bold items-center">
          <li>
            <NavLink to="/" className={activeLinkClass}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={activeLinkClass}>About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={activeLinkClass}>Contact Us</NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `${activeLinkClass({ isActive })} relative flex items-center`
              }
            >
              <FaShoppingCart className="text-xl" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-1.5 py-0.5 text-xs font-bold shadow">
                  {totalItems}
                </span>
              )}
            </NavLink>
          </li>
          
          {isAuthenticated ? (
            <li>
              <button
                onClick={() => {
                  dispatch(logout());
                }}
              >
                Logout
              </button>
            </li>
          ) : (
            <li>
              <NavLink to="/login" className={activeLinkClass}>Login</NavLink>
            </li>
          )}
        </ul>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-2">
          <ul className="flex flex-col space-y-1 font-bold bg-white rounded-md shadow px-4 py-2">
            <li>
              <NavLink to="/" className={activeLinkClass} onClick={() => setMenuOpen(false)}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={activeLinkClass} onClick={() => setMenuOpen(false)}>About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={activeLinkClass} onClick={() => setMenuOpen(false)}>Contact Us</NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `${activeLinkClass({ isActive })} relative flex items-center`
                }
                onClick={() => setMenuOpen(false)}
              >
                <FaShoppingCart className="text-xl" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-1.5 py-0.5 text-xs font-bold shadow">
                    {totalItems}
                  </span>
                )}
              </NavLink>
            </li>
            {isAuthenticated ? (
              <li>
                <button
                  onClick={() => {
                    dispatch(logout());
                    setMenuOpen(false);
                  }}
                >
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <NavLink to="/login" className={activeLinkClass} onClick={() => setMenuOpen(false)}>Login</NavLink>
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Header;
