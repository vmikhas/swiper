import Picture from "../constants/Picture";
import parse from "html-react-parser";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

export default function CarouselInCarousel({ lists, arrow, listImages }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

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
        modules={[Navigation]}
      >
        {lists.map(({ subtitle, text }, index) => (
          <SwiperSlide key={index + 1}>
            <div className={`carousel__item carousel__item_${index + 1}`} key={index}>
              <h2 className={"carousel__subtitle"}>{parse(subtitle)}</h2>
              <p className={"carousel__text"}>{parse(text)}</p>

              {/* Вложенный карусель для изображений */}
              <div className={`carousel__images-container carousel__images-container_${index + 1}`}>
                {Object.keys(listImages).map((category, categoryIndex) => (
                  <div className={`carousel__category carousel__category_${category}`} key={categoryIndex}>
                    {listImages[category].map((item, id) => (
                      <div className={`carousel__image carousel__image_${id + 1}`} key={id}>
                        <Picture {...item.image} />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
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
