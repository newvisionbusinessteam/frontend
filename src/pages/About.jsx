import React from 'react';
import image2 from "../assets/cafe.avif";

const About = () => {  
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 pb-[5.5rem] px-6 md:px-28 pt-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          
          <div
            className="md:w-3/5 mb-8 md:mb-0"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 pb-4">
              <span className="text-blue-500">Reasons</span> to count on us.
            </h2>
            <p className="text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <br />
            <p className="text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <br/>
            <p className='text-gray-600'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>

          <div className="md:w-2/5 flex justify-center items-center relative">
            <img
              src={image2}
              alt="image4"
              className="w-[500px] h-[350px] object-cover shadow-lg md:w-[400px] md:h-[500px] rounded-lg border-r-4 border-b-4 border-blue-500"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;