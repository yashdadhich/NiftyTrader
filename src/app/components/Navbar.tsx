import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-black bg-opacity-50 p-3 fixed w-full top-0 left-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src={'/Logo.png'} 
            alt="NiftyTrader Logo" 
            width={40} 
            height={40} 
            className="rounded-full" 
          />
          <span className="text-white text-lg cursor-pointer flex items-center">
            <span className="font-bold">Nifty</span>
            <span>Trader</span>
          </span>
        </Link>
        <Link href="/visit-website">
          <button className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">
            Visit Website
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
