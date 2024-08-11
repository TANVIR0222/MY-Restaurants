// import { NavLink, Outlet } from "react-router-dom";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// import PaymentIcon from "@mui/icons-material/Payment";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import AddReactionIcon from "@mui/icons-material/AddReaction";
// import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
// import useCard from "../Hooks/useCard";
// import MenuIcon from '@mui/icons-material/Menu';
// import EmailIcon from '@mui/icons-material/Email';
// const Dashboard = () => {
//   const [card] = useCard();

//   return (
//     <div className="flex">
//       <div className="w-72   flex flex-col gap-5  text-left min-h-screen bg-orange-300">
//         <ul className="menu text-xl  p-4 text-black uppercase">

//           <span className="border-2 border-indigo-600 my-3 p-2 rounded">
//             <NavLink to="/dashboard/userHome">
//               {" "}
//               <span className="mr-3  leading-10  text-center">
//                 <HomeOutlinedIcon color="primary" sx={{ fontSize: 30 }} />
//               </span>{" "}
//               Our Home{" "}
//             </NavLink>
//           </span>

//           <span className="border-2 border-indigo-600 my-3 p-2 rounded">
//             <NavLink to="/dashboard/reservation">
//               <span className="mr-3  leading-10  text-center">
//                 <CalendarMonthIcon color="primary" sx={{ fontSize: 30 }} />
//               </span>
//               reservation
//             </NavLink>
//           </span>

//           <span className="border-2 border-indigo-600 my-3 p-2 rounded">
//             <NavLink to="/dashboard/paymentHistory">
//               <span className="mr-3   leading-10  text-center">
//                 <PaymentIcon color="primary" sx={{ fontSize: 30 }} />
//               </span>
//               Payment History
//             </NavLink>
//           </span>

//           <span className="border-2 border-indigo-600 my-3 p-2 rounded">
//             <NavLink to="/dashboard/cart">
//               <span className="mr-3  leading-10  text-center">
//                 <AddShoppingCartIcon color="primary" sx={{ fontSize: 30 }} />
//               </span>
//               My Cart - ({card.length})
//             </NavLink>
//           </span>

//           <span className="border-2 border-indigo-600 my-3 p-2 rounded">
//             <NavLink to="/dashboard/review">
//               <span className="mr-3  leading-10  text-center">
//                 <AddReactionIcon color="primary" sx={{ fontSize: 30 }} />
//               </span>
//               add review
//             </NavLink>
//           </span>

//           <span className="border-2 border-indigo-600 my-3 p-2 rounded">
//             <NavLink to="/dashboard/payment">
//               <span className="mr-3  leading-10  text-center">
//                 <BookmarkAddedIcon color="primary" sx={{ fontSize: 30 }} />
//               </span>
//               my Booking
//             </NavLink>
//           </span>
//         </ul>
//         <div className="divider divider-primary"></div>

//         <span className="border-2 mx-2  border-indigo-600  p-2 rounded">
//           <NavLink to="/">
//             {" "}
//             <span className="mr-3  leading-10  text-center">
//               <HomeOutlinedIcon color="primary" sx={{ fontSize: 30 }} />
//             </span>{" "}
//              Home{" "}
//           </NavLink>
//         </span>
//         <span className="border-2 mx-2  border-indigo-600  p-2 rounded">
//           <NavLink to="/order/:category'">
//             {" "}
//             <span className="mr-3  leading-10  text-center">
//               <MenuIcon color="primary" sx={{ fontSize: 30 }} />
//             </span>{" "}
//              Menu{" "}
//           </NavLink>
//         </span>
//         <span className="border-2 mx-2  border-indigo-600  p-2 rounded">
//           <NavLink to="/contact">
//             {" "}
//             <span className="mr-3  leading-10  text-center">
//               <EmailIcon color="primary" sx={{ fontSize: 30 }} />
//             </span>{" "}
//              Contact{" "}
//           </NavLink>
//         </span>
//       </div>
//       <div className="flex-1 p-10">
//         <Outlet></Outlet>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
