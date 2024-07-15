import { useContext } from "react";
import { AuthContex } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({children}) => {
    // using react route
    const location = useLocation();
    const {user,loading} = useContext(AuthContex);
    if(loading){
        return <progress  className="progress w-56 text-center"></progress>;
    }
    if(user){
        return children;
    }
    return <Navigate to={'/login'} state={{form : location}} replace ></Navigate>
};

export default PrivetRoute;