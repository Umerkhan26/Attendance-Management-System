// src/pages/CombinedLogin.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CombinedLogin = () => {
  const [loginType, setLoginType] = useState("admin"); // State to toggle between Admin and User
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  // Define temporary credentials for Admin and User
  const adminCredentials = { email: "admin@example.com", password: "admin123" };
  const userCredentials = { email: "user@example.com", password: "user123" };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Authentication logic
    if (loginType === "admin") {
      // Check if credentials match admin credentials
      if (
        credentials.email === adminCredentials.email &&
        credentials.password === adminCredentials.password
      ) {
        navigate("/admin-dashboard"); // Navigate to Admin Dashboard
      } else {
        alert("Invalid Admin credentials");
      }
    } else {
      // Check if credentials match user credentials
      if (
        credentials.email === userCredentials.email &&
        credentials.password === userCredentials.password
      ) {
        navigate("/user/dashboard"); // Navigate to User Dashboard
      } else {
        alert("Invalid User credentials");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="mb-4">
        {/* Toggle between Admin and User */}
        <button
          className={`px-4 py-2 mr-2 ${
            loginType === "admin" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setLoginType("admin")}
        >
          Admin
        </button>
        <button
          className={`px-4 py-2 ${
            loginType === "user" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setLoginType("user")}
        >
          User
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-4">
          {loginType === "admin" ? "Admin Login" : "User Login"}
        </h2>
        <input
          type="email"
          placeholder="Email"
          value={credentials.email}
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
          className="w-full mb-2 p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default CombinedLogin;
