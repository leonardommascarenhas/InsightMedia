import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "swiper/css";

const Slider = () => {
  const images = Array.from({ length: 32 }, (_, index) => index + 1);
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={30}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 5 },
      }}
      slidesPerView={4}
      navigation={{
        prevEl: ".custom-prev",
        nextEl: ".custom-next",
      }}
      className="relative px-12  py-8 lg:py-24"
    >
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 custom-prev z-10">
        <FaArrowLeft />
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 custom-next z-10">
        <FaArrowRight />
      </div>
      {images.map((number) => (
        <SwiperSlide key={number}>
          <img
            src={`/assets/Clients/${number}.png`}
            alt={`Image ${number}`}
            className="h-16 w-16 lg:w-24 xl:w-32 lg:h-24 xl:h-32 object-contain"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
