// src/pages/User/EditProfile.jsx
import React, { useState, useEffect } from "react";

const EditProfile = () => {
  const [profilePicture, setProfilePicture] = useState("");
  const [file, setFile] = useState(null);

  useEffect(() => {
    // Load profile picture from local storage or default placeholder
    const storedProfilePicture =
      localStorage.getItem("profilePicture") ||
      "https://via.placeholder.com/150";
    setProfilePicture(storedProfilePicture);
  }, []);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result;
        setProfilePicture(imageUrl);
        // Save the image URL to local storage
        localStorage.setItem("profilePicture", imageUrl);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Profile</h1>
      <div className="mb-4 text-center">
        <img
          src={profilePicture}
          alt="Profile"
          className="rounded-full border border-gray-300"
          width="150"
          height="150"
        />
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4"
      />
      <button className="bg-blue-500 text-white py-2 px-4 rounded">
        Save Changes
      </button>
    </div>
  );
};

export default EditProfile;
