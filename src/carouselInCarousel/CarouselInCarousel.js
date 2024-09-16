import Picture from "../constants/Picture";


export default function CarouselInCarousel({images}) {
  return (
    <div className={"carousel"}>
      <h1 className={"carousel__title"}>Carousel in carousel</h1>

      {/*<div className={"swiper__button swiper__button_prev"} ref={prevRef}>*/}
      {/*  <Picture {...arrow.image} />*/}
      {/*</div>*/}
      {/*<div className={"swiper__button swiper__button_next"} ref={nextRef}>*/}
      {/*  <Picture {...arrow.image} />*/}
      {/*</div>*/}
    </div>
  );
}