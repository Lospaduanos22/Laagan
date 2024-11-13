// src/Signup.js
import React, { useState } from "react";
import "./assets/styles/signup.css"; // Optional: You can remove this if you don't need custom styles

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
    } else {
      alert("Form submitted!");
      // Here you can add backend integration logic (e.g., API call)
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
      <form onSubmit={handleSubmit} className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-md w-full space-y-4">
        <h2 className="text-xl font-semibold text-gray-700">New here?</h2>
        <h1 className="text-2xl font-bold text-gray-800">Sign up</h1>
        
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        
        <input
          type="text"
          name="username"
          placeholder="Enter your user name"
          value={formData.username}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        
        <input
          type="password"
          name="password"
          placeholder="Enter your Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm your Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        
        <button type="submit" className="w-full py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400">
          Register
        </button>
        <p className="text-center text-gray-600">
          Already have an account? <a href="/login" className="text-orange-500 hover:underline">Log in</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
