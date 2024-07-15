import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useAuth from "../../Hooks/useAuth";
import useCard from "../../Hooks/useCard";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  // card
  const [card] = useCard();

  const { user, logOut } = useAuth();
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navitem = (
    <>
      <li className=" uppercase">
        <Link to={"/"}>Home</Link>
      </li>
      <li className=" uppercase">
        <Link to={"/menu"}>our menu</Link>
      </li>
      <li className=" uppercase">
        <Link to={"order/salad"}>our order</Link>
      </li>
      <li className=" uppercase">
        <Link to={"/contact"}>Contact</Link>
      </li>
      <li className=" uppercase">
        <Link to={"/dashboard"}>Dashboard</Link>
      </li>

      {user ? (
        <>
          <Button onClick={handleLogout} variant="contained">
            {user?.displayName}
          </Button>
          <Button onClick={handleLogout} variant="red">
            Logout
          </Button>
        </>
      ) : (
        <>
          <li className=" bg-blue-600 rounded justify-end uppercase">
            <Link to={"/login"}>Login</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="navbar  bg-white max-w-screen-xl text-black  z-20 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn z-30 btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-md"
            >
              {navitem}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-red-500 focus:bg-none">
            <Link to={"/"}>MY Restaurant</Link>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navitem}</ul>
        </div>
        <div className="navbar-end">
          
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={`${card.length}`} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default Header;
