import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { 
  FaShoppingCart,
  FaHome,
  FaCalendar,
  FaAd,
  FaList,
  FaSearch,
  FaEnvelope,
  FaUtensilSpoon,
  FaUsers,
  FaBook
} from "react-icons/fa";

import UseCarts from "../Hooks/Usecarts";
import useAdmin from "../Hooks/Useadmin";

const Dashboard = () => {
  const [cart] = UseCarts();
  const [isAdmin, isAdminLoading] = useAdmin(); // ✅ ধরে নাও হুক থেকে boolean + loading আসবে

  if (isAdminLoading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-amber-600">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminhome">
                  <FaHome /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/additem">
                  <FaUtensilSpoon /> Add an Item
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageitems">
                  <FaList /> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/managebooking">
                  <FaBook /> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">
                  <FaUsers /> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userhome">
                  <FaHome /> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymenthistory">
                  <FaCalendar /> Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <FaAd /> Add a Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaList /> Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart /> My Cart: {cart.length}
                </NavLink>
              </li>
            </>
          )}

          {/* ✅ Common links (both user & admin) */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaSearch /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <FaEnvelope /> Contact
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
