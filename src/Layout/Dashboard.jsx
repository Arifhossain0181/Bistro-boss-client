import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { FaShoppingCart ,FaHome ,FaCalendar ,FaAd,FaList,FaSearch ,FaEnvelope ,FaUtensilSpoon ,FaUsers ,FaBook} from "react-icons/fa";
import UseCarts from "../Hooks/Usecarts";
import Useadmin from '../Hooks/Useadmin'
const Dashboard = () => {
  const [cart ,refetch] = UseCarts();
  // todo : get is dmin value from database
  const isadmin = Useadmin();
  return (
    <div className="flex">
      <div className="w64 min-h-screen bg-amber-600">
        <ul className="menu p-4">
          {
            isadmin ?
            <>
            <li>
            <FaShoppingCart />
            <NavLink to="/dashboard/adminhome">
              <FaHome />
             Admin Home
            </NavLink>
          </li>
          <li>
            <FaShoppingCart />
            <NavLink to="/dashboard/additem">
              <FaUtensilSpoon />
              Add an Item
            </NavLink>
          </li>
          <li>
            <FaShoppingCart />
            <NavLink to="/dashboard/manageitems">
              <FaList />
              Manage Items
              
            </NavLink>
          </li>
          <li>
            <FaShoppingCart />
            <NavLink to="/dashboard/managebooking">
              <FaBook/>
              Manage Bookings
            </NavLink>
          </li>
          <li>
            <FaShoppingCart />
            <NavLink to="/dashboard/allusers">
              <FaUsers />
              All Users
            </NavLink>
          </li>
            </>:
            <>
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
            </>
          }
        {/* comMon link */
            // shared link
        }
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
        <li>
            <FaSearch />
            <NavLink to="/order/salad">
              <FaEnvelope />
            Contact
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
