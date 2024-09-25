import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaStore, FaGlobe } from 'react-icons/fa';
import FranchiseContactForm from '../components/FranchiseContactForm'; // Make sure this path is correct

const Franchise = () => {
  return (
    <div className="py-16 bg-sky-50 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-8 md:p-12">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h3 className="text-sm md:text-base text-blue-500 font-semibold mb-2">Become a Part of Our Family</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Own a Franchise</h2>
          <p className="text-gray-800 mt-2">
            Join us and start your journey towards a successful business venture with our brand.
          </p>
        </div>
        
        {/* Icons and Benefits Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 text-center">
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 border-b-4 border-blue-500">
            <FaStore className="text-orange-600 text-4xl mx-auto mb-4" />
            <h4 className="text-lg font-bold text-gray-800">Proven Business Model</h4>
            <p className="text-sm text-gray-600">Leverage our established business model and start earning right away.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 border-b-4 border-blue-500">
            <FaPhoneAlt className="text-green-600 text-4xl mx-auto mb-4" />
            <h4 className="text-lg font-bold text-gray-800">24/7 Support</h4>
            <p className="text-sm text-gray-600">Get assistance and support from our experienced team whenever you need it.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 border-b-4 border-blue-500">
            <FaEnvelope className="text-red-600 text-4xl mx-auto mb-4" />
            <h4 className="text-lg font-bold text-gray-800">Marketing Assistance</h4>
            <p className="text-sm text-gray-600">Benefit from our comprehensive marketing and advertising support.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 border-b-4 border-blue-500">
            <FaMapMarkerAlt className="text-yellow-600 text-4xl mx-auto mb-4" />
            <h4 className="text-lg font-bold text-gray-800">Location Selection</h4>
            <p className="text-sm text-gray-600">Get help finding the perfect location for your franchise store.</p>
          </div>
        </div>

        {/* Franchise Contact Form */}
        <div className='flex flex-col md:flex-row gap-28'>
        <FranchiseContactForm /> 

        {/* Contact Information */}
        <div className="w-full md:w-1/2 text-start -mt-28 md:mt-0">
            <div className="flex flex-col gap-3 space-y-4 mt-10 md:mt-0 mb-8">
              <div className="flex items-center">
                <FaMapMarkerAlt size={25} className="text-blue-500 mr-2 " />
                <span>Head Office: 351, Urban Estate, Phagwara</span>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt size={25} className="text-blue-500 mr-2" />
                <span>+91-1813512424</span>
              </div>
              <div className="flex items-center">
                <FaGlobe size={25}className="text-blue-500 mr-2" />
                <span>newvisionbusinessteam.com</span>
              </div>
            </div>
          </div>    
            </div>
        
      </div>
    </div>
  );
};

export default Franchise;
