
import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/order/Order";
import Contact from "../Pages/Contact/Contact";
import Login from "../auth/Login";
import SingUp from "../auth/SingUp";
import PrivetRoute from "./PrivetRoute";
import Secret from "../Pages/shared/secret/Secret";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/menu',
            element:<Menu/>
        },
        {
            path:'order/:category',
            element:<Order/>
        },
        {
            path:'contact',
            element:<Contact/>
        },
        {
            path:'login',
            element:<Login/>
        },
        {
            path:'singup',
            element:<SingUp/>
        },
        {
            path:'secret',
            element:<PrivetRoute><Secret></Secret></PrivetRoute>
        },

      ]
    },
  ]);