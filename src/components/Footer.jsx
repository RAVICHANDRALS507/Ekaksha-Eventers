import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#FFC107] text-white py-8 px-4 md:px-8 lg:px-16">
      {" "}
      {/* Reduced py-12 to py-8 */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {" "}
        {/* Reduced gap-12 to gap-8 */}
        {/* Section 1: Explore */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold mb-3 uppercase">Explore</h3>{" "}
          {/* Reduced text-2xl to text-xl, mb-4 to mb-3 */}
          <p className="text-sm text-gray-800 mb-4 max-w-xs md:max-w-none">
            {" "}
            {/* Reduced text-base to text-sm, mb-6 to mb-4 */}
            Affordable events across Mysuru, Nanjungud, Mandya create
            unforgettable memories.
          </p>
          <div className="flex space-x-3">
            {" "}
            {/* Reduced space-x-4 to space-x-3 */}
            <a
              href="https://www.facebook.com/ekaksha.eventers/"
              aria-label="Facebook"
              className="text-xl text-gray-800 hover:text-white transition-colors duration-200"
            >
              {" "}
              {/* Reduced text-2xl to text-xl */}
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/ekaksha_eventers_pvt?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              aria-label="Instagram"
              className="text-xl text-gray-800 hover:text-white transition-colors duration-200"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/918300794075?text=Hello%20Ekaksha%20Eventers!"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-xl text-gray-800 hover:text-white transition-colors duration-200 flex items-center space-x-1"
            >
              <FaWhatsapp />
              <span className="text-sm font-semibold">8300794075</span>
            </a>
          </div>
        </div>
        {/* Section 2: Company Logo/Name (Center) */}
        <div className="flex flex-col items-center justify-center">
          <div className="text-4xl md:text-5xl font-extrabold leading-none tracking-tight uppercase">
            {" "}
            {/* Reduced text-5xl/6xl to 4xl/5xl */}
            EKAKSHA
          </div>
          <div className="text-4xl md:text-5xl font-extrabold leading-none tracking-tight uppercase flex items-center mt-1">
            {" "}
            {/* Reduced text-5xl/6xl to 4xl/5xl, mt-2 to mt-1 */}
            <span className="mr-1">EVENTERS</span> {/* Reduced mr-2 to mr-1 */}
          </div>
          <p className="text-xs text-gray-800 mt-2 italic">
            "WE CREATE YOUR MEMORY BOOK"
          </p>{" "}
          {/* Reduced text-sm to text-xs, mt-4 to mt-2 */}
        </div>
        {/* Section 3: Contact Information */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <h3 className="text-xl font-bold mb-3 uppercase">Contact</h3>{" "}
          {/* Reduced text-2xl to text-xl, mb-4 to mb-3 */}
          <p className="text-sm text-gray-800 mb-1">+91 8300794075</p>{" "}
          {/* Reduced text-base to text-sm, mb-2 to mb-1 */}
          <p className="text-sm text-gray-800">
            ekakshaeventers143@gmail.com
          </p>{" "}
          {/* Reduced text-base to text-sm */}
        </div>
      </div>
      {/* Copyright and Designed By */}
      <div className="mt-8 pt-6 border-t border-gray-400 text-center text-gray-800">
        {" "}
        {/* Reduced mt-10 to mt-8, pt-8 to pt-6 */}
        <p className="text-sm mb-1">
          &copy; {new Date().getFullYear()} Ekaksha Eventers. All rights
          reserved.
        </p>{" "}
        {/* Reduced text-base to text-sm, mb-2 to mb-1 */}
        <p className="text-xs">
          Designed and Developed by{" "}
          <a
            href="https://faunigent.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Faunigent Innovations
          </a>
        </p>{" "}
        {/* Reduced text-sm to text-xs */}
      </div>
    </footer>
  );
};

export default Footer;
