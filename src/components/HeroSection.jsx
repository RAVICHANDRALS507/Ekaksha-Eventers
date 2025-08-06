import React from 'react';
import BackgroundImage from '../assets/Background.jpg'; // adjust path as needed

const HeroSection = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center text-center px-4 relative"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      {/* Inline styles for marquee animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .marquee-container {
          overflow: hidden;
          white-space: nowrap;
          margin-bottom: 1.5rem;
        }
        .marquee-text {
          display: inline-block;
          padding: 0.75rem 0;
          color: #facc15; /* Tailwind yellow-400 */
          font-weight: 600;
          font-size: 1.5rem;
          animation: marquee 20s linear infinite;
        }
      `}</style>

      {/* Main Content */}
      <div className="max-w-xl w-full relative z-10 text-white">
        {/* Marquee */}
        <div className="marquee-container">
          <div className="marquee-text">
            🎉 Offer is coming soon for GANESH FESTIVAL! Stay tuned for Exclusive Deals 🎉! 🙏
          </div>
        </div>

        <h1 className="text-5xl font-bold mb-4">Welcome to Ekaksha Eventers</h1>
        <p className="text-lg mb-6">
          Ekaksha Eventers is a creative event management company specializing in planning and executing memorable events with precision and flair. From corporate gatherings and weddings to private parties and cultural functions, we bring your vision to life with seamless coordination, innovative concepts, and personalized service.
        </p>
        <a
          href="#services"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Explore Services
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
