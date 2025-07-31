import React, { useState, useEffect, useRef } from 'react';
import { FaAward, FaUserFriends, FaCalendarAlt } from 'react-icons/fa';

// Counter component for animated numbers
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
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [endValue, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

const OurExperience = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-8 lg:px-16 flex flex-col items-center relative overflow-hidden">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-namma-yellow mb-20 relative text-center uppercase tracking-wide z-10">
        Our Experience
      </h2>

      {/* Experience Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl z-10">
        {/* Total Events */}
        <div className="bg-namma-yellow text-black p-8 rounded-lg shadow-xl flex flex-col items-center justify-center text-center transform transition-transform duration-300 hover:scale-105">
          <FaCalendarAlt className="text-6xl mb-4" />
          <p className="text-5xl font-bold mb-2 leading-none">
            <AnimatedCounter endValue={500} duration={2000} />+
          </p>
          <p className="text-lg text-gray-800">Total Events Completed</p>
        </div>

        {/* Happy Customers */}
        <div className="bg-namma-yellow text-black p-8 rounded-lg shadow-xl flex flex-col items-center justify-center text-center transform transition-transform duration-300 hover:scale-105">
          <FaUserFriends className="text-6xl mb-4" />
          <p className="text-5xl font-bold mb-2 leading-none">
            <AnimatedCounter endValue={1500} duration={2000} />+
          </p>
          <p className="text-lg text-gray-800">Happy Customers</p>
        </div>

        {/* Years of Experience */}
        <div className="bg-namma-yellow text-black p-8 rounded-lg shadow-xl flex flex-col items-center justify-center text-center transform transition-transform duration-300 hover:scale-105">
          <FaAward className="text-6xl mb-4" />
          <p className="text-5xl font-bold mb-2 leading-none">
            <AnimatedCounter endValue={6} duration={2000} />+
          </p>
          <p className="text-lg text-gray-800">Years of Experience</p>
        </div>
      </div>

      {/* Book Now Button */}
      <button className="bg-namma-yellow text-black px-12 py-4 rounded-full font-bold text-xl mt-16 shadow-lg hover:bg-namma-dark-yellow transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-namma-yellow focus:ring-opacity-50 z-10">
        Book Now
      </button>
    </section>
  );
};

export default OurExperience;
