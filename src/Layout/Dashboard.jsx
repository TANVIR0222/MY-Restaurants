import { NavLink, Outlet } from "react-router-dom";
// import { BsCreditCard2Back } from "react-icons/bs";
// import { MdGroup, MdOutlineDateRange } from "react-icons/md";
// import { TiCalendar, TiHome, TiShoppingCart, TiStar } from "react-icons/ti";
// import { TfiEmail, TfiList, TfiSearch } from "react-icons/tfi";
// import {  FaUtensils } from "react-icons/fa";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PaymentIcon from "@mui/icons-material/Payment";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import useCard from "../Hooks/useCard";
const Dashboard = () => {
    const [card] = useCard()
  return (
    <div className="flex">
      <div className="w-72   flex flex-col gap-5  text-left min-h-screen bg-orange-300">
        <ul className="menu text-xl my-4 p-4 text-black uppercase">
          <NavLink to="/dashboard/userHome">
            {" "}
            <span className="mr-3  leading-10  text-center">
              <HomeOutlinedIcon color="primary" sx={{ fontSize: 30 }} />
            </span>{" "}
            Our Home{" "}
          </NavLink>

          <NavLink to="/dashboard/reservation">
            <span className="mr-3  leading-10  text-center">
              <CalendarMonthIcon color="primary" sx={{ fontSize: 30 }} />
            </span>
            reservation
          </NavLink>

          <NavLink to="/dashboard/paymentHistory">
            <span className="mr-3   leading-10  text-center">
              <PaymentIcon color="primary" sx={{ fontSize: 30 }} />
            </span>
            Payment History
          </NavLink>

          <NavLink to="/dashboard/cart">
            <span className="mr-3  leading-10  text-center">
              <AddShoppingCartIcon color="primary" sx={{ fontSize: 30 }} />
            </span>
            My Cart - ({card.length})
          </NavLink>

          <NavLink to="/dashboard/review">
            <span className="mr-3  leading-10  text-center">
              <AddReactionIcon color="primary" sx={{ fontSize: 30 }} />
            </span>
            add review
          </NavLink>

          <NavLink to="/dashboard/payment">
            <span className="mr-3  leading-10  text-center">
              <BookmarkAddedIcon color="primary" sx={{ fontSize: 30 }} />
            </span>
            my Booking
          </NavLink>
        </ul>
        <div className="divider divider-primary"></div>
        <NavLink to="/">
          {" "}
          <span className="mr-3  leading-10  text-center">
            <HomeOutlinedIcon color="primary" sx={{ fontSize: 30 }} />
          </span>{" "}
          Our Home{" "}
        </NavLink>
      </div>
      <div className="flex-1 p-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
