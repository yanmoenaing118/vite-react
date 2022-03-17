import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

import { useState, useEffect } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/pagination";

import "./App.css";

SwiperCore.use([Pagination]);

export default () => {
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    console.log("swiper instance", swiper);
  }, [swiper]);

  const slideNext = () => swiper && swiper.slideNext();
  const slidePrev = () => swiper && swiper.slidePrev();

  return (
    <section>
      <Swiper
        spaceBetween={18}
        slidesPerView={1}
        pagination={{
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true
        }}
        modules={[Pagination]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        <SlidePrevButton />
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SlideNextButton />
        <div className="swiper-pagination"></div>
      </Swiper>
    </section>
  );
};

function SlideNextButton() {
  const swiper = useSwiper();

  const next = () => {
    console.log(swiper);
    swiper.slideNext();
  };

  return (
    <button
      onClick={next}
      style={{
        position: "absolute",
        right: "0",
        top: "50%",
        zIndex: "10",
      }}
    >
      next
    </button>
  );
}

function SlidePrevButton() {
  const swiper = useSwiper();

  const next = () => {
    console.log(swiper);
    swiper.slidePrev();
  };

  return (
    <button
      onClick={next}
      style={{
        position: "absolute",
        left: "0",
        top: "50%",
        zIndex: "10",
      }}
    >
      prev
    </button>
  );
}
