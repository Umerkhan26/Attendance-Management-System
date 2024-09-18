// src/pages/User/MarkLeave.jsx
import React, { useState } from "react";
import UserSidebar from "../../components/UserSidebar";
import "././../../App.css";

const MarkLeave = () => {
  const [subject, setSubject] = useState("");
  const [numberOfDays, setNumberOfDays] = useState("");
  const [reason, setReason] = useState("");
  const [studentName, setStudentName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handleRequestLeave = () => {
    const newLeaveRequest = {
      subject,
      numberOfDays,
      reason,
      studentName,
      rollNo,
      date: new Date().toLocaleDateString(),
      status: "Pending",
    };

    // Add to local storage
    const existingRequests =
      JSON.parse(localStorage.getItem("leaveRequests")) || [];
    localStorage.setItem(
      "leaveRequests",
      JSON.stringify([...existingRequests, newLeaveRequest])
    );

    // Clear form fields and set status message
    setSubject("");
    setNumberOfDays("");
    setReason("");
    setStudentName("");
    setRollNo("");
    setStatusMessage(
      "Your leave request has been submitted and is pending approval."
    );
  };

  return (
    <div className="flex h-screen">
      <UserSidebar className="flex-none w-64" />
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
          <h1 className="text-2xl font-bold mb-4">Request Leave</h1>
          {statusMessage && (
            <div className="mb-4 p-2 bg-blue-100 text-blue-800 rounded">
              {statusMessage}
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Student Name</label>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Roll Number</label>
            <input
              type="text"
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter your roll number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Leave subject"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Number of Days</label>
            <input
              type="number"
              value={numberOfDays}
              onChange={(e) => setNumberOfDays(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Number of days"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Reason</label>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter leave reason"
            />
          </div>
          <button
            onClick={handleRequestLeave}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Request Leave
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarkLeave;
