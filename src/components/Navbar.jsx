import React, { useState } from "react";
import Logo from "../assets/Logo.png";

import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const NammaNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  // Use same menu items for desktop and mobile
  const menuItems = ["Home", "About", "Gallery", "Contact", "Founder", "FAQ"];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md px-6 md:px-12 py-4 z-50">
      <div className="flex justify-between items-center">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-3">
          <img
            src={Logo}
            alt="Ekaksha Logo"
            className="w-10 h-10 md:w-12 md:h-12 object-contain mt-1"
          />
          <div className="text-namma-yellow font-bold text-2xl md:text-3xl tracking-wide">
            Ekaksha Eventers
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((section) => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              className="text-namma-yellow text-lg font-medium transition duration-300 hover:text-namma-dark-yellow"
            >
              {section}
            </a>
          ))}
        </div>

        {/* Social + Button */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-5 mr-4">
            <a
              href="https://www.facebook.com/ekaksha.eventers/"
              className="text-namma-yellow text-xl hover:text-namma-dark-yellow transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/ekaksha_eventers_pvt?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="text-namma-yellow text-xl hover:text-namma-dark-yellow transition"
            >
              <FaInstagram />
            </a>
            <a
              href="tel:8300794075"
              className="text-namma-yellow text-xl hover:text-namma-dark-yellow transition flex items-center space-x-1"
            >
              <FaPhoneAlt />
              <span className="text-sm font-semibold">8300794075</span>
            </a>
            <a
              href="https://wa.me/918300794075?text=Hello%20Ekaksha%20Eventers!"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-xl text-gray-800 flex items-center space-x-1"
            >
              <FaWhatsapp />
              <span className="text-sm font-semibold">8300794075</span>
            </a>
          </div>
          {/* <button className="bg-namma-yellow text-white px-6 py-2 rounded-full font-semibold hover:bg-namma-dark-yellow transition duration-300">
            Book a Trip
          </button> */}
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

      {/* Mobile Menu with Smooth Transition */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out transform ${
          isMobileMenuOpen ? "max-h-screen opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-4 px-1">
          {menuItems.map((section) => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              onClick={closeMenu}
              className="block text-namma-yellow font-medium"
            >
              {section}
            </a>
          ))}

          {/* Updated social icons to match desktop (remove LinkedIn & Twitter, add phone & WhatsApp) */}
          <div className="flex items-center space-x-6 mt-4">
            <a
              href="https://www.facebook.com/ekaksha.eventers/"
              className="text-namma-yellow text-xl hover:text-namma-dark-yellow transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/ekaksha_eventers_pvt?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="text-namma-yellow text-xl hover:text-namma-dark-yellow transition"
            >
              <FaInstagram />
            </a>
            <a
              href="tel:8300794075"
              className="text-namma-yellow text-xl flex items-center space-x-1 hover:text-namma-dark-yellow transition"
            >
              <FaPhoneAlt />
              <span className="text-sm font-semibold">8300794075</span>
            </a>
            <a
              href="https://wa.me/918300794075?text=Hello%20Ekaksha%20Eventers!"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-namma-yellow text-xl flex items-center space-x-1 hover:text-namma-dark-yellow transition"
            >
              <FaWhatsapp />
              <span className="text-sm font-semibold">8300794075</span>
            </a>
          </div>

          <button className="mt-4 w-full bg-namma-yellow text-white py-2 rounded-full font-bold hover:bg-namma-dark-yellow transition duration-300">
            Book a Trip
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NammaNavbar;
