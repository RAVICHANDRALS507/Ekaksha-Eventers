import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const NammaNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => setIsMobileMenuOpen(false); // Close on link click

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md px-6 md:px-12 py-4 z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex flex-col text-namma-yellow text-2xl md:text-3xl font-bold leading-tight">
          <span className="text-lg md:text-xl tracking-wider -mb-1">Ekaksha</span>
          <span className="text-3xl md:text-4xl tracking-wide">Eventers.</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            className="text-namma-yellow text-lg font-medium transition duration-300 hover:text-namma-dark-yellow"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-namma-yellow text-lg font-medium transition duration-300 hover:text-namma-dark-yellow"
          >
            About
          </a>
          <a
            href="#gallery"
            className="text-namma-yellow text-lg font-medium transition duration-300 hover:text-namma-dark-yellow"
          >
            Gallery
          </a>
          <a
            href="#contact"
            className="text-namma-yellow text-lg font-medium transition duration-300 hover:text-namma-dark-yellow"
          >
            Contact
          </a>
          <a
            href="#founder"
            className="text-namma-yellow text-lg font-medium transition duration-300 hover:text-namma-dark-yellow"
          >
            Founder
          </a>
          <a
            href="#faq"
            className="text-namma-yellow text-lg font-medium transition duration-300 hover:text-namma-dark-yellow"
          >
            FAQ
          </a>
        </div>

        {/* Social + Button */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-5 mr-4">
            <a href="https://www.facebook.com/ekaksha.eventers/" className="text-namma-yellow text-xl hover:text-namma-dark-yellow transition"><FaFacebookF /></a>
            <a href="https://www.instagram.com/ekaksha_eventers_pvt?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-namma-yellow text-xl hover:text-namma-dark-yellow transition"><FaInstagram /></a>
            {/* <a href="#" className="text-namma-yellow text-xl hover:text-namma-dark-yellow transition"><FaLinkedinIn /></a>
            <a href="#" className="text-namma-yellow text-xl hover:text-namma-dark-yellow transition"><FaTwitter /></a> */}
          </div>
          <button className="bg-namma-yellow text-white px-6 py-2 rounded-full font-semibold hover:bg-namma-dark-yellow transition duration-300">
            Book a Trip
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <HiX className="text-3xl text-namma-yellow" />
            ) : (
              <HiMenuAlt3 className="text-3xl text-namma-yellow" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <a href="#home" onClick={closeMenu} className="block text-namma-yellow font-medium">Home</a>
          <a href="#about" onClick={closeMenu} className="block text-namma-yellow font-medium">About</a>
          <a href="#gallery" onClick={closeMenu} className="block text-namma-yellow font-medium">Gallery</a>
          <a href="#contact" onClick={closeMenu} className="block text-namma-yellow font-medium">Contact</a>
          <a href="#founder" onClick={closeMenu} className="block text-namma-yellow font-medium">Founder</a>

          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-namma-yellow text-xl"><FaFacebookF /></a>
            <a href="#" className="text-namma-yellow text-xl"><FaInstagram /></a>
            <a href="#" className="text-namma-yellow text-xl"><FaLinkedinIn /></a>
            <a href="#" className="text-namma-yellow text-xl"><FaTwitter /></a>
          </div>
          <button className="mt-4 w-full bg-namma-yellow text-white py-2 rounded-full font-bold hover:bg-namma-dark-yellow transition duration-300">
            Book a Trip
          </button>
        </div>
      )}
    </nav>
  );
};

export default NammaNavbar;
