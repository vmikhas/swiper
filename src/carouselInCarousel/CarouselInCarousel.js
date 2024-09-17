import Picture from "../constants/Picture";
import parse from "html-react-parser";
import {useRef, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import "swiper/css/pagination";


export default function CarouselInCarousel({lists, arrow, listImages}) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeType, setActiveType] = useState(lists[0].type);
  console.log("activeType --- > " + activeType);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.realIndex;
    setActiveType(lists[currentIndex].type);
  };

  return (
    <div className={"carousel"}>
      <h1 className={"carousel__title"}>Carousel in carousel</h1>
      <Swiper
        className={"carousel__container"}
        slidesPerView={1}
        loop
        onSwiper={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        onSlideChange={handleSlideChange}
        modules={[Navigation]}
      >
        {lists.map(({subtitle, text, type}, index) => (
          <SwiperSlide key={index + 1}>
            <div className={`carousel__item carousel__item_${index + 1}`} key={index}>
              <h2 className={"carousel__subtitle"}>{parse(subtitle)}</h2>
              <p className={"carousel__text"}>{parse(text)}</p>

              <Swiper
                className={"carousel__images-container"}
                slidesPerView={1}
                loop
                pagination={{clickable: true}}
                modules={[Pagination]}
              >
                {listImages[type]?.map((item, id) => (
                  <SwiperSlide key={id + 1}>
                    <div className={`carousel__image carousel__image_${id + 1}`} key={id}>
                      <Picture {...item.image} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={"carousel__button carousel__button_prev"} ref={prevRef}>
        <Picture {...arrow.image} />
      </div>
      <div className={"carousel__button carousel__button_next"} ref={nextRef}>
        <Picture {...arrow.image} />
      </div>
    </div>
  );
}
