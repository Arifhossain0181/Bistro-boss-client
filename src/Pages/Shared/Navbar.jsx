import React from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contextProvider/AuthProvider"; // ✅
import { useContext } from "react";
import { MdShoppingCart } from "react-icons/md";
import UseCarts from '../../Hooks/Usecarts'
const Navbar = () => {
  const [cart] = UseCarts()
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };



  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/menu">Our Menu</NavLink>
      <NavLink to="/order/salad">Order Now</NavLink>
      <NavLink to="/Secrect">Secrect</NavLink>
      <NavLink to="/">
        <button className="btn "><MdShoppingCart className="mr-2" />
    <div className="badge badge-sm badge-secondary mr-2">{cart?.length}</div>
        </button>
      </NavLink>
      {user ? (
        <>
          <h4>{user?.displayName}</h4>
          <NavLink onClick={handleLogout}> Logout</NavLink>
        </>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>
        </>
      )}
    </>
  );
  return (
    <div>
      <>
        <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl shadow-sm">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-4"
              >
                {links}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">Bistro Box</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-4">{links}</ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Button</a>
          </div>
        </div>
      </>
    </div>
  );
};

export default Navbar;
