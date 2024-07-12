import { Outlet } from "react-router-dom";
import Header from "../Pages/shared/Header";
import Foooter from "../Pages/shared/Foooter";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Foooter></Foooter>
        </div>
    );
};

export default Main;