import SectionTitel from "../../../components/SectionTitel";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import '@smastrom/react-rating/style.css'
import  icon from '../../../assets/icon/Group.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <section>
        <SectionTitel
          subHeading={"What Our Clients Say"}
          heading={"TESTIMONIALS"}
        />
      </section>
      <div className="">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((item) => (
            <SwiperSlide key={item._id}>
              <div className="m-24 p-20 flex flex-col items-center justify-center text-center">
              <Rating style={{ maxWidth: 180 }} value={item.rating} readOnly />
                <img  className="mt-3" src={icon} alt="" />
                <p className="py-8">{item.details}</p>
                <h3 className="text-2xl text-orange-400">{item.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
