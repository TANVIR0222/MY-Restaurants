import { Link } from "react-router-dom";


const Header = () => {
  const navitem = <>
    <li className=" uppercase"><Link to={'/'} >Home</Link></li>
    <li className=" uppercase"><Link to={'/menu'} >our menu</Link></li>
    <li className=" uppercase"><Link to={'order/salad'} >our order</Link></li>
    <li className=" uppercase"><Link to={'/contact'} >Contact</Link></li>
    <li className=" uppercase"><Link to={'/login'} >Login</Link></li>


  </>
  return (
    <>

      <div className="navbar bg-opacity-30 bg-black max-w-screen-xl text-white fixed z-10 ">
        <div className="navbar-start">
          <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            {
              navitem
            }
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-red-500 focus:bg-none">
            <Link to={'/'}>MY Restaurant</Link>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {
              navitem
            }
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default Header;
