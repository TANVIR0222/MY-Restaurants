import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Banimg1 from "../../../assets/home/01.jpg";
import Banimg2 from "../../../assets/home/02.jpg";
import Banimg3 from "../../../assets/home/03.png";
import Banimg4 from "../../../assets/home/04.jpg";
import Banimg5 from "../../../assets/home/05.png";
import Banimg6 from "../../../assets/home/06.png";

const Banner = () => {
  return (
    <div >
      <Carousel autoPlay={Boolean} className=" text-center items-center">
        <div>
          <img src={Banimg1} />
        </div>
        <div>
          <img src={Banimg2} />
        </div>
        <div>
          <img src={Banimg3} />
        </div>
        <div>
          <img src={Banimg4} />
        </div>
        <div>
          <img src={Banimg5} />
        </div>
        <div>
          <img src={Banimg6} />
        </div>
        {/*  */}
      </Carousel>
    </div>
  );
};

export default Banner;
