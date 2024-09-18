// src/pages/User/UserPanel.jsx
import React from "react";
import { Outlet } from "react-router-dom";

const UserPanel = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default UserPanel;
