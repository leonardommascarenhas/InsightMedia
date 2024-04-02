import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Slider = () => {
  const swiper = useSwiper();
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={30}
      slidesPerView={5}
      navigation
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <button className="swiper-button-prev" onClick={() => swiper.slidePrev()}>
        <FaArrowLeft />
      </button>
      <button className="swiper-button-next" onClick={() => swiper.slideNext()}>
        <FaArrowRight />
      </button>
    </Swiper>
  );
};

export default Slider;
