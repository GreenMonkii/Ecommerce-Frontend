import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ImageSwiper = (props) => {
  return (
    <Swiper
      modules={[Navigation]}
      slidesPerView={1}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
    >
      {props.image.map((img, key) => (
        <SwiperSlide key={key}>
          <img
            src={`${process.env.REACT_APP_API_URL}/img/${img}`}
            alt=""
            style={{ height: "auto", maxWidth: "100%", objectFit: "cover" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSwiper;
