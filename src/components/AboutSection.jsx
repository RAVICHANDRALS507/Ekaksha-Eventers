import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src="/images/about.jpg" alt="About" className="rounded-lg shadow-md" />
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-gray-700">
            We are a creative team that builds responsive websites, mobile apps, and custom software.
            With years of experience and dedication, we deliver high-quality digital solutions to our clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
