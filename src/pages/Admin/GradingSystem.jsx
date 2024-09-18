import React, { useState, useEffect } from "react";
import axios from "axios";

// Mock API URLs for demonstration purposes
const STUDENTS_API_URL = "https://jsonplaceholder.typicode.com/users"; // Replace with your actual API
const ATTENDANCE_API_URL = "https://jsonplaceholder.typicode.com/posts"; // Replace with your actual API

const GradingSystem = () => {
  const [students, setStudents] = useState([]);
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [reportData, setReportData] = useState([]);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [selectedRollNumber, setSelectedRollNumber] = useState("");
  const [filteredStudents, setFilteredStudents] = useState([]);

  useEffect(() => {
    const fetchStudentsData = async () => {
      try {
        const response = await axios.get(STUDENTS_API_URL);
        // Mock data to simulate students
        const studentsData = response.data.map((student, index) => ({
          id: student.id,
          name: student.name,
          rollNumber: `RN${index + 1}`, // Generate a unique roll number
        }));
        setStudents(studentsData);
        setFilteredStudents(studentsData); // Initialize filteredStudents
      } catch (error) {
        console.error("Error fetching students data:", error);
      }
    };

    const fetchAttendanceData = async () => {
      try {
        const response = await axios.get(ATTENDANCE_API_URL);
        // Mock data to simulate attendance records
        const attendanceData = response.data.map((record, index) => ({
          id: index + 1,
          studentId: (index % 5) + 1, // Random student ID assignment
          status:
            index % 3 === 0 ? "Present" : index % 3 === 1 ? "Absent" : "Leave",
          date: new Date().toISOString().split("T")[0],
        }));
        setAttendanceRecords(attendanceData);
      } catch (error) {
        console.error("Error fetching attendance data:", error);
      }
    };

    fetchStudentsData();
    fetchAttendanceData();
  }, []);

  useEffect(() => {
    if (selectedRollNumber) {
      const student = students.find(
        (student) => student.rollNumber === selectedRollNumber
      );
      setFilteredStudents(student ? [student] : []);
    } else {
      setFilteredStudents(students);
    }
  }, [selectedRollNumber, students]);

  const handleGenerateReport = () => {
    if (!selectedRollNumber || !fromDate || !toDate) {
      alert("Please select a student roll number and date range.");
      return;
    }

    const selectedStudent = students.find(
      (student) => student.rollNumber === selectedRollNumber
    );
    if (!selectedStudent) {
      alert("Student not found.");
      return;
    }

    const filteredRecords = attendanceRecords.filter((record) => {
      const recordDate = new Date(record.date);
      const startDate = new Date(fromDate);
      const endDate = new Date(toDate);
      return (
        record.studentId === selectedStudent.id &&
        recordDate >= startDate &&
        recordDate <= endDate
      );
    });

    const presentCount = filteredRecords.filter(
      (record) => record.status === "Present"
    ).length;
    const absentCount = filteredRecords.filter(
      (record) => record.status === "Absent"
    ).length;
    const leaveCount = filteredRecords.filter(
      (record) => record.status === "Leave"
    ).length;

    setReportData({
      student: selectedStudent.name,
      presentCount,
      absentCount,
      leaveCount,
      records: filteredRecords,
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Leave Approval</h1>

      {/* Summary of attendance for all students */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Attendance Summary</h2>
        <table className="table-auto w-full bg-white shadow-md rounded-lg mb-4">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Student Name</th>
              <th className="py-3 px-6 text-left">Roll Number</th>
              <th className="py-3 px-6 text-left">Total Presents</th>
              <th className="py-3 px-6 text-left">Total Absents</th>
              <th className="py-3 px-6 text-left">Total Leaves</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => {
              const studentRecords = attendanceRecords.filter(
                (record) => record.studentId === student.id
              );
              const presentCount = studentRecords.filter(
                (record) => record.status === "Present"
              ).length;
              const absentCount = studentRecords.filter(
                (record) => record.status === "Absent"
              ).length;
              const leaveCount = studentRecords.filter(
                (record) => record.status === "Leave"
              ).length;

              return (
                <tr key={student.id}>
                  <td className="py-3 px-6">{student.name}</td>
                  <td className="py-3 px-6">{student.rollNumber}</td>
                  <td className="py-3 px-6">{presentCount}</td>
                  <td className="py-3 px-6">{absentCount}</td>
                  <td className="py-3 px-6">{leaveCount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Generate Report</h2>
        <input
          type="text"
          placeholder="Enter Roll Number"
          value={selectedRollNumber}
          onChange={(e) => setSelectedRollNumber(e.target.value)}
          className="border p-2 mb-2"
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

      {reportData.records && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Report for {reportData.student}
          </h2>
          <div className="mb-4">
            <p>Total Presents: {reportData.presentCount}</p>
            <p>Total Absents: {reportData.absentCount}</p>
            <p>Total Leaves: {reportData.leaveCount}</p>
          </div>
          <table className="table-auto w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Date</th>
                <th className="py-3 px-6 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {reportData.records.map((record) => (
                <tr key={record.id}>
                  <td className="py-3 px-6">{record.date}</td>
                  <td className="py-3 px-6">{record.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default GradingSystem;
