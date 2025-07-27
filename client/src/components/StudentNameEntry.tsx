import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setStudentName } from '../store/userSlice';

const StudentNameEntry: React.FC = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const savedName = sessionStorage.getItem('studentName');
    if (savedName) {
      dispatch(setStudentName(savedName));
    }
  }, [dispatch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      sessionStorage.setItem('studentName', name.trim());
      dispatch(setStudentName(name.trim()));
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-xl w-full">
        {/* Badge */}
        <div className="bg-purple-600 text-white text-sm font-medium px-4 py-1 rounded-full inline-block mb-6">
          ✦ Intervue Poll
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4">
          Let’s <span className="font-bold">Get Started</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-lg mb-10 px-2">
          If you’re a student, you’ll be able to <span className="font-semibold text-black">submit your answers</span>, participate in live polls, and see how your responses compare with your classmates
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto w-full">
          <label htmlFor="name" className="block text-left text-gray-800 font-medium text-base mb-2">
            Enter your Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Rahul Bajaj"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
          />

          <button
            type="submit"
            className="mt-8 w-full py-3 rounded-full bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 text-white text-base font-semibold hover:opacity-90 transition duration-200"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentNameEntry;
