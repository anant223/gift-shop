import React from 'react';
import {Container, Logo} from '../index';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white flex w-full h-[90vh]">
      <Container>
        <Logo />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center lg:text-left">
          <div>
            <p className=" text-xl text-left">
              <strong>
                <em>
                  We offer unique gifts for all occasions. Dedicated to bringing
                  quality and joy to your celebrations with personalized
                  products.
                </em>
              </strong>
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/shop" className="hover:underline">
                  Shop
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="/faq" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/shipping" className="hover:underline">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="/support" className="hover:underline">
                  Support
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className=" flex flex-col space-y-2">
              <a href="https://twitter.com" className="hover:text-gray-400">
                Twitter
              </a>
              <a href="https://facebook.com" className="hover:text-gray-400">
                Facebook
              </a>
              <a href="https://instagram.com" className="hover:text-gray-400">
                Instagram
              </a>
              <a href="https://linkedin.com" className="hover:text-gray-400">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center lg:text-left">
          <p>
            &copy; {new Date().getFullYear()} Gift Shop. All rights reserved by
            Anant.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
