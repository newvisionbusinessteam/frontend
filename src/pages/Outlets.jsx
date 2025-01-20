import React from 'react';
import PizzaImage from '../assets/pizza.webp'; 

const Outlets = () => {
  return (
    <div className="py-20 bg-white px-10 md:px-8 lg:px-48">

      <div className="text-center mb-12">
        <h3 className="text-sm md:text-base text-blue-500 font-semibold mb-2">Our Outlets</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Experience Our Culinary Delights Across Locations</h2>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-8 border-b-4 border-l-4 border-blue-500">

        <div className="w-full md:w-1/2">
          <img
            src={PizzaImage} 
            alt="Image1"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Where Taste Meets You</h3>
          <p className="text-gray-600 mb-4 text-md md:text-lg">
          Discover our restaurants located in different cities, each offering a unique dining experience. Visit any of our outlets to enjoy our delicious menu and warm hospitality.
          </p>
          <ul className="space-y-4 text-md md:text-lg">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">📍</span>
              <p className="text-gray-600">Punjab</p>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">📍</span>
              <p className="text-gray-600">Himachal Pradesh</p>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">📍</span>
              <p className="text-gray-600">Chandigarh</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Outlets;
