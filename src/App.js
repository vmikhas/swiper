import './style.scss';
import {carouselInCarousel, oneCarouselContent, swiperContent, verticalSwiperContent} from "./constants/copyright";
import SwiperTest from "./swiperTest/SwiperTest";
import VerticalSwiper from "./verticalSwiper/VerticalSwiper";
import CarouselInCarousel from "./carouselInCarousel/CarouselInCarousel";
import OneControls from "./oneControls/OneControls";

function App() {
  return (
    <div className="App">
      <SwiperTest {...swiperContent} />
      <VerticalSwiper {...verticalSwiperContent} />
      <CarouselInCarousel {...carouselInCarousel} />
      <OneControls {...oneCarouselContent} />
    </div>
  );
}

export default App;
