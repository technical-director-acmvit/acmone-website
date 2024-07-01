import React from "react";
import Navbar from "../Navbar";

const Delete: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white bg-fixed bg-no-repeat">
      <Navbar textColor="black" logoColor="black" />
      <div
        className="flex-1 flex items-center justify-center"
        style={{
          backgroundImage:
            "url('/Group2.svg'), url('/Ellipse 1.svg'), url('/Group.svg'), url('/Ellipse4.svg'), url('/Partnership.svg')",
          backgroundPosition:
            "bottom left, bottom left, right, top right, 3% 8%",
          backgroundSize: "12%, 18%, 12%, 13%, 15%",
        }}
      >
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-10 lg:px-10 xl:px-44 py-10">
          <form className="bg-white p-4 rounded-lg shadow-lg">
            <div className="mb-6">
              <label
                htmlFor="email"
                className="font-bold text-2xl text-gray-900 mb-2 block"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="block w-full bg-gray-200 px-4 py-2 border rounded-lg focus:ring focus:outline-none focus:ring-blue-300"
                placeholder="Enter email..."
                required
              />
            </div>
            <p className="text-gray-600 mb-4">
              Enter the email address associated with the account you would like
              to delete. We will process the delete request as soon as possible.
            </p>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Delete;
