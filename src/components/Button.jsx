// src/components/Button.jsx
import React from "react";

const Button = ({ onClick, text, className, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`py-3 px-6 rounded-lg shadow-md transition-colors transform hover:scale-105 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
