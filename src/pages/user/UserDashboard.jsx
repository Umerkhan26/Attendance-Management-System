// src/components/User/UserDashboard.jsx
import React from "react";
import UserSidebar from "../../components/UserSidebar";

const UserDashboard = () => {
  // Static data
  const totalAttendance = 30; // Example value
  const totalPresent = 25; // Example value
  const totalLeave = 5; // Example value
  const leaveRequestStatus =
    "Your leave request for 3 days from 12th to 14th September has been accepted."; // Example message

  return (
    <div className="flex">
      {/* Sidebar component */}
      <UserSidebar />
      <div className="flex-1 min-h-screen bg-gray-100 flex flex-col items-start p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          User Dashboard
        </h1>

        {/* Flex container to align the summary horizontally */}
        <div className="flex space-x-4 w-full">
          {/* Total Attendance */}
          <div className="flex-1 p-4 border rounded-lg shadow-md bg-white">
            <h2 className="text-lg font-bold">Total Attendance</h2>
            <div className="text-xl">{totalAttendance}</div>
          </div>

          {/* Total Present */}
          <div className="flex-1 p-4 border rounded-lg shadow-md bg-white">
            <h2 className="text-lg font-bold">Total Present</h2>
            <div className="text-xl">{totalPresent}</div>
          </div>

          {/* Total Leave */}
          <div className="flex-1 p-4 border rounded-lg shadow-md bg-white">
            <h2 className="text-lg font-bold">Total Leave</h2>
            <div className="text-xl">{totalLeave}</div>
          </div>
        </div>
        <h1 className="text-3xl mt-5 font-bold text-gray-800 mb-8">
          Your Leave Requests...
        </h1>
        {leaveRequestStatus && (
          <div className="mb-4  p-4 bg-blue-100 text-blue-800 border border-blue-200 rounded-lg">
            {leaveRequestStatus}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
