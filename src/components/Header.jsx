import React from 'react';
import { NavLink } from 'react-router-dom'; 

function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

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

        <ul className="hidden md:flex space-x-2 font-bold"> 
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
            <NavLink to="/cart" className={activeLinkClass}>Cart</NavLink>
          </li>
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
              <NavLink to="/cart" className={activeLinkClass} onClick={() => setMenuOpen(false)}>Cart</NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Header;
