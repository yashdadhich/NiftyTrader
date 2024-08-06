import React from 'react';
import SwiperTable from './ui/SwiperTable';

const FeaturesSection = () => {
  return (
    <section className="py-8"  style={{ backgroundImage: "url('/OptionScreener.png')" }}>
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold m-5 text-black">Option Screener</h2>
        
      <SwiperTable />  
      
      
      </div>
    </section>
  );
};

export default FeaturesSection;
