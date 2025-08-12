import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  const toggleLogoModal = () => {
    setIsLogoModalOpen(!isLogoModalOpen);
  };

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", id: "contact" },
    { name: "Founder", id: "founder" },
    { name: "FAQ", id: "faq" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  };

  const handleMenuClick = (item) => {
    if (item.path) {
      navigate(item.path);
    } else if (location.pathname === "/") {
      scrollToSection(item.id);
    } else {
      navigate("/"); // Go to homepage, then scroll after delay
      setTimeout(() => {
        scrollToSection(item.id);
      }, 300);
    }
    closeMenu();
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 shadow-none px-6 md:px-12 py-4 z-50"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={toggleLogoModal}
          >
            <img
              src={Logo}
              alt="Ekaksha Logo"
              className="w-10 h-10 md:w-12 md:h-12 object-contain mt-1"
            />
            <div className="text-white font-bold text-2xl md:text-3xl tracking-wide">
              Ekaksha Eventers
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleMenuClick(item)}
                className="cursor-pointer text-white text-lg font-medium transition duration-300 hover:text-namma-dark-yellow"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Social + Mobile Menu Toggle */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-5 mr-4">
              <a
                href="https://www.facebook.com/ekaksha.eventers/"
                className="text-white text-xl hover:text-namma-dark-yellow transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/ekaksha_eventers_pvt"
                className="text-white text-xl hover:text-namma-dark-yellow transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="tel:8300794075"
                className="text-white text-xl hover:text-namma-dark-yellow transition flex items-center space-x-1"
              >
                <FaPhoneAlt />
                <span className="text-sm font-semibold">8300794075</span>
              </a>
              <a
                href="https://wa.me/918300794075?text=Hello%20Ekaksha%20Eventers!"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-xl text-white hover:text-namma-dark-yellow transition flex items-center space-x-1"
              >
                <FaWhatsapp />
                <span className="text-sm font-semibold">8300794075</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <HiX className="text-3xl text-white" />
              ) : (
                <HiMenuAlt3 className="text-3xl text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out transform ${
            isMobileMenuOpen
              ? "max-h-screen opacity-100 mt-4"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-4 px-1">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleMenuClick(item)}
                className="block cursor-pointer text-white font-medium"
              >
                {item.name}
              </button>
            ))}

            {/* Social Icons */}
            <div className="flex items-center space-x-6 mt-4">
              <a
                href="https://www.facebook.com/ekaksha.eventers/"
                className="text-white text-xl hover:text-namma-dark-yellow transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/ekaksha_eventers_pvt"
                className="text-white text-xl hover:text-namma-dark-yellow transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="tel:8300794075"
                className="text-white text-xl flex items-center space-x-1 hover:text-namma-dark-yellow transition"
              >
                <FaPhoneAlt />
                <span className="text-sm font-semibold">8300794075</span>
              </a>
              <a
                href="https://wa.me/918300794075?text=Hello%20Ekaksha%20Eventers!"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-white text-xl flex items-center space-x-1 hover:text-namma-dark-yellow transition"
              >
                <FaWhatsapp />
                <span className="text-sm font-semibold">8300794075</span>
              </a>
            </div>

            {/* <button className="mt-4 w-full bg-namma-yellow text-white py-2 rounded-full font-bold hover:bg-namma-dark-yellow transition duration-300">
              Book a Trip
            </button> */}
          </div>
        </div>
      </nav>

      {/* Logo Modal */}
      {isLogoModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-60"
          onClick={toggleLogoModal}
        >
          <div
            className="relative p-4 bg-white rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={toggleLogoModal}
              className="absolute top-2 right-2 text-black text-2xl font-bold"
              aria-label="Close modal"
            >
              &times;
            </button>
            <img
              src={Logo}
              alt="Ekaksha Logo Large"
              className="max-w-xs md:max-w-md"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default NammaNavbar;
