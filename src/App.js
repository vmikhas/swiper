import './style.scss';
import {swiperContent} from "./constants/copyright";
import SwiperTest from "./swiperTest/SwiperTest";

function App() {
  return (
    <div className="App">
      <SwiperTest {...swiperContent} />
    </div>
  );
}

export default App;
