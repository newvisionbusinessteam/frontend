import { Link, NavLink } from 'react-router-dom';

import logo from "../assets/fran.png";
import { FaGlobe, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-9 w-full md:w-1/3">
            <div className="">
              <h2 className='text-lg text-blue-500 font-semibold'>Master Franchise for:</h2>
              <img src={logo} alt="logo" className="h-24 w-64 " />
            </div>
            {/* <p className="text-md mt-2">
              We empower communities with education, healthcare, and social welfare, uplifting the underprivileged and fostering a brighter future.
            </p> */}
          </div>
          <nav className="mb-8 md:mb-0 w-full md:w-1/3 flex flex-col md:items-center">
            <ul className="flex flex-col space-y-2 text-md">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/outlets" className="hover:underline">Our outlets</Link></li>
              <li><Link to="/about" className="hover:underline">About us</Link></li>
              <li><Link to="/franchise" className="hover:underline">Frachise</Link></li>
              {/* <li><Link to="/contact" className="hover:underline">Contact Us</Link></li> */}
            </ul>
          </nav>
          <div className="w-full md:w-1/2 text-start">
            <div className="flex flex-col gap-1 space-y-4 mt-10 md:mt-0 mb-8">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-blue-500 mr-2 " />
                <span>Head Office: 351, Urban Estate, Phagwara</span>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="text-blue-500 mr-2" />
                <span>+91-1813512424</span>
              </div>
              <div className="flex items-center">
                <FaGlobe className="text-blue-500 mr-2" />
                <span>newvisionbusinessteam.com</span>
              </div>
              <NavLink
                to="/order"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 mt-10 md:mt-0 py-2 rounded-md w-40 text-center"
              >
                Order Now
              </NavLink>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-4">
          <p className="text-center md:text-left text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} New Vision Business Team. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm">
            <Link to="" className="hover:underline">Privacy Policy</Link>
            <Link to="" className="hover:underline">Terms & Conditions</Link>
            {/* <Link to="/refund-and-cancellation" className='hover:underline'>Refund and Cancellation</Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;