import React, { useState, useEffect } from "react";
import axios from "axios";

// Mock API URL for demonstration purposes
const API_URL = "https://jsonplaceholder.typicode.com/users"; // Replace with your actual API

const Report = () => {
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [username, setUsername] = useState("");
  const [filteredRecords, setFilteredRecords] = useState([]);

  useEffect(() => {
    const fetchAttendanceData = async () => {
      try {
        const response = await axios.get(API_URL);
        // Mock data to simulate attendance records
        const data = response.data.map((user) => ({
          id: user.id,
          name: user.name,
          className: "Class " + ((user.id % 5) + 1), // Mock class assignment
          status: "Present",
          date: new Date().toISOString().split("T")[0], // Mock date (today)
        }));
        setAttendanceRecords(data);
      } catch (error) {
        console.error("Error fetching attendance data:", error);
      }
    };

    fetchAttendanceData();
  }, []);

  const handleGenerateReport = () => {
    const filtered = attendanceRecords.filter((record) => {
      const recordDate = new Date(record.date);
      const startDate = new Date(fromDate);
      const endDate = new Date(toDate);

      // Check if record date is within range
      const isDateInRange = recordDate >= startDate && recordDate <= endDate;

      // Check if record name matches
      const isNameMatching = username
        ? record.name.toLowerCase().includes(username.toLowerCase())
        : true;

      return isDateInRange && isNameMatching;
    });

    setFilteredRecords(filtered);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Generate Attendance Report</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Generate Report</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 mb-2 mr-2"
        />
        <input
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
          className="border p-2 mb-2 mr-2"
        />
        <input
          type="date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          className="border p-2 mb-2 mr-2"
        />
        <button
          onClick={handleGenerateReport}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Generate Report
        </button>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Report</h2>
        {filteredRecords.length > 0 ? (
          <table className="table-auto w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Class</th>
                <th className="py-3 px-6 text-left">Status</th>
                <th className="py-3 px-6 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredRecords.map((record) => (
                <tr key={record.id}>
                  <td className="py-3 px-6">{record.name}</td>
                  <td className="py-3 px-6">{record.className}</td>
                  <td className="py-3 px-6">{record.status}</td>
                  <td className="py-3 px-6">{record.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No records found for the selected criteria.</p>
        )}
      </div>
    </div>
  );
};

export default Report;
