import React, { useState, useEffect, useRef } from 'react';
import {
  FaAward,
  FaUserFriends,
  FaCalendarAlt,
  FaPhoneAlt,
  FaCameraRetro,
  FaLightbulb,
  FaUtensils,
  FaGift,
  FaHandshake,
  FaMicrophoneAlt,
} from 'react-icons/fa';

const AnimatedCounter = ({ endValue, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let startTimestamp = null;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * endValue));
            if (progress < 1) window.requestAnimationFrame(step);
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, [endValue, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

const OurExperience = () => {
  return (
    <>
      <style>
        {`
          @keyframes jump {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-jump {
            animation: jump 1s ease-in-out infinite;
          }
        `}
      </style>

      <section className="bg-gradient-to-b from-yellow-50 to-white py-20 px-4 md:px-8 lg:px-16 flex flex-col items-center relative overflow-hidden">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-namma-yellow mb-16 text-center uppercase tracking-wide drop-shadow-md">
          Our Experience
        </h2>

        {/* Experience Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl mb-24">
          {[
            { icon: <FaCalendarAlt className="text-6xl mb-4 text-blue-500 drop-shadow-md" />, count: 1500, label: 'Total Events Completed' },
            { icon: <FaUserFriends className="text-6xl mb-4 text-pink-500 drop-shadow-md" />, count: 1500, label: 'Happy Customers' },
            { icon: <FaAward className="text-6xl mb-4 text-green-500 drop-shadow-md" />, count: 6, label: 'Years of Experience' },
          ].map((item, i) => (
            <div key={i} className="bg-white bg-opacity-90 backdrop-blur-md border border-gray-200 p-8 rounded-2xl shadow-2xl hover:shadow-yellow-400/30 transform transition duration-300 hover:scale-105 flex flex-col items-center text-center">
              {item.icon}
              <p className="text-5xl font-bold mb-2 text-gray-900 leading-none">
                <AnimatedCounter endValue={item.count} duration={2000} />+
              </p>
              <p className="text-lg text-gray-600 font-medium">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Package Section */}
        <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl p-6 sm:p-10 pt-16 md:pt-20 pb-12 sm:pr-10 pr-6">
          {/* Badge */}
          <div className="absolute bg-yellow-400 text-white font-extrabold px-4 py-1 sm:px-5 sm:py-2 rounded-full shadow-md text-sm sm:text-base tracking-wide top-4 right-4 sm:top-6 sm:right-6 z-10">
            20% OFF
          </div>

          {/* Heading */}
          <h3 className="text-3xl font-extrabold text-namma-yellow text-center mb-4 uppercase tracking-wide">
            Complete Event Package
          </h3>

          {/* Subheading */}
          <p className="text-center text-gray-700 font-medium mb-8 max-w-3xl mx-auto">
            Get everything you need in one comprehensive package with a special <strong>20% discount</strong>! Ideal for making your event truly unforgettable.
          </p>

          {/* Package Items */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-700 font-semibold">
            <li className="flex items-center space-x-3">
              <FaCameraRetro className="text-yellow-400 text-2xl" />
              <span>Photography & Videography</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaLightbulb className="text-yellow-400 text-2xl" />
              <span>Lights</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaHandshake className="text-yellow-400 text-2xl" />
              <span>Tent House</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaUtensils className="text-yellow-400 text-2xl" />
              <span>Food Catering</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaGift className="text-yellow-400 text-2xl" />
              <span>Return Gift</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaUserFriends className="text-yellow-400 text-2xl" />
              <span>Welcome Girl</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaMicrophoneAlt className="text-yellow-400 text-2xl" />
              <span>MC Anchor</span>
            </li>
          </ul>
        </div>

        {/* Call Now Button */}
        <a
          href="tel:8300794075"
          className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 text-black px-10 py-4 rounded-full font-bold text-xl mt-20 shadow-lg hover:shadow-yellow-600 transition duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-50 flex items-center space-x-3 animate-jump"
        >
          <FaPhoneAlt className="text-xl" />
          <span>Call Now: 8300794075</span>
        </a>
      </section>
    </>
  );
};

export default OurExperience;
