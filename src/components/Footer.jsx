import React from 'react';
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Top section with contact info */}
        <div className="flex flex-col md:flex-row justify-around items-center mb-8">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="bg-orange-600 p-4 rounded-full">
            <FaPhone />
            </div>
            <div>(+65) 6653 8060</div>
          </div>
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="bg-orange-600 p-4 rounded-full">
            <IoMail />
            </div>
            <div>hello@happymarketer.com</div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-orange-600 p-4 rounded-full">
            <FaAddressBook />
            </div>
            <div>One Neil Road #02-02, Singapore 088804</div>
          </div>
        </div>

        {/* Middle section with links */}
        <div className="flex flex-col md:flex-row justify-between text-center md:text-left">
          <div className="mb-8 md:mb-0">
            <h3 className="font-bold text-lg mb-4">About</h3>
            <ul>
              <li>Our Story</li>
              <li>Awards</li>
              <li>Our Team</li>
              <li>Career</li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0">
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul>
              <li>Our Services</li>
              <li>Clients</li>
              <li>Contact</li>
              <li>Press</li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0">
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul>
              <li>Blog</li>
              <li>Newsletter</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0">
            <h3 className="font-bold text-lg mb-4">Subscribe</h3>
            <form className="flex items-center">
              <input
                type="email"
                placeholder="Email Address"
                className="p-2 rounded-l-lg bg-gray-800 text-white border border-gray-600"
              />
              <button
                type="submit"
                className="p-2 bg-orange-600 text-white rounded-r-lg"
              >
                →
              </button>
            </form>
            <p className="mt-2 text-sm text-gray-400">
              Get digital marketing updates in your mailbox
            </p>
          </div>
        </div>

        {/* Bottom section with social icons and copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-xl text-gray-400">
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
            <FaFacebookSquare/>
            </a>
            
            <a href="#" className="hover:text-white">
            <FaSquareTwitter />
            </a>
            <a href="#" className="hover:text-white">
            <FaSquareInstagram />
            </a>
          </div>
          <div className="mt-4 md:mt-0">
            © 2022 - 2024 Happy Marketer Private Ltd. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
