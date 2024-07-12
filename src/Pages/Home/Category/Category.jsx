import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";

import cat1 from "../../../assets/home/slide1.jpg";
import cat2 from "../../../assets/home/slide2.jpg";
import cat3 from "../../../assets/home/slide3.jpg";
import cat4 from "../../../assets/home/slide4.jpg";
import cat5 from "../../../assets/home/slide5.jpg";
import SectionTitel from "../../../components/SectionTitel";

const Category = () => {
  return (
    <section>
        <section>
            <SectionTitel subHeading={'From 11:00am to 10:00pm'} heading={'ORDER ONLINE'}>

            </SectionTitel>
        </section>
        <Swiper
      slidesPerView={3}
      spaceBetween={30}
      autoplay={true}

      pagination={{
        clickable: true,
        autoplay:{
            delay:3000,
          }
        
      }}
      modules={[Autoplay ,Pagination]}
      
      className="mySwiper my-24"
    >
      <SwiperSlide>
        <img src={cat1} alt="" />
        <h1 className="text-3xl uppercase text-left ml-2 text-white shadow-lg item-center -mt-12">salad</h1>
      </SwiperSlide>
      <SwiperSlide>
        <img src={cat2} alt="" />
        <h1 className="text-3xl uppercase text-left ml-2 text-white shadow-lg item-center -mt-12">pizza</h1>

      </SwiperSlide>
      <SwiperSlide>
        <img src={cat3} alt="" />
        <h1 className="text-3xl uppercase text-left ml-2 text-white shadow-lg item-center -mt-12">soup</h1>

      </SwiperSlide>
      <SwiperSlide>
        <img src={cat4} alt="" />
        <h1 className="text-3xl uppercase text-left ml-2 text-white shadow-lg item-center -mt-12">Dessert</h1>

      </SwiperSlide>
      <SwiperSlide>
        <img src={cat5} alt="" />
        <h1 className="text-3xl uppercase text-left  text-white shadow-lg  -mt-12">salad</h1>
      </SwiperSlide>
      {/* <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide> */}
    </Swiper>
    </section>
  );
};

export default Category;
