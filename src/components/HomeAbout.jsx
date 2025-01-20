import React from 'react';
import { FaUtensils, FaLeaf, FaSmile, FaTruck } from 'react-icons/fa';

const HomeAbout = () => {
  const features = [
    {
      icon: <FaUtensils className="text-gray-400 text-6xl" />,
      title: 'All Kinds Of Foods',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      icon: <FaLeaf className="text-green-500 text-6xl" />,
      title: 'Fresh Foods',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      icon: <FaSmile className="text-yellow-500 text-6xl" />,
      title: 'Best Taste',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      icon: <FaTruck className="text-red-500 text-6xl" />,
      title: 'On Time Delivery',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ];

  return (
    <div className="py-16 bg-white px-6 sm:px-10 md:px-16 lg:px-32">
      <div className="text-center mb-12">
        <h3 className="text-sm md:text-base text-blue-500 font-semibold mb-2">About Us</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why We Are The Best?</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 border-b-4 border-blue-500 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeAbout;
