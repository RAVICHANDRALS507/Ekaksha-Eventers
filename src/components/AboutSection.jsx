import React from 'react';
import Logo from '../assets/Logo.png';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src={Logo} alt="About" className="w-80 mx-auto" />
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-gray-700 text-justify">
            Ekaksha Eventers, headquartered in Vidyaranyapura, Mysuru, Karnataka, is a well-established event management company with over 11 years of experience orchestrating events ranging from birthdays and naming ceremonies to weddings and corporate functions. Their reputation is built on trust, creativity, and consistent delivery of memorable experiences.<br></br>
            Clients consistently highlight Ekaksha Eventers’ strengths in providing excellent value for money—combining affordable pricing with high-quality delivery, earning them a 4.8 – 4.9 out of 5 rating on various local platforms. Word-of-mouth recommendations frequently praise their timely execution and trustworthy performance. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
