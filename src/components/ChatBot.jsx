import React, { useState } from "react";

export default function ChatBot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Chatbot Floating Button */}
      <button
        className="fixed z-50 bottom-6 right-6 bg-gradient-to-br from-purple-500 via-blue-500 to-blue-700 text-white rounded-full shadow-2xl p-5 hover:scale-110 transition-transform focus:outline-none border-4 border-white animate-bounce"
        onClick={() => setOpen((o) => !o)}
        aria-label="Open ChatBot"
        style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)" }}
      >
        <span className="relative flex items-center justify-center">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-8a2 2 0 012-2h2M12 12v.01M12 16h.01M8 12h.01M16 12h.01"
            />
          </svg>
          <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs text-blue-900 font-bold px-2 py-0.5 rounded-full shadow">
            Chat
          </span>
        </span>
      </button>
      {/* Chatbot Popup */}
      {open && (
        <div className="fixed z-50 bottom-24 right-6 w-80 max-w-xs bg-white rounded-2xl shadow-2xl border border-blue-200 p-4 animate-fade-in">
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold text-blue-700 text-lg flex items-center gap-2">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-8a2 2 0 012-2h2" />
                <circle cx="12" cy="12" r="1" fill="currentColor" />
              </svg>
              Chat with us
            </span>
            <button
              className="text-gray-400 hover:text-blue-600"
              onClick={() => setOpen(false)}
              aria-label="Close ChatBot"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="text-gray-600 text-sm mb-3">
            Hi! How can we help you today?
          </div>
          <input
            type="text"
            className="w-full border rounded px-3 py-2 mb-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Type your message..."
          />
          <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded font-semibold hover:from-purple-600 hover:to-blue-600 transition">
            Send
          </button>
        </div>
      )}
      {/* Optional: Add a fade-in animation */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease;
        }
      `}</style>
    </>
  );
}