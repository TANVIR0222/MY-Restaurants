import { Helmet } from "react-helmet-async";
import Cover from "../shared/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import SectionTitel from "../.././components/SectionTitel";
import useMenu from "../../Hooks/useMenu";
import Menucategory from "./Menucategory";
const Menu = () => {
  const [menu] = useMenu();
  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <>
      <Helmet>
        <title>MENU</title>
      </Helmet>
      <Cover img={menuImg} title={"our menu"} />
      <SectionTitel subHeading={"Don't miss"} heading={"TODAY'S OFFER"} />
      <Menucategory item={offered} />
    </>
  );
};

export default Menu;
