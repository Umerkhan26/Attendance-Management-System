// src/pages/User/MarkAttendance.jsx
import React, { useState, useEffect } from "react";
import UserSidebar from "../../components/UserSidebar";

// Mock function to simulate getting the currently logged-in student's information
const getCurrentStudent = () => {
  // Replace this with actual logic to get the logged-in student's info
  return {
    id: "12345",
    name: "John Doe",
    rollNumber: "S12345",
    email: "john.doe@example.com",
  };
};

const MarkAttendance = () => {
  const [attendanceMarked, setAttendanceMarked] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);
  const [attendanceStatus, setAttendanceStatus] = useState("Present");
  const [attendanceDate, setAttendanceDate] = useState("");

  useEffect(() => {
    // Fetch current student information when component mounts
    const student = getCurrentStudent();
    setCurrentStudent(student);
  }, []);

  const handleMarkAttendance = () => {
    if (!currentStudent || !attendanceDate) {
      alert(
        "Please select a date and ensure student information is available."
      );
      return;
    }

    // Fetch existing records
    const records = JSON.parse(localStorage.getItem("attendanceRecords")) || [];

    // Create new attendance record
    const attendanceRecord = {
      id: Date.now(),
      studentId: currentStudent.id,
      rollNumber: currentStudent.rollNumber,
      name: currentStudent.name,
      email: currentStudent.email,
      date: attendanceDate,
      status: attendanceStatus,
    };

    // Add new record
    records.push(attendanceRecord);

    // Store updated records
    localStorage.setItem("attendanceRecords", JSON.stringify(records));

    setAttendanceMarked(true);
  };

  return (
    <div className="flex">
      <UserSidebar />
      <div className="p-6 mx-5">
        <h1 className="text-2xl font-bold mb-4">Mark Your Attendance</h1>
        {currentStudent ? (
          <>
            <p className="mb-4">Logged in as: {currentStudent.name}</p>
            <div className="mb-4">
              <label className="block mb-2">Select Date:</label>
              <input
                type="date"
                value={attendanceDate}
                onChange={(e) => setAttendanceDate(e.target.value)}
                className="border p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Select Status:</label>
              <select
                value={attendanceStatus}
                onChange={(e) => setAttendanceStatus(e.target.value)}
                className="border p-2 w-full"
              >
                <option value="Present">Present</option>
                <option value="Absent">Absent</option>
                <option value="Leave">Leave</option>
              </select>
            </div>
            <button
              onClick={handleMarkAttendance}
              disabled={attendanceMarked}
              className={`bg-blue-500 text-white py-2 px-4 rounded ${
                attendanceMarked ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {attendanceMarked ? "Attendance Marked" : "Mark Attendance"}
            </button>
            {attendanceMarked && (
              <p className="text-green-500 mt-4">
                Attendance has been marked successfully!
              </p>
            )}
          </>
        ) : (
          <p>Loading student information...</p>
        )}
      </div>
    </div>
  );
};

export default MarkAttendance;
