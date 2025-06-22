import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-screen z-50 bg-gradient-to-r from-blue-700 to-purple-600 shadow-md">
      <nav className="w-full flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold text-white tracking-wide">Ekaksha Eventers</span>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li>
            <a
              href="#about"
              className="text-white hover:text-yellow-300 transition-colors"
              style={{ color: "white" }}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-white hover:text-yellow-300 transition-colors"
              style={{ color: "white" }}
            >
              Services Offered
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="text-white hover:text-yellow-300 transition-colors"
              style={{ color: "white" }}
            >
              Portfolio / Gallery
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white hover:text-yellow-300 transition-colors"
              style={{ color: "white" }}
            >
              Contact Information
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="text-white hover:text-yellow-300 transition-colors"
              style={{ color: "white" }}
            >
              FAQ
            </a>
          </li>
        </ul>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </nav>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-800 w-full">
          <ul className="flex flex-col space-y-2 px-6 py-4 font-medium">
            <li>
              <a
                href="#about"
                className="text-white hover:text-yellow-300 transition-colors"
                style={{ color: "white" }}
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-white hover:text-yellow-300 transition-colors"
                style={{ color: "white" }}
                onClick={() => setMenuOpen(false)}
              >
                Services Offered
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="text-white hover:text-yellow-300 transition-colors"
                style={{ color: "white" }}
                onClick={() => setMenuOpen(false)}
              >
                Portfolio / Gallery
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white hover:text-yellow-300 transition-colors"
                style={{ color: "white" }}
                onClick={() => setMenuOpen(false)}
              >
                Contact Information
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-white hover:text-yellow-300 transition-colors"
                style={{ color: "white" }}
                onClick={() => setMenuOpen(false)}
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}