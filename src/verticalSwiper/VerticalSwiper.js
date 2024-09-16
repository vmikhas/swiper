import React, {useRef, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import Picture from "../constants/Picture";
import ReactPaginate from "react-paginate";

export default function VerticalSwiper({images, arrow}) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 1;

  const handlePageClick = (event) => {
    const newPage = event.selected;
    setCurrentPage(newPage);
    if (swiperRef.current) {
      swiperRef.current.slideTo(newPage);
    }
  };

  const handleSlideChange = (swiper) => {
    const newIndex = swiper.realIndex;
    setCurrentPage(newIndex);
  };

  return (
    <div className={"vertical-swiper"}>
      <h1 className={"vertical-swiper__title"}>Vertical Swiper</h1>

      <Swiper
        className={"vertical-swiper__container"}
        direction="vertical"
        slidesPerView={1}
        loop={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        onSlideChange={handleSlideChange}
        modules={[Navigation]}
      >
        {images && images.map((item, id) => (
          <SwiperSlide className={"swiper__slide"} key={id + 1}>
            <div className={`vertical-swiper__image vertical-swiper__image_${id + 1}`} key={id + 1}>
              <Picture {...item.image} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={"vertical-swiper__button vertical-swiper__button_prev"} ref={prevRef} onClick={() => swiperRef.current.slidePrev()}>
        <Picture {...arrow.image} />
      </div>
      <div className={"vertical-swiper__button vertical-swiper__button_next"} ref={nextRef} onClick={() => swiperRef.current.slideNext()}>
        <Picture {...arrow.image} />
      </div>

      <ReactPaginate
        className={"vertical-swiper__pagination"}
        pageClassName={"vertical-swiper__item"}
        pageLinkClassName={"vertical-swiper__link"}
        activeClassName={"vertical-swiper__item_active"}
        previousClassName={"vertical-swiper__item vertical-swiper__item_prev"}
        nextClassName={"vertical-swiper__item vertical-swiper__item_next"}
        pageCount={Math.ceil(images.length / itemsPerPage)}
        previousLabel={"Предыдущий слайд"}
        nextLabel={"Следующий слайд"}
        breakLabel={"..."}
        forcePage={currentPage}
        onPageChange={handlePageClick}
      />
    </div>
  );
}
