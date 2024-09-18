// src/pages/User/ViewAttendance.jsx
import React, { useState, useEffect } from "react";
import UserSidebar from "../../components/UserSidebar";
import "././../../App.css";

const ViewAttendance = () => {
  const [attendanceRecords, setAttendanceRecords] = useState([]);

  useEffect(() => {
    const records = localStorage.getItem("attendanceRecords");
    if (records) {
      setAttendanceRecords(JSON.parse(records));
    } else {
      console.log("No attendance records found.");
    }
  }, []);

  return (
    <div className="flex h-screen">
      <UserSidebar className="flex-none w-64" />
      <div className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          View Attendance
        </h1>

        {attendanceRecords.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Date</th>
                  <th className="py-3 px-4 text-left">Name</th>
                  <th className="py-3 px-4 text-left">Email</th>
                  <th className="py-3 px-4 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {attendanceRecords.map((record, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-3 px-4">{record.date}</td>
                    <td className="py-3 px-4">{record.name}</td>
                    <td className="py-3 px-4">{record.email}</td>
                    <td className="py-3 px-4">{record.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-700">No attendance records available.</p>
        )}
      </div>
    </div>
  );
};

export default ViewAttendance;
