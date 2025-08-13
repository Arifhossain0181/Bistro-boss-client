import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { FaShoppingCart ,FaHome ,FaCalendar ,FaAd,FaList,FaSearch } from "react-icons/fa";
import UseCarts from "../Hooks/Usecarts";
const Dashboard = () => {
  const [cart ,refetch] = UseCarts();
  return (
    <div className="flex">
      <div className="w64 min-h-screen bg-amber-600">
        <ul className="menu p-4">
          <li>
            <FaShoppingCart />
            <NavLink to="/dashboard/userhome">
              <FaHome />
             User Home
            </NavLink>
          </li>
          <li>
            <FaShoppingCart />
            <NavLink to="/dashboard/reservarion">
              <FaCalendar />
           Reservation
            </NavLink>
          </li>
          <li>
            <FaShoppingCart />
            <NavLink to="/dashboard/review">
              <FaAd />
             Add a  Review
              
            </NavLink>
          </li>
          <li>
            <FaShoppingCart />
            <NavLink to="/dashboard/mybooking">
              <FaList/>
              My Bookings
            </NavLink>
          </li>
          <li>
            <FaShoppingCart />
            <NavLink to="/dashboard/cart">
              <FaShoppingCart />
              My carts :  {cart.length}
            </NavLink>
          </li>
        
        <div className="divider"></div>
        <li>
            <FaShoppingCart />
            <NavLink to="/">
              <FaHome />
             User Home
            </NavLink>
          </li>
        <li>
            <FaSearch />
            <NavLink to="/order/salad">
              <FaHome />
             Menu
            </NavLink>
          </li>
        </ul>

      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
