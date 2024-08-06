import React from 'react';

const HeroSection = () => {
  return (
    <main 
    className="relative py-16 bg-cover bg-center" 
    style={{ backgroundImage: "url('/Background.png')" }}
  >
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-white">STOCK SCREENING SIMPLIFIED!</h1>
          <p className="mt-5 text-white">Find Winning Stock Faster with Nifty Trader's <br/>Advanced Stock Screening Tool</p>
          <button className="bg-sky-400 text-white px-6 py-3 rounded shadow-lg hover:bg-blue-600 mt-4">
            Free Trial
          </button>    
              </div>
        <div className="mt-8 relative">
          <img
            src="/VideoThumbnail.svg"
            alt="Video Thumbnail"
            className="mx-auto rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-red-600 rounded-full p-4 shadow-lg">
              <svg
                className="h-8 w-8 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11.5v5l4-2.5-4-2.5z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
