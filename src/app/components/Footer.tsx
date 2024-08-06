import React from "react";
import { 
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="relative py-20 bg-cover text-white" style={{ backgroundImage: "url('/Bg.png')" }}>
        <div className="bg-cover py-20 text-white md:bg-[url('/Layers.png')]" >
          <div className="absolute inset-0 bg-no-repeat bg-left hidden md:block" style={{ backgroundImage: "url('/FooterBackground.png')" }}></div>
          <div className="relative container mx-auto flex flex-col md:flex-row justify-center md:justify-end items-center h-full text-center md:text-right">
            <div className="text-black">
              <p className="text-2xl">
                Screening Like a Pro with <br />
                <span className="font-bold">Nifty Trader</span>
              </p>
              <div className="mt-4">
                Stop wasting time and start winning!<br /> Get access to Nifty Trader&apos;s Stock Screeners today!
              </div>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 mt-4">
                Start Free Trial Now
              </button>
              <p className="mt-8">© 2023 NiftyTrader. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-black p-3 mt-10 z-10">
        <div className="flex justify-center md:justify-start items-center">
          <div className="flex space-x-4">
            <a href="#" className="text-[#3b5998] hover:text-[#2d4373]"> 
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a href="#" className="text-[#1DA1F2] hover:text-[#0c85d0]"> 
              <FaTwitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-[#f70505] hover:text-[#0c85d0]"> 
              <FaYoutube className="w-6 h-6" />
            </a>
            <a href="#" className="text-[#0077b5] hover:text-[#005582]"> 
              <FaLinkedinIn className="w-6 h-6" />
            </a>
            <a href="#" className="text-[#b32d45] hover:text-[#c7334a]">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-[#0088cc] hover:text-[#0077b3]"> 
              <FaTelegramPlane className="w-6 h-6" />
            </a>
          </div>
          <a href="https://www.NiftyTrader.com" className="text-white ml-auto" target="_blank" rel="noopener noreferrer">
            www.niftytrader.com
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
