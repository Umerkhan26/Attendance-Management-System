// src/pages/Admin/AdminLeaveRequests.jsx
import React, { useState, useEffect } from "react";

const AdminLeaveRequests = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);

  useEffect(() => {
    const records = localStorage.getItem("leaveRequests");
    if (records) {
      setLeaveRequests(JSON.parse(records));
    } else {
      console.log("No leave requests found.");
    }
  }, []);

  const handleUpdateStatus = (index, status) => {
    const updatedRequests = [...leaveRequests];
    updatedRequests[index].status = status;
    setLeaveRequests(updatedRequests);
    localStorage.setItem("leaveRequests", JSON.stringify(updatedRequests));

    // Update user status message
    const userStatusMessages =
      JSON.parse(localStorage.getItem("userStatusMessages")) || {};
    const request = updatedRequests[index];
    userStatusMessages[
      request.studentName + request.rollNo
    ] = `Your leave request was ${status.toLowerCase()}.`;
    localStorage.setItem(
      "userStatusMessages",
      JSON.stringify(userStatusMessages)
    );
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Leave Requests</h1>

      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="w-full bg-gray-100 border-b border-gray-200">
            <th className="px-6 py-3 text-left text-gray-700 font-semibold">
              Student Name
            </th>
            <th className="px-6 py-3 text-left text-gray-700 font-semibold">
              Roll No
            </th>
            <th className="px-6 py-3 text-left text-gray-700 font-semibold">
              Subject
            </th>
            <th className="px-6 py-3 text-left text-gray-700 font-semibold">
              Days
            </th>
            <th className="px-6 py-3 text-left text-gray-700 font-semibold">
              Reason
            </th>
            <th className="px-6 py-3 text-left text-gray-700 font-semibold">
              Date
            </th>
            <th className="px-6 py-3 text-left text-gray-700 font-semibold">
              Status
            </th>
            <th className="px-6 py-3 text-left text-gray-700 font-semibold">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {leaveRequests.length > 0 ? (
            leaveRequests.map((request, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="px-6 py-4">{request.studentName}</td>
                <td className="px-6 py-4">{request.rollNo}</td>
                <td className="px-6 py-4">{request.subject}</td>
                <td className="px-6 py-4">{request.numberOfDays}</td>
                <td className="px-6 py-4">{request.reason}</td>
                <td className="px-6 py-4">{request.date}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                      request.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : request.status === "Accepted"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {request.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {request.status === "Pending" && (
                    <>
                      <button
                        onClick={() => handleUpdateStatus(index, "Accepted")}
                        className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-green-600"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleUpdateStatus(index, "Rejected")}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                      >
                        Reject
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="px-6 py-4 text-center">
                No leave requests available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminLeaveRequests;
