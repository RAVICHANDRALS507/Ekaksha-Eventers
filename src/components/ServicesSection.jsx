import React from "react";
import { Link } from "react-router-dom";

import img1 from "../assets/51.jpg";
import img2 from "../assets/126.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/10.jpg";
import img6 from "../assets/47.jpg";

const images = [
  { src: img1, alt: "Birthday Event" },
  { src: img2, alt: "Birthday Banner" },
  { src: img3, alt: "Naming Cermony" },
  { src: img4, alt: "Birthday Party" },
  { src: img5, alt: "Exhibition" },
  { src: img6, alt: "Private Party" },
];

// Reusable SVG Icon
const IconCheckCircle = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2 4-4" />
  </svg>
);

const services = [
  {
    title: "Baby shower",
    description:
      "Elegant baby showers with themed décor, games, and complete planning—crafted to celebrate motherhood with love, joy, and lasting memories.",
    icon: (
      <svg
        className="w-10 h-10 mx-auto mb-4 text-blue-700"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m-6 4h6a2 2 0 002-2v-6a2 2 0 00-2-2h-6a2 2 0 00-2 2v6a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Weddings & Receptions",
    description:
      "Dream weddings and receptions with stunning décor, seamless coordination, and personalized themes—making your special day unforgettable, elegant, and stress-free.",
    icon: (
      <svg
        className="w-10 h-10 mx-auto mb-4 text-pink-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21C12 21 4 13.5 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.5 16 21 16 21H12Z"
        />
      </svg>
    ),
  },
  {
    title: "Naming ceremony",
    description:
      "Beautifully organized naming ceremonies with themed decorations, rituals, and warm ambiance to celebrate your baby’s special day with grace and joy.",
    icon: (
      <IconCheckCircle className="w-10 h-10 mx-auto mb-4 text-yellow-500" />
    ),
  },
  {
    title: "Birthday Parties",
    description:
      "Fun-filled birthday parties with creative themes, vibrant décor, games, and entertainment—designed to make every celebration joyful and unforgettable.",
    icon: (
      <svg
        className="w-10 h-10 mx-auto mb-4 text-purple-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Exhibitions & Trade Shows",
    description:
      "Professional execution of exhibitions and trade shows with creative stalls, branding, logistics, and audience engagement for impactful business presence and promotion.",
    icon: (
      <svg
        className="w-10 h-10 mx-auto mb-4 text-green-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 10h20" />
      </svg>
    ),
  },
  {
    title: "Private Parties",
    description:
      "Exclusive private parties with elegant setups, themed décor, and personalized planning—perfect for anniversaries, proposals, or intimate celebrations with loved ones.",
    icon: <IconCheckCircle className="w-10 h-10 mx-auto mb-4 text-red-500" />,
  },
  {
    title: "Housewarming",
    description:
      "Warm and traditional housewarming celebrations with customized décor, rituals, and seamless planning to bless your new beginning with joy and positivity.",
    icon: <IconCheckCircle className="w-10 h-10 mx-auto mb-4 text-red-500" />,
  },
  {
    title: "Love proposal",
    description:
      "Romantic love proposals crafted with personalized themes, stunning décor, and flawless planning to create unforgettable, heartfelt moments for you both.",
    icon: <IconCheckCircle className="w-10 h-10 mx-auto mb-4 text-red-500" />,
  },
];

// const images = [
//   { src: require("./assets/1.jpg"), alt: "Corporate Event" },
//   { src: require("./assets/2.jpg"), alt: "Wedding Event" },
//   { src: require("./assets/3.jpg"), alt: "Concert" },
//   { src: require("./assets/4.jpg"), alt: "Birthday Party" },
//   { src: require("./assets/5.jpg"), alt: "Exhibition" },
//   { src: require("./assets/6.jpg"), alt: "Private Party" },
// ];

export default function Services() {
  return (
    <>
      {/* Services Section */}
      <section id="services" className="w-full bg-gray-50 py-16 px-0">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-10 text-center">
            Our Services
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 text-center border-t-4 border-blue-600 hover:border-yellow-400"
              >
                {service.icon}
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href="https://g.co/kgs/8rX1Nix"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View more services on Google"
              className="inline-block bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-yellow-400 hover:text-black transition duration-300"
            >
              View More
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="portfolio" className="w-full bg-white py-16 px-0">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-10 text-center">
            Our Event Gallery
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-gray-100"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
                  <p className="text-white text-base font-semibold drop-shadow">
                    {img.alt}
                  </p>
                </div>
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/gallery"
              aria-label="View more services on Gallery page"
              className="inline-block bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-yellow-400 hover:text-black transition duration-300"
            >
              View More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
