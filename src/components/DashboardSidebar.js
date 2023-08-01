import React from "react";
import { NavLink } from "react-router-dom";

const DashboardSidebar = ({ dark, children }) => {
  return (
    <div
      className={`drawer h-screen drawer-mobile mt-16 ${
        dark ? "bg-green-600" : ""
      }`}
    >
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">

        {/* TODO:<!-- ------------Page content here--------------- --> */}
        {children} 
        
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">

          {/* <!-- ------------------Sidebar content here-------------- --> */}
          <li>
            <NavLink to="/dashboard/add-admin">Add Admin</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/add-service">Add Service</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebar;
