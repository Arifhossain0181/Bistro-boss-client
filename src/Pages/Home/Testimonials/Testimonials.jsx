import React from "react";
import SectionTilte from "../../../ComPonent/SectionTitle/SectionTilte";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useState, useEffect } from "react";
const Testimonials = () => {
  const [reviws, setres] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/remenu`)
      .then((res) => res.json())
      .then((data) => {
        setres(data);
      });
  }, []);
  return (
    <div>
      <section className="my-20">
        <SectionTilte
          heading=" testimonial"
          subheading="What our clinet say"
        ></SectionTilte>
        <div className="">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {reviws.map((review) => (
              <SwiperSlide key={review._id}>
                <div className="m-24 flex flex-col items-center">
                  <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
                  <h4>{review.details}</h4>
                  <h3 className="text-2xl text-orange-400">{review.name}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
