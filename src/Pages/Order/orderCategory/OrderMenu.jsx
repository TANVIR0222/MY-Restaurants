import useMenu from "../../../Hooks/useMenu";
import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import HomeCard from "../../shared/HomeCard";
import PaginationCard from "../pagination/PaginationCard";
import { useParams } from "react-router-dom";
const OrderMenu = () => {

  const categorise = ['salad' , 'pizza' , 'soup' , 'dessert' , 'drinks' ]
  const {category} = useParams();
  const initialIndex = categorise.indexOf(category)

  // mui com
  const [value, setValue] = React.useState(initialIndex);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const [menu] = useMenu();
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div className="mt-7">
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab value={0} label="salad" />
          <Tab value={1} label="soup" />
          <Tab value={2} label="dessert" />
          <Tab value={3} label="pizza" />
          <Tab value={4} label="drinks" />
        </Tabs>
      </Box>

      <div className="my-5 ">
        <div className="flex flex-col">

        <li
          className={`${
            value === 0 ? "show" : "hidden"
            } grid md:grid-cols-3 grid-cols-1 gap-8`}
            >
          {salad.map((item) => (
              <HomeCard key={item._id} item={item} />
              ))}
          <PaginationCard />
        </li>
        </div>
        <li
          className={`${
            value === 1 ? "show" : "hidden"
          } grid md:grid-cols-3 grid-cols-1 gap-8`}
        >
          {soup.map((item) => (
            <HomeCard key={item._id} item={item} />
          ))}
        </li>
        <li
          className={`${
            value === 2 ? "show" : "hidden"
          } grid md:grid-cols-3 grid-cols-1 gap-8`}
        >
          {dessert.map((item) => (
            <HomeCard key={item._id} item={item} />
          ))}
        </li>
        <li
          className={`${
            value === 3 ? "show" : "hidden"
          } grid md:grid-cols-3 grid-cols-1 gap-8`}
        >
          {pizza.map((item) => (
            <HomeCard key={item._id} item={item} />
          ))}
        </li>
        <li
          className={`${
            value === 4 ? "show" : "hidden"
          } grid md:grid-cols-3 grid-cols-1 gap-8`}
        >
          {drinks.map((item) => (
            <HomeCard key={item._id} item={item}></HomeCard>
          ))}
        </li>
      </div>
    </div>
  );
};

export default OrderMenu;
