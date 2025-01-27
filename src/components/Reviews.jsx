import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const Reviews = () => {
  return (
    <section className="bg-sky-50 py-20 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-32 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">What Our Clients Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-lg border-b-4 border-blue-500">
            <FaQuoteLeft className="text-blue-500 text-3xl mb-4" />
            <p className="text-gray-600 mb-4">
              "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nullam tincidunt luctus volutpat 
              hendrerit elementum, nisi malesuada felis aliquet eget sit."
            </p>
            <h3 className="text-blue-500 font-semibold">John Doe</h3>
            <p className="text-gray-500 text-sm">CEO, Lifestyle Inc.</p>
          </div>

          <div className="bg-white p-6 shadow-lg rounded-lg border-b-4 border-blue-500">
            <FaQuoteLeft className="text-blue-500 text-3xl mb-4" />
            <p className="text-gray-600 mb-4">
              "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nullam tincidunt luctus volutpat 
              hendrerit elementum, nisi malesuada felis aliquet eget sit."
            </p>
            <h3 className="text-blue-500 font-semibold">Jane Smith</h3>
            <p className="text-gray-500 text-sm">Founder, Urban Wear</p>
          </div>

          <div className="bg-white p-6 shadow-lg rounded-lg border-b-4 border-blue-500">
            <FaQuoteLeft className="text-blue-500 text-3xl mb-4" />
            <p className="text-gray-600 mb-4">
              "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nullam tincidunt luctus volutpat 
              hendrerit elementum, nisi malesuada felis aliquet eget sit."
            </p>
            <h3 className="text-blue-500 font-semibold">Emily Johnson</h3>
            <p className="text-gray-500 text-sm">Operations Manager, StyleHouse</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
