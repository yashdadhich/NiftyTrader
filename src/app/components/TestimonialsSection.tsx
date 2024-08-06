"use client"; 

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Grid, Pagination, Navigation } from 'swiper/modules'; 

import TestimonialCard from '../components/ui/TestimonialsCard'; 

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Superb app! You guys are great. Everything's at my fingertips now: option analysis, EMA, pivot points, company profiles, gaps up/down, FII & DII data, ban lists... What's not here?! You keep nothing hidden. Thank you very much, guys! Thanks a lot!",
      author: "Bhavyaa Narotambhai",
      image: "/UserWoman.png", 
    },
    {
      quote: "The website and app are incredibly intuitive and easy to navigate. Whether you're a seasoned trader or a beginner, you’ll find everything you need right at your fingertips. Overall, NiftyTrader has exceeded my expectations in every way.",
      author: "Rajkumari Sahani",
      image: "/User.png", 
    },
    {
      quote: "Very good app for intraday traders. Highly informative and easy to understand. Very good work done by the organization. Many thanks. Request all traders to use this app.",
      author: "Vibha Hegde",
      image: "/UserWoman.png", 
    },
    {
      quote: "This is the app I've been looking for for a long time. I couldn't find it anywhere else. It seems their understanding of user needs aligns perfectly with what I was exactly looking for. Thanks, guys, for making this possible!",
      author: "Anjan Banerjee",
      image: "/UserMan.png", 
    },
    {
      quote: "This is the app I've been looking for for a long time. I couldn't find it anywhere else. It seems their understanding of user needs aligns perfectly with what I was exactly looking for. Thanks, guys, for making this possible!",
      author: "Anjan Banerjee",
      image: "/UserMan.png", 
    },
    {
      quote: "This is the app I've been looking for for a long time. I couldn't find it anywhere else. It seems their understanding of user needs aligns perfectly with what I was exactly looking for. Thanks, guys, for making this possible!",
      author: "Anjan Banerjee",
      image: "/UserMan.png", 
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Client Testimonials</h2>
        <Swiper
          slidesPerView={2}
          grid={{
            rows: 2,
            fill: 'row'
          }}
          spaceBetween={30}
          pagination={{ clickable: true }}
          navigation
          modules={[Grid, Pagination, Navigation]}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-wrap justify-center">
                <div className="w-full p-2">
                  <TestimonialCard
                    quote={testimonial.quote}
                    author={testimonial.author}
                    image={testimonial.image}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
