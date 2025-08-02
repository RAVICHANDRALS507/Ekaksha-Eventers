import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="h-screen bg-blue-100 flex items-center justify-center text-center px-4">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .marquee-container {
          overflow: hidden;
          white-space: nowrap;
          /* border-bottom: 1px solid #93c5fd;  Removed underline */
          margin-bottom: 1.5rem; /* mb-6 */
        }
        .marquee-text {
          display: inline-block;
          padding: 0.75rem 0; /* slightly bigger vertical padding */
          color: #1d4ed8; /* Tailwind blue-700 */
          font-weight: 600;
          font-size: 1.5rem; /* increased size */
          animation: marquee 20s linear infinite;
        }
      `}</style>

      <div className="max-w-xl w-full relative">
        {/* Marquee */}
        <div className="marquee-container">
          <div className="marquee-text">
            🎉 Offer is coming soon for GANESH FESTIVAL! Stay tuned for Exclusive Deals🎉! 🙏
          </div>
        </div>

        <h1 className="text-5xl font-bold mb-4">Welcome to Ekaksha Eventers</h1>
        <p className="text-lg mb-6">
          Ekaksha Eventers is a creative event management company specializing in planning and executing memorable events with precision and flair. From corporate gatherings and weddings to private parties and cultural functions, we bring your vision to life with seamless coordination, innovative concepts, and personalized service.
        </p>
        <a href="#services" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
          Explore Services
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
