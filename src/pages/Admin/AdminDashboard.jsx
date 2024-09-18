// src/pages/Admin/AdminDashboard.jsx
import React from "react";
import AdminSidebar from "../../components/AdminSidebar";
const AdminDashboard = () => {
  // Static data for demo purposes
  const totalUsers = 100;
  const totalAttendance = 90;
  const totalLeave = 10;
  const gradingModule = {
    A: "26+ Days",
    B: "20-25 Days",
    C: "15-19 Days",
    D: "10-14 Days",
  };

  return (
    <div className="flex">
      {/* Sidebar component */}
      <AdminSidebar />

      <div className="flex-1 min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Admin Dashboard
        </h1>

        {/* Attendance Summary Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Users */}
          <div className="p-4 bg-white border rounded-lg shadow-md">
            <h2 className="text-lg font-bold">Total Students</h2>
            <div className="text-xl">{totalUsers}</div>
          </div>

          {/* Total Attendance */}
          <div className="p-4 bg-white border rounded-lg shadow-md">
            <h2 className="text-lg font-bold">Total Attendance</h2>
            <div className="text-xl">{totalAttendance}</div>
          </div>

          {/* Total Leave */}
          <div className="p-4 bg-white border rounded-lg shadow-md">
            <h2 className="text-lg font-bold">Total Leave Requests</h2>
            <div className="text-xl">{totalLeave}</div>
          </div>

          {/* Grading Module */}
          <div className="p-4 bg-white border rounded-lg shadow-md">
            <h2 className="text-lg font-bold">Grading System</h2>
            <ul>
              {Object.entries(gradingModule).map(([grade, days]) => (
                <li key={grade} className="text-gray-700">
                  {grade}: {days}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Reports and Attendance Management Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
          {/* Create User Attendance Report */}
          <div className="p-4 bg-white border rounded-lg shadow-md">
            <h2 className="text-lg font-bold">Create User Attendance Report</h2>
            <p>
              Select the dates to generate a report of specific user's
              attendance.
            </p>
            <div className="mt-4">
              <input type="date" className="border p-2 rounded mr-2" />
              <input type="date" className="border p-2 rounded mr-2" />
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Generate Report
              </button>
            </div>
          </div>

          {/* Create System Attendance Report */}
          <div className="p-4 bg-white border rounded-lg shadow-md">
            <h2 className="text-lg font-bold">Create System Report</h2>
            <p>Generate an overall attendance report from specified dates.</p>
            <div className="mt-4">
              <input type="date" className="border p-2 rounded mr-2" />
              <input type="date" className="border p-2 rounded mr-2" />
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Generate System Report
              </button>
            </div>
          </div>
        </div>

        {/* Attendance Management */}
        <div className="p-4 bg-white border rounded-lg shadow-md mb-8">
          <h2 className="text-lg font-bold">Manage Student Attendance</h2>
          <p>Edit, add, or delete students' attendance records.</p>
          <div className="mt-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded mr-2">
              Add Attendance
            </button>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded mr-2">
              Edit Attendance
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded">
              Delete Attendance
            </button>
          </div>
        </div>

        {/* Leave Approval Section */}
        <div className="p-4 bg-white border rounded-lg shadow-md">
          <h2 className="text-lg font-bold">Leave Approval Module</h2>
          <p>Review and approve or reject leave requests from students.</p>
          <div className="mt-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded mr-2">
              Approve Leave
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded">
              Reject Leave
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
