import React from 'react';
import pizzaImage from '../assets/pizza.png';

const Hero = () => {
  return (
    <div className="relative bg-white flex flex-col lg:flex-row items-center justify-center text-center lg:text-left py-16 px-4 md:px-8 lg:px-32 lg:py-28">
      {/* Text Section */}
      <div className="max-w-3xl z-10 lg:w-1/2 lg:pr-12">
        <h3 className="text-sm md:text-base text-blue-500 font-semibold mb-2">PIZZA LOVERS</h3>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">The tastiest pizza in town</h1>
        <p className="text-gray-700 text-md md:text-lg lg:text-xl mb-6">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Nullam tincidunt luctus volutpat 
          hendrerit elementum, nisi malesuada felis aliquet eget sit.
        </p>
        <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300">
          Order Now
        </button>
      </div>

      {/* Image and Blue Background Section */}
      <div className="relative w-full lg:w-1/2 flex justify-center mt-6 lg:mt-10">
        {/* Full-width Blue Background without Overflow */}
        <div className="absolute bottom-0 lg:bottom-auto inset-x-0 lg:inset-x-auto h-48 lg:h-96 bg-blue-500 w-full lg:w-[600px]"></div>
        {/* Pizza Image */}
        <img 
          src={pizzaImage} 
          alt="Delicious Pizza" 
          className="relative z-10 w-full max-w-xl lg:max-w-full lg:w-[600px] mx-auto mt-10" 
        />
      </div>
    </div>
  );
};

export default Hero;
