import React from "react";

export default function Founder() {
  return (
    <section id="founder" className="w-full bg-gradient-to-r from-purple-100 to-blue-100 py-16 px-0">
      <div className="max-w-3xl mx-auto px-4 flex flex-col items-center text-center">
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg" // Replace with actual founder image if available
          alt="Founder of Ekaksha Eventers"
          className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-lg mb-6"
        />
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">Susheel Naidu</h2>
        <h3 className="text-lg text-blue-500 mb-4 font-semibold">Founder & CEO, Ekaksha Eventers</h3>
        <p className="text-gray-700 text-lg mb-4">
          Susheel Naidu is the visionary founder of <strong>Ekaksha Eventers</strong>, bringing over a decade of experience in the event management industry. His passion for creativity, meticulous attention to detail, and commitment to client satisfaction have made Ekaksha Eventers a trusted name for unforgettable events.
        </p>
        <p className="text-gray-700 text-lg">
          Under his leadership, the company has successfully organized hundreds of events, from grand weddings and corporate conferences to intimate private parties. Ravi believes in turning every occasion into a cherished memory, ensuring each event is unique and flawlessly executed.
        </p>
      </div>
    </section>
  );
}