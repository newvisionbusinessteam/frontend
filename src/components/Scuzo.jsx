import React from 'react';
import popsicleImage from '../assets/jamunpopsicles.jpg'; 

const Scuzo = () => {
  return (
    <div className="relative bg-sky-50 flex flex-col gap-10 md:gap-0 lg:flex-row items-center justify-center text-center lg:text-left py-16 px-4 md:px-8 lg:px-40 lg:py-10">
      {/* Image Section */}
      <div className="relative w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0">
        <div className="absolute bottom-0 lg:bottom-auto inset-x-0 lg:inset-x-auto h-48 lg:h-96 w-full lg:w-[600px]"></div>
        <img
          src={popsicleImage}
          alt="Delicious Popsicles"
          className="relative z-10 w-full max-w-xl lg:max-w-full lg:w-[450px] mx-auto mt-10 border-l-4 border-b-4 border-blue-500 rounded-lg"
        />
      </div>

      {/* Text Section */}
      <div className="max-w-3xl z-10 lg:w-1/2">
        <h3 className="text-sm md:text-base text-blue-500 font-semibold mb-2">ICECREAM LOVERS</h3>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">India's First Live Popsicle Concept</h1>
        <p className="text-gray-700 text-md md:text-lg xl:text-xl 2xl:text-2xl mb-6">
          Scuzo is not only India's First Dessert Café to let its Customers enjoy the art of making Live Popsicles, but also is a sweet hub of a Variety of Premium Products like Gelatos, Sorbets, Milkshakes, Sundaes, Waffles & many more.
        </p>
        <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Scuzo;
