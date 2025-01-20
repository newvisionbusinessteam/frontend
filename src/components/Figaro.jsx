import React from 'react';
import pizzaImage from '../assets/pizza.png';

const Hero = () => {
  return (
    <div className="relative bg-sky-50 flex flex-col xl:flex-row items-center justify-center text-center xl:text-left py-16 px-4 md:px-8 xl:px-36 xl:py-28 max-w-screen-2xl mx-auto">
      <div className="max-w-3xl z-10 xl:w-1/2 xl:pr-12">
        <h3 className="text-sm md:text-base text-blue-500 font-semibold mb-2">PIZZA LOVERS</h3>
        <h1 className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-black mb-4">The tastiest pizza in town</h1>
        <p className="text-gray-700 text-md md:text-lg xl:text-xl 2xl:text-2xl mb-6">
          At Figaro’s Pizza, we believe your pizza should be created fresh to order using the highest quality ingredients. It all starts with our dough, made from 100% non-GMO wheat.
        </p>
        <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300 text-md xl:text-lg 2xl:text-xl">
          Order Now
        </button>
      </div>

      <div className="relative w-full xl:w-1/2 flex justify-center mt-6 xl:-mt-4">
        <img 
          src={pizzaImage} 
          alt="Delicious Pizza" 
          className="relative z-10 w-full max-w-xl xl:max-w-full xl:w-[500px] xl:h-[520px] 2xl:w-[500px] 2xl:h-[510px] mx-auto border-r-4 border-b-4 border-blue-500 rounded-lg" 
        />
      </div>
    </div>
  );
};

export default Hero;
