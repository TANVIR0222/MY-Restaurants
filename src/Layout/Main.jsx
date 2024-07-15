import { Outlet, useLocation } from "react-router-dom";
import Header from "../Pages/shared/Header";
import Foooter from "../Pages/shared/Foooter";

const Main = () => {
  const location = useLocation();
  const noHeader =
    location.pathname.includes("login") || location.pathname.includes("singup");
  return (
    <div>
      {noHeader || <Header></Header>}
      <Outlet></Outlet>
      {noHeader || <Foooter></Foooter>}
    </div>
  );
};

export default Main;
