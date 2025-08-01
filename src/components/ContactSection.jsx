import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full bg-white py-16 px-0">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-8 text-center">
          Get in Touch
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Details */}
          <div className="bg-blue-50 rounded-xl shadow-lg p-8 flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Office Details</h3>
            <p className="text-gray-700 mb-2">
              <strong>Ekaksha Eventers</strong><br />
              1039 1, Sarvajanika Hostel Rd, near andani circle, Vijayanagar 2nd Stage, Vidyaranyapura, Mysuru, Karnataka 570008
            </p>

            <h3 className="text-lg font-semibold text-blue-800 mt-6 mb-2">Office Opening Hours</h3>
            <p className="text-gray-700 mb-2">
              Monday - Saturday: 9:00 AM - 7:00 PM<br />
              Sunday: Closed
            </p>

            <h3 className="text-lg font-semibold text-blue-800 mt-6 mb-2">Phone & Email</h3>
            <p className="text-gray-700 mb-2">
              <span className="font-medium">Phone:</span>{" "}
              <a href="tel:+919876543210" className="text-blue-600 hover:underline">
                +91 8300794075
              </a><br />
              <span className="font-medium">Email:</span>{" "}
              <a href="mailto:info@ekakshaeventers.com" className="text-blue-600 hover:underline">
                ekakshaeventers143@gmail.com
              </a>
            </p>
          </div>

          {/* Google Map */}
          <div className="rounded-xl overflow-hidden shadow-lg h-80">
            <iframe
              title="Ekaksha Eventers Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746.1651991449826!2d76.64662487488106!3d12.285565487970306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf6f0cd4479401%3A0xbf2d03619110e190!2sEkaksha_eventers%20%2C%20Events%2C%20Wedding%20Planners%2C%20%26%20Decorators!5e1!3m2!1sen!2sin!4v1754025999755!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
