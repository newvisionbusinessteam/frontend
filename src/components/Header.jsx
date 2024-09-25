import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div className="w-full fixed top-0 left-0 z-50">
      <div className="bg-blue-600 text-white text-center py-1 text-xs sm:text-sm">
        We master franchise rights for Punjab, Himachal Pradesh, & Chandigarh
      </div>
      
      <Navbar/>
    </div>
  );
};

export default Header;