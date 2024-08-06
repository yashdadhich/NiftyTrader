
"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const SwiperTable = () => {
  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide className="custom-swiper-slide">
        <img src="/Table.png" className="w-full h-auto" alt="Table 1" />
      </SwiperSlide>
      <SwiperSlide className="custom-swiper-slide">
        <img src="/Table.png" className="w-full h-auto" alt="Table 2" />
      </SwiperSlide>
      <SwiperSlide className="custom-swiper-slide">
        <img src="/Table.png" className="w-full h-auto" alt="Table 3" />
      </SwiperSlide>
    </Swiper>
  );
}

export default SwiperTable;
