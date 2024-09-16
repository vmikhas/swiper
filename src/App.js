import './style.scss';
import {swiperContent, verticalSwiperContent} from "./constants/copyright";
import SwiperTest from "./swiperTest/SwiperTest";
import VerticalSwiper from "./verticalSwiper/VerticalSwiper";
import CarouselInCarousel from "./carouselInCarousel/CarouselInCarousel";

function App() {
  return (
    <div className="App">
      <SwiperTest {...swiperContent} />
      <VerticalSwiper {...verticalSwiperContent} />
      <CarouselInCarousel />
    </div>
  );
}

export default App;
