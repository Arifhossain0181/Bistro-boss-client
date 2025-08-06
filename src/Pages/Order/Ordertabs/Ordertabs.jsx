import React from "react";
import Foodcard from "../../../ComPonent/Foodcard/Foodcard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Ordertabs = ({ items }) => {
  const itemsPerPage = 6;

  // Split items into pages of 6
  const paginatedItems = [];
  for (let i = 0; i < items.length; i += itemsPerPage) {
    paginatedItems.push(items.slice(i, i + itemsPerPage));
  }

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {paginatedItems.map((pageItems, pageIndex) => (
          <SwiperSlide key={pageIndex}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pageItems.map((item, itemIndex) => (
                <Foodcard key={itemIndex} item={item} />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Ordertabs;
