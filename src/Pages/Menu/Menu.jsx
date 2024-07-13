import { Helmet } from "react-helmet-async";
import Cover from "../shared/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertimg from "../../assets/menu/dessert-bg.jpeg"
import saladimg from "../../assets/menu/salad-bg.jpg"
import pizzaimg from "../../assets/menu/pizza-bg.jpg"
import drinksimg from "../../assets/menu/soup-bg.jpg"
import SectionTitel from "../.././components/SectionTitel";
import useMenu from "../../Hooks/useMenu";
import Menucategory from "./Menucategory";
const Menu = () => {
  const [menu] = useMenu();
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <>
      <Helmet>
        <title>MENU</title>
      </Helmet>
      {/* amin cover */}
      <Cover img={menuImg} title={"our menu"} />
      {/* offered item */}
      <SectionTitel subHeading={"Don't miss"} heading={"TODAY'S OFFER"} />
      <Menucategory item={offered} />
      {/* salad items  */}
      <Menucategory img={saladimg} title={'SALAD'} item={salad}/>

      {/* dessert item menu */}
      <Menucategory img={dessertimg} title={'DESSERT'} item={dessert}/>
      {/* pizza item menu */}
      <Menucategory img={pizzaimg} title={'PIZZA'} item={pizza}/>
      {/* drinks item menu */}
      <Menucategory img={drinksimg} title={'DRINKS'} item={soup}/>

    </>
  );
};

export default Menu;
