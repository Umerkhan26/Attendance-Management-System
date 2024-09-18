// src/components/AdminSidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
      <nav>
        <ul>
          <li className="mb-4">
            <Link to="/admin/dashboard" className="hover:text-blue-300">
              Dashboard
            </Link>
          </li>

          <li className="mb-4">
            <Link to="/admin/AllStudents" className="hover:text-blue-300">
              Logged In Students
            </Link>
          </li>

          <li className="mb-4">
            <Link to="/admin/manage-attandance" className="hover:text-blue-300">
              Manage Attandance
            </Link>
          </li>

          <li className="mb-4">
            <Link to="/admin/leave-requests" className="hover:text-blue-300">
              Leave Requests
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/admin/reports" className="hover:text-blue-300">
              Generate Reports
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;
