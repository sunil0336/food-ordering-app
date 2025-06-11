import React from 'react';
import { NavLink } from 'react-router-dom'; 

function Header() {
  const activeLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-700 bg-blue-100 px-3 py-2 rounded-md transition-colors duration-200"
      : "text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md transition-colors duration-200 hover:bg-gray-100";

  return (
    <nav className="p-4 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <NavLink to="/" className="text-gray-700">Food Ordering</NavLink>
        </div>
        <ul className="flex space-x-2 font-bold"> 
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
    </nav>
  );
}

export default Header;
