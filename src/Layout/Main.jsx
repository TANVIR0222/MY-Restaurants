import { Outlet, useLocation } from "react-router-dom";
import Header from "../Pages/shared/Header";
import Foooter from "../Pages/shared/Foooter";

const Main = () => {
    const location = useLocation();
    const noHeader = location.pathname.includes('login')
    const noFooter = location.pathname.includes('login')
    const nosHeader = location.pathname.includes('singup')
    const nosFooter = location.pathname.includes('singup')
    return (
        <div>
            {noHeader ||nosHeader || <Header></Header>}
            <Outlet></Outlet>
            {noFooter || nosFooter || <Foooter></Foooter>}
        </div>
    );
};

export default Main;