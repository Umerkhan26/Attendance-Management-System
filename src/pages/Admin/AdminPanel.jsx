// src/pages/Admin/AdminPanel.jsx
import React from "react";
// import Sidebar from "../../components/AdminSidebar";
import { Outlet, Navigate } from "react-router-dom";

const AdminPanel = () => {
  const isAuthenticated = true; // Replace with your actual authentication logic

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" />;
  }

  return (
    <div style={{ display: "flex" }}>
      {/* <Sidebar /> */}
      <main style={{ padding: "20px", flexGrow: 1 }}>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminPanel;
