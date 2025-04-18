import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const ShowHide = () => {
  const [password, setPassword] = useState(false);

  const handleShowHidePassword = () => {
    setPassword(!password);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="mb-5 text-xl font-semibold">Show/Hide Password</h1>
      <div className="border-black border-[2px] w-[220px] flex justify-between items-center p-2 rounded-lg shadow-md">
        <input
          className="w-[160px] border-none focus:outline-none"
          type={password ? 'text' : 'password'}
          placeholder="Enter Password"
        />
        <button
          onClick={handleShowHidePassword}
          className="text-2xl text-blue-500 hover:text-blue-700 focus:outline-none"
        >
          {password ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
    </div>
  );
};

export default ShowHide;
