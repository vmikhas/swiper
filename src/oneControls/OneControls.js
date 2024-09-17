import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Thumbs} from "swiper/modules";
import Picture from "../constants/Picture";
import {useRef, useState} from "react";
import parse from "html-react-parser";
import 'swiper/css/thumbs';


export default function OneControls({lists, desc, images, arrow}) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={"one-controls"}>
      <h1 className={"carousel__title"}>One Controls</h1>

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
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
        modules={[Navigation, Thumbs]}
      >
        {lists.map(({ subtitle, text, type }, index) => (
          <SwiperSlide key={index + 1}>
            <div className={`carousel__item carousel__item_${index + 1}`} key={index}>
              <div className={"carousel__content-container"}>
                <h2 className={"carousel__subtitle"}>{parse(subtitle)}</h2>
                <p className={"carousel__text"}>{parse(text)}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <p className={"one-controls__desc"}>{parse(desc)}</p>

      <Swiper
        className={"one-controls__container"}
        slidesPerView={1}
        loop
        onSwiper={setThumbsSwiper}
        modules={[Thumbs]}
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={`one-controls__image one-controls__image_${index + 1}`} key={index}>
              <Picture {...item.image} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={"one-controls__button one-controls__button_prev"} ref={prevRef}>
        <Picture {...arrow.image} />
      </div>
      <div className={"one-controls__button one-controls__button_next"} ref={nextRef}>
        <Picture {...arrow.image} />
      </div>
    </div>
  );

}