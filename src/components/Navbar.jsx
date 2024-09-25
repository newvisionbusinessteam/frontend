import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const activeClassName = "font-bold md:border-b-4 md:border-blue-500 md:pb-2";

  return (
    <nav className="bg-white text-gray-800 p-1 shadow-md fixed top-0 left-0 w-full z-40 mt-7">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-0">
        <div className="flex items-center">
          <NavLink to="/" className="text-xl font-bold">
            <img src={logo} alt='logo' className='h-20 w-45'/>
          </NavLink>
        </div>
        <div className="hidden md:flex space-x-6">
          <NavLink to="/" exact className={({ isActive }) => isActive ? activeClassName : "pb-2"}>
            Home
          </NavLink>
          <NavLink to="/outlets" className={({ isActive }) => isActive ? activeClassName : "pb-2"}>
            Our outlets
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? activeClassName : "pb-2"}>
            About us
          </NavLink>
          <NavLink to="franchise" className={({ isActive }) => isActive ? activeClassName : "pb-2"}>
            Franchise
          </NavLink>
        </div>

        <div className="flex items-center space-x-4 pr-4 md:pr-0"> 
          <NavLink to="/order" className="hidden md:inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
            Order Now
          </NavLink>
          <button onClick={toggleMenu} className="md:hidden focus:outline-none">
            <div
              className={`block w-6 h-0.5 bg-black mb-1 transform transition duration-300 ${isOpen ? 'opacity-0' : ''}`}
            ></div>
            <div
              className={`block w-6 h-0.5 bg-black mb-1 transform transition duration-300 ${isOpen ? 'rotate-45 translate-y-1' : ''}`}
            ></div>
            <div
              className={`block w-6 h-0.5 bg-black transform transition duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : ''}`}
            ></div>
          </button>
        </div>
      </div>
        {isOpen && (
          <div
            className="md:hidden bg-white shadow-md"
          >
            <div className="flex flex-col items-start space-y-4 mt-4 pb-1 text-gray-800 px-4">
              <NavLink to="/" exact className={({ isActive }) => isActive ? "font-bold" : ""} onClick={toggleMenu}>
                Home
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => isActive ? "font-bold" : ""} onClick={toggleMenu}>
                Our outlets
              </NavLink>
              <NavLink to="/mission" className={({ isActive }) => isActive ? "font-bold" : ""} onClick={toggleMenu}>
                About us
              </NavLink>
              <NavLink to="/gallery" className={({ isActive }) => isActive ? "font-bold" : ""} onClick={toggleMenu}>
                Franchise
              </NavLink>
              <NavLink to="/donate" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md w-full text-center" onClick={toggleMenu}>
                Order Now
              </NavLink>
            </div>
          </div>
        )}
    </nav>
  );
};

export default Navbar;