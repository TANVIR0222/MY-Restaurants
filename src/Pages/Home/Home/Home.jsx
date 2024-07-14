// import MenuItemCard from "../../shared/MenuItemCard";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Demo from "../Demo/Demo";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopulerMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner/>
      <Category/>
      <PopularMenu/>
      <Demo/>
      <Featured/>
      <Testimonials/>
    </div>
  );
};

export default Home;
