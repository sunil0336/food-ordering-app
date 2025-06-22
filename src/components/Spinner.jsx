import React from "react";

const Spinner = () => (
  <div className="relative w-full h-screen flex items-center justify-center">
    {/* Overlay for blur and dark */}
    <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-0"></div>
    {/* Spinner content */}
    <div className="relative z-10 w-20 h-20 flex items-center justify-center">
      <svg
        className="absolute animate-spin w-20 h-20 text-orange-400"
        viewBox="0 0 50 50"
      >
        <circle
          className="opacity-20"
          cx="25"
          cy="25"
          r="20"
          stroke="currentColor"
          strokeWidth="6"
          fill="none"
        />
        <circle
          className="opacity-80"
          cx="25"
          cy="25"
          r="20"
          stroke="url(#gradient)"
          strokeWidth="6"
          fill="none"
          strokeDasharray="90"
          strokeDashoffset="60"
        />
        <defs>
          <linearGradient
            id="gradient"
            x1="0"
            y1="0"
            x2="50"
            y2="50"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#f59e42" />
            <stop offset="1" stopColor="#fbbf24" />
          </linearGradient>
        </defs>
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-orange-500 font-bold text-base">
        Loading
      </span>
    </div>
  </div>
);

export default Spinner;