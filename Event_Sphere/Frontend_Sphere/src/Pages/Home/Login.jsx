import React from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to EVENTSPHERE</h1>
      <h3 className="text-xl mb-6">The ultimate platform for managing and participating in college events</h3>
      <div className="flex space-x-6">
        <Link to="/student-login" className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600">Student Login</Link>
        <Link to="/college-login" className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">College Login</Link>
      </div>
      <div className="flex space-x-6 mt-4">
        <Link to="/student-register" className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600">Student Register</Link>
        <Link to="/college-register" className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">College Register</Link>
      </div>
    </div>
  );
};