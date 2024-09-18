import React, { useState, useEffect } from "react";
import axios from "axios";

const AllStudents = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch random users from Random User API
    axios
      .get("https://randomuser.me/api/?results=10") // Fetch 10 random users
      .then((response) => {
        const fetchedStudents = response.data.results.map((user, index) => ({
          id: index + 1, // Assign a sequential ID
          name: `${user.name.first} ${user.name.last}`, // Concatenate first and last name
          rollNumber: user.login.username, // Use the username as the roll number
          status: Math.random() > 0.5 ? "Logged In" : "Logged Out", // Randomly set status as logged in or logged out
        }));
        setStudents(fetchedStudents);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching student data", error);
        setLoading(false); // Stop loading on error too
      });
  }, []);

  if (loading) {
    return <div className="p-6">Loading students data...</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Logged-in Students</h1>
      <table className="table-auto w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">ID</th>
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Roll Number</th>
            <th className="py-3 px-6 text-left">Status</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm">
          {students.map((student) => (
            <tr
              key={student.id}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6 text-left">{student.id}</td>
              <td className="py-3 px-6 text-left">{student.name}</td>
              <td className="py-3 px-6 text-left">{student.rollNumber}</td>
              <td className="py-3 px-6 text-left">
                <span
                  className={`py-1 px-3 rounded-full text-xs ${
                    student.status === "Logged In"
                      ? "bg-green-200 text-green-600"
                      : "bg-red-200 text-red-600"
                  }`}
                >
                  {student.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllStudents;
