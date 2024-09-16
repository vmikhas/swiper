import Picture from "../constants/Picture";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {useRef} from "react";


export default function SwiperTest({images, arrow}) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={"swiper"}>
      <h1 className={"swiper__title"}>Swiper</h1>

      <Swiper
        className={"swiper__container"}
        slidesPerView={1}
        loop={true}
        pagination={{clickable: true}}
        onSwiper={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        modules={[Pagination, Navigation]}>
        {images && images.map((item, id) => (
          <SwiperSlide className={"swiper__slide"} key={id + 1}>
            <div className={`swiper__image swiper__image_${id + 1}`} key={id + 1}>
              <Picture {...item.image} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={"swiper__button swiper__button_prev"} ref={prevRef}>
        <Picture {...arrow.image} />
      </div>
      <div className={"swiper__button swiper__button_next"} ref={nextRef}>
        <Picture {...arrow.image} />
      </div>
    </div>
  );
}