import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setRole } from '../store/userSlice';

const RoleSelection: React.FC = () => {
  const dispatch = useDispatch();
  const [selectedRole, setSelectedRole] = useState<'teacher' | 'student' | null>(null);

  const handleRoleClick = (role: 'teacher' | 'student') => {
    setSelectedRole(role);
  };

  const handleContinue = () => {
    if (selectedRole) {
      dispatch(setRole(selectedRole));
    }
  };

  return (
    <div className="w-full h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-5xl flex flex-col items-center text-center">
        {/* Top Badge */}
        <div className="bg-purple-600 text-white text-base px-6 py-2 rounded-full mb-8">
          🔁 Intervue Poll
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-semibold text-gray-800 mb-4">
          Welcome to the <span className="font-bold">Live Polling System</span>
        </h1>
        <p className="text-lg text-gray-500 mb-12 max-w-2xl">
          Please select the role that best describes you to begin using the live polling system
        </p>

        {/* Role Cards */}
        <div className="flex flex-col md:flex-row gap-10 mb-12">
          {/* Student */}
          <div
            onClick={() => handleRoleClick('student')}
            className={`cursor-pointer border rounded-2xl px-10 py-8 w-96 text-left transition duration-200 ${
              selectedRole === 'student' ? 'border-blue-600 shadow-xl' : 'border-gray-300'
            }`}
          >
            <h3 className="font-semibold text-xl text-black mb-3">I’m a Student</h3>
            <p className="text-base text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </p>
          </div>

          {/* Teacher */}
          <div
            onClick={() => handleRoleClick('teacher')}
            className={`cursor-pointer border rounded-2xl px-10 py-8 w-96 text-left transition duration-200 ${
              selectedRole === 'teacher' ? 'border-blue-600 shadow-xl' : 'border-gray-300'
            }`}
          >
            <h3 className="font-semibold text-xl text-black mb-3">I’m a Teacher</h3>
            <p className="text-base text-gray-600">
              Submit answers and view live poll results in real-time.
            </p>
          </div>
        </div>

        {/* Continue Button */}
        <button
          disabled={!selectedRole}
          onClick={handleContinue}
          className={`px-12 py-4 rounded-full text-white text-lg font-semibold transition duration-200 ${
            selectedRole
              ? 'bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 hover:opacity-90'
              : 'bg-gray-300 cursor-not-allowed'
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default RoleSelection;
