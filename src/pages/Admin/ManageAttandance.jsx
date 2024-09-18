import React, { useState, useEffect } from "react";
import axios from "axios";

// Mock API URL for demonstration purposes
const API_URL = "https://jsonplaceholder.typicode.com/users"; // Replace with your actual API

const ManageAttendance = () => {
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [newRecord, setNewRecord] = useState({
    name: "",
    className: "",
    status: "",
    date: "",
  });
  const [editingRecord, setEditingRecord] = useState(null);

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

  const handleAddRecord = () => {
    const newId = Date.now();
    setAttendanceRecords([...attendanceRecords, { ...newRecord, id: newId }]);
    setNewRecord({ name: "", className: "", status: "", date: "" });
  };

  const handleEditRecord = (id) => {
    const record = attendanceRecords.find((rec) => rec.id === id);
    setEditingRecord(record);
  };

  const handleSaveEdit = () => {
    setAttendanceRecords(
      attendanceRecords.map((rec) =>
        rec.id === editingRecord.id ? editingRecord : rec
      )
    );
    setEditingRecord(null);
  };

  const handleDeleteRecord = (id) => {
    setAttendanceRecords(attendanceRecords.filter((rec) => rec.id !== id));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Manage Attendance</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Add New Record</h2>
        <input
          type="text"
          placeholder="Name"
          value={newRecord.name}
          onChange={(e) => setNewRecord({ ...newRecord, name: e.target.value })}
          className="border p-2 mb-2"
        />
        <input
          type="text"
          placeholder="Class"
          value={newRecord.className}
          onChange={(e) =>
            setNewRecord({ ...newRecord, className: e.target.value })
          }
          className="border p-2 mb-2"
        />
        <select
          value={newRecord.status}
          onChange={(e) =>
            setNewRecord({ ...newRecord, status: e.target.value })
          }
          className="border p-2 mb-2"
        >
          <option value="">Select Status</option>
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
        </select>
        <input
          type="date"
          value={newRecord.date}
          onChange={(e) => setNewRecord({ ...newRecord, date: e.target.value })}
          className="border p-2 mb-2"
        />
        <button
          onClick={handleAddRecord}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Record
        </button>
      </div>

      {editingRecord && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Edit Record</h2>
          <input
            type="text"
            value={editingRecord.name}
            onChange={(e) =>
              setEditingRecord({ ...editingRecord, name: e.target.value })
            }
            className="border p-2 mb-2"
          />
          <input
            type="text"
            value={editingRecord.className}
            onChange={(e) =>
              setEditingRecord({ ...editingRecord, className: e.target.value })
            }
            className="border p-2 mb-2"
          />
          <select
            value={editingRecord.status}
            onChange={(e) =>
              setEditingRecord({ ...editingRecord, status: e.target.value })
            }
            className="border p-2 mb-2"
          >
            <option value="">Select Status</option>
            <option value="Present">Present</option>
            <option value="Absent">Absent</option>
          </select>
          <input
            type="date"
            value={editingRecord.date}
            onChange={(e) =>
              setEditingRecord({ ...editingRecord, date: e.target.value })
            }
            className="border p-2 mb-2"
          />
          <button
            onClick={handleSaveEdit}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Save Changes
          </button>
        </div>
      )}

      <table className="table-auto w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Class</th>
            <th className="py-3 px-6 text-left">Status</th>
            <th className="py-3 px-6 text-left">Date</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {attendanceRecords.map((record) => (
            <tr key={record.id}>
              <td className="py-3 px-6">{record.name}</td>
              <td className="py-3 px-6">{record.className}</td>
              <td className="py-3 px-6">{record.status}</td>
              <td className="py-3 px-6">{record.date}</td>
              <td className="py-3 px-6 text-center">
                <button
                  onClick={() => handleEditRecord(record.id)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteRecord(record.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAttendance;
