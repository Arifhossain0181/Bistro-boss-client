import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTilte from '../../../ComPonent/SectionTitle/SectionTilte'
const Catagori = () => {
  return (
   <section>
    <SectionTilte 

    subheading={'From 11.30 to 10.00'}
     heading={'Order online'}
    >
       
        
    </SectionTilte>
     <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper mb-24                                     "
    >
      <SwiperSlide>
        <img src={slide1} alt="" />
        <h3 className="text-2xl text-center uppercase -mt-20 text-white">Salads</h3>
      </SwiperSlide>
      <SwiperSlide>
        
        <img src={slide4} alt="" />
         <h3 className="text-2xl text-center uppercase -mt-20 text-white">desserts</h3>
      </SwiperSlide>
      <SwiperSlide>
       
        <img src={slide2} alt="" />
         <h3 className="text-2xl text-center uppercase -mt-20 text-white">Pizzas</h3>
      </SwiperSlide>
      <SwiperSlide>
  
        <img src={slide3} alt="" />
         <h3 className="text-2xl text-center uppercase -mt-20 text-white">SouPs</h3>
      </SwiperSlide>
      <SwiperSlide>
        
        <img src={slide5} alt="" />
         <h3 className="text-2xl text-center uppercase -mt-20 text-white">salads</h3>
      </SwiperSlide>
    </Swiper>
   </section>
  );
};

export default Catagori;
