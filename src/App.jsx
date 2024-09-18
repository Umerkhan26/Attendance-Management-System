import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminPanel from "./pages/Admin/AdminPanel";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import ManageStudents from "./pages/Admin/ManageAttandance";
import AttendanceReports from "./pages/Admin/Report";
import LeaveRequests from "./pages/Admin/LeaveRequests";
import GradingSystem from "./pages/Admin/GradingSystem";
import Login from "./components/Login"; // Combined login page
import UserPanel from "./pages/User/UserPanel";
import UserDashboard from "./pages/User/UserDashboard"; // User dashboard component
import ViewAttendance from "./pages/User/ViewAttendance";
import MarkAttendance from "./pages/User/MarkAttendance";
import MarkLeave from "./pages/User/MarkLeave";
import EditProfile from "./pages/User/EditProfile";
import AllStudents from "./pages/Admin/AllStudents";
import ManageAttendance from "./pages/Admin/ManageAttandance";
import Report from "./pages/Admin/Report";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default landing page */}
        <Route path="/" element={<Login />} />

        {/* Admin routes */}
        <Route path="/admin" element={<AdminPanel />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="manage-attandance" element={<ManageAttendance />} />
          <Route path="attendance-reports" element={<AttendanceReports />} />
          <Route path="leave-requests" element={<LeaveRequests />} />
          <Route path="grading-system" element={<GradingSystem />} />
          <Route path="AllStudents" element={<AllStudents />} />
          <Route path="report" element={<Report />} />
        </Route>

        {/* User routes */}
        <Route path="/user" element={<UserPanel />}>
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="view-attendance" element={<ViewAttendance />} />
          <Route path="mark-attendance" element={<MarkAttendance />} />
          <Route path="mark-leave" element={<MarkLeave />} />
          <Route path="edit-profile" element={<EditProfile />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
