import React, { useState,useEffect } from "react";
import { FaRegCopy, FaCheck } from "react-icons/fa"; // Correct import for FaCheck and FaRegCopy

// SVG Icons
const SyncIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

const HeartIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const TrashIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m3.343-5.657L5.929 5.929m12.728 12.728L18.07 18.07M6.343 6.343L5.929 5.929m12.728 12.728L18.07 18.07M12 8a4 4 0 100 8 4 4 0 000-8z" />
  </svg>
);

const CopyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const ColorBox = ({ color, onCopy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    onCopy(color);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div 
      className="relative w-40 h-48 group cursor-pointer transform transition-all duration-300 hover:scale-105 rounded-2xl shadow-lg overflow-hidden"
      style={{ backgroundColor: color }}
      onClick={handleCopy}
    >
      {/* Gradient Overlay for Better Contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-20 pointer-events-none"></div>

      {/* Color Information */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
        <span className="text-lg font-bold text-center mb-2 drop-shadow-md">
          {color.toUpperCase()}
        </span>

        {/* Copy Indicator */}
        <div className="absolute bottom-4 flex items-center justify-center">
          {copied ? (
            <div className="flex items-center bg-green-500 text-white px-3 py-1 rounded-full animate-pulse">
              <FaCheck /> {/* Use FaCheck for copied state */}
              <span className="text-sm ml-2">Copied!</span>
            </div>
          ) : (
            <FaRegCopy 
              className="text-white text-2xl opacity-70 group-hover:opacity-100 transition-opacity" 
            /> 
            // Corrected the comment placement inside JSX
          )}
        </div>
      </div>
    </div>
  );
};

export default ColorBox;
