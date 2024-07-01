import React from "react";
import Navbar from "../../ui/components/Navbar";

const Delete: React.FC = () => {
  return (
    <div>
      <Navbar logoColor="black"/>
      <div className="min-h-screen flex flex-col items-center justify-center bg-white bg-fixed bg-no-repeat">
        <div
          className="min-h-screen flex items-center justify-center bg-white bg-fixed bg-no-repeat"
          style={{
            backgroundImage:
              "url('/Group2.svg'), url('/Ellipse 1.svg'), url('/Group.svg'), url('/Ellipse4.svg'), url('/Partnership.svg')",
            backgroundPosition:
              "bottom left, bottom left, right, top right, 80% 120%",
            backgroundSize: "12%, 18%, 12%, 13%, 23%",
          }}
        >
          <div className="flex-1 flex items-center justify-center mb-5">
            <form className="bg-white p-4 mx-4 sm:mx-10 lg:mx-10 xl:mx-44 px-10 rounded-lg shadow-lg mt-[-100px]">
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="font-bold text-2xl text-gray-900 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="block bg-gray-200 w-3/5 px-4 py-2 border rounded-lg focus:ring focus:outline-none focus:ring-blue-300"
                  placeholder="Enter email..."
                  required
                />
              </div>
              <p className="text-gray-600">
                Enter the email address associated with the account you would
                like to delete. We will process the delete request as soon as
                possible.
              </p>

              <button
                type="submit"
                className="w-full mt-5 py-2 px-4 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delete;
