import './style.scss';
import {swiperContent, verticalSwiperContent} from "./constants/copyright";
import SwiperTest from "./swiperTest/SwiperTest";
import VerticalSwiper from "./verticalSwiper/VerticalSwiper";

function App() {
  return (
    <div className="App">
      <SwiperTest {...swiperContent} />
      <VerticalSwiper {...verticalSwiperContent} />
    </div>
  );
}

export default App;
