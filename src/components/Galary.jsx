import React from "react";

// Replace these URLs with your actual event images or use Unsplash/placeholder images
const images = [
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    alt: "Corporate Event",
    caption: "Corporate Annual Meet 2023",
  },
  {
    src: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    alt: "Wedding Event",
    caption: "Grand Wedding Reception",
  },
  {
    src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    alt: "Concert",
    caption: "Live Concert Night",
  },
  {
    src: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80",
    alt: "Birthday Party",
    caption: "Themed Birthday Bash",
  },
  {
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    alt: "Exhibition",
    caption: "Art & Trade Exhibition",
  },
  {
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    alt: "Private Party",
    caption: "Private Anniversary Party",
  },
];

export default function Galary() {
  return (
    <section id="portfolio" className="w-full bg-white py-16 px-0">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-10 text-center">
          Our Event Gallery
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                <p className="text-white text-base font-semibold drop-shadow">{img.caption}</p>
              </div>
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}