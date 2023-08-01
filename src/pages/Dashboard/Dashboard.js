import React from "react";
import DashboardSidebar from "../../components/DashboardSidebar";
import { Outlet } from "react-router";

const Dashboard = ({ dark }) => {
  return (
    <DashboardSidebar className="overflow-hidden" dark={dark}>
      <Outlet />
    </DashboardSidebar>
  );
};

export default Dashboard;
