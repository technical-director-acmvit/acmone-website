"use client";
import React, { useState } from "react";
import Navbar from "../Navbar";

const Delete: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className='name="viewport" content="width=device-width, initial-scale=1.0'>
    <div className="min-h-screen flex flex-col bg-white bg-fixed">
      <Navbar textColor="black" logoColor="black" />
      <div
        className="flex-1 flex items-center justify-center"
        style={{
          backgroundImage: "url('/Ellipse1.svg'), url('/Ellipse4.svg')",
          backgroundRepeat:"no-repeat",
          backgroundPosition: "bottom left, top right",
          backgroundSize: "20%, 20%",
        }}
      >
        <form
          className="bg-white w-full max-w-lg p-4 sm:p-8 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-lg font-bold text-gray-900 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="block w-full px-4 py-2 border rounded-2xl bg-slate-200 focus:ring focus:outline-none focus:ring-blue-300"
              placeholder="Enter email..."
              required
            />
          </div>
          <p className="mt-4 text-gray-600 text-sm sm:text-base sm:text-lg lg:text-xl">
            Enter the email address associated with the account you would like
            to delete. We will process the delete request as soon as possible.
          </p>
          <button
            type="submit"
            className="w-full mt-5 py-2 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-700"
          >
            Submit
          </button>
        </form>
      </div>
      {showPopup && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center px-4 sm:px-0">
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg text-center max-w-md w-full">
            <h2 className="text-2xl text-black font-bold mb-4">
              Request Submitted
            </h2>
            <p className="mb-4 text-black">
              Your form has been submitted. We shall process your delete request
              soon.
            </p>
            <button
              className="py-2 px-4 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-700"
              onClick={handleClosePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Delete;
