// src/components/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const UserSidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      <h2 className="text-2xl font-bold p-4">User Panel</h2>
      <nav className="flex-1 px-4">
        <NavLink
          to="/user/dashboard"
          className="block py-2 px-3 rounded hover:bg-gray-700"
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/user/mark-attendance"
          className="block py-2 px-3 rounded hover:bg-gray-700"
        >
          Mark Attendance
        </NavLink>
        <NavLink
          to="/user/view-attendance"
          className="block py-2 px-3 rounded hover:bg-gray-700"
        >
          View Attendance
        </NavLink>
        <NavLink
          to="/user/mark-leave"
          className="block py-2 px-3 rounded hover:bg-gray-700"
        >
          Leave Requests
        </NavLink>
        <NavLink
          to="/user/edit-profile"
          className="block py-2 px-3 rounded hover:bg-gray-700"
        >
          Edit Profile
        </NavLink>
      </nav>
    </div>
  );
};

export default UserSidebar;
