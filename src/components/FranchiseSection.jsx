import React from 'react';
import regionImage from '../assets/pizza.png'; // Replace this with the actual path to the image

const FranchiseSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left py-16 px-4 md:px-8 lg:px-16 bg-white">
      {/* Text Section */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
          Franchise Opportunities
        </h2>
        <p className="text-md md:text-lg text-gray-700">
          We master franchise rights for Punjab, Himachal Pradesh, & Chandigarh.
        </p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2">
        <img src={regionImage} alt="Region Map Highlighting Punjab, Himachal Pradesh, & Chandigarh" className="w-full max-w-md mx-auto" />
      </div>
    </div>
  );
};

export default FranchiseSection;
