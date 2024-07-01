// // // import React from "react";

// // // const Delete: React.FC = () => {
// // //   return (
// // //     <div
// // //       className="min-h-screen flex items-center justify-center bg-white bg-fixed bg-no-repeat"
// // //       style={{
// // //         backgroundImage:
// // //           "url('/Group2.png'), url('/Ellipse 1.png'), url('/Group.png'), url('/Ellipse 4.png'), url('/Partnership.png')",
// // //         backgroundPosition:
// // //           "bottom left, bottom left, top right, bottom right, 75% 94%",
// // //         backgroundSize: "12%, 18%, 15%, 13%, 30%",
// // //       }}
// // //     >
// // //       <form className="bg-white p-8 mx-4 sm:mx-10 lg:mx-20 xl:mx-44 px-4 rounded-lg shadow-lg">
// // //         <div className="mb-4">
// // //           <label
// // //             htmlFor="email"
// // //             className="font-bold text-2xl text-gray-900 mb-2"
// // //           >
// // //             Email
// // //           </label>
// // //           <input
// // //             type="email"
// // //             id="email"
// // //             className="block bg-gray-200 w-3/5 px-4 py-2 border rounded-lg focus:ring focus:outline-none focus:ring-blue-300"
// // //             placeholder="Enter email..."
// // //             required
// // //           />
// // //         </div>
// // //         <p className="text-gray-600">
// // //           Enter the email address associated with the account you would like to
// // //           delete. We will process the delete request as soon as possible.
// // //         </p>

// // //         <button
// // //           type="submit"
// // //           className="w-full mt-5 py-2 px-4 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-700"
// // //         >
// // //           Submit
// // //         </button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default Delete;

// // import React from "react";
// // import Navbar from "../../../ui/components/Navbar";
// // import Image from "next/image";

// // const Delete: React.FC = () => {
// //   return (
// //     <div className="min-h-screen flex flex-col items-center justify-center bg-white bg-fixed bg-no-repeat">
// //       <Navbar textColor="black" showLogo={true} />{" "}
// //       <div
// //         className="min-h-screen flex items-center justify-center bg-white bg-fixed bg-no-repeat"
// //         style={{
// //           backgroundImage:
// //             "url('/Group2.png'), url('/Ellipse 1.png'), url('/Group.png'), url('/Ellipse 4.png'), url('/Partnership.png')",
// //           backgroundPosition:
// //             "bottom left, bottom left, right, top right, bottom center",
// //           backgroundSize: "12%, 18%, 12%, 13%, 23%",
// //         }}
// //       >
// //         <div className="flex-1 flex items-center justify-center mb-5">
// //           <form className="bg-white p-4 mx-4 sm:mx-5 lg:mx-10 xl:mx-44 px-10 rounded-lg shadow-lg">
// //             <div className="mb-4">
// //               <label
// //                 htmlFor="email"
// //                 className="font-bold text-2xl text-gray-900 mb-2"
// //               >
// //                 Email
// //               </label>
// //               <input
// //                 type="email"
// //                 id="email"
// //                 className="block bg-gray-200 w-3/5 px-4 py-2 border rounded-lg focus:ring focus:outline-none focus:ring-blue-300"
// //                 placeholder="Enter email..."
// //                 required
// //               />
// //             </div>
// //             <p className="text-gray-600">
// //               Enter the email address associated with the account you would like
// //               to delete. We will process the delete request as soon as possible.
// //             </p>

// //             <button
// //               type="submit"
// //               className="w-full mt-5 py-2 px-4 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-700"
// //             >
// //               Submit
// //             </button>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Delete;

// import React from "react";
// import Navbar from "../../ui/elements/Navbar";

// const Delete: React.FC = () => {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-white bg-fixed bg-no-repeat">
//       <Navbar textColor="black" showLogo={false} />
//       <div
//         className="min-h-screen flex items-center justify-center bg-white bg-fixed bg-no-repeat"
//         style={{
//           backgroundImage:
//             "url('/Group2.png'), url('/Ellipse 1.png'), url('/Group.png'), url('/Ellipse 4.png'), url('/Partnership.png')",
//           backgroundPosition:
//             "bottom left, bottom left, right, top right, 80% 120%",
//           backgroundSize: "12%, 18%, 12%, 13%, 23%",
//         }}
//       >
//         <div className="flex-1 flex items-center justify-center mb-5">
//           <form className="bg-white p-4 mx-4 sm:mx-10 lg:mx-10 xl:mx-44 px-10 rounded-lg shadow-lg mt-[-100px]">
//             <div className="mb-4">
//               <label
//                 htmlFor="email"
//                 className="font-bold text-2xl text-gray-900 mb-2"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="block bg-gray-200 w-3/5 px-4 py-2 border rounded-lg focus:ring focus:outline-none focus:ring-blue-300"
//                 placeholder="Enter email..."
//                 required
//               />
//             </div>
//             <p className="text-gray-600">
//               Enter the email address associated with the account you would like
//               to delete. We will process the delete request as soon as possible.
//             </p>

//             <button
//               type="submit"
//               className="w-full mt-5 py-2 px-4 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-700"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Delete;

import React from "react";
import Navbar from "../../ui/components/Navbar";

const Kin: React.FC = () => {
  return (
    <div
      className="flex flex-col bg-white min-h-screen bg-fixed bg-no-repeat"
      style={{
        backgroundImage:
          "url('/PinkSpreadPurpleStripes.svg'),url('/GreenDotsPurpleCircles.svg'), url('/TeamBrainstorming.svg'), url('/LogoB.svg')",
        backgroundPosition:
          "top 130% right 110%, left 110% center, center top 20% , center top 70%",
        backgroundSize: "25%, 25%, 21%, 19%",
      }}
    >
      <Navbar logoColor="white"/>
      <div className="flex flex-col items-center mt-20 md:mt-96 font-serif text-center flex-1 justify-center">
        <h1 className="text-black text-3xl md:text-3xl">ACM IN ONE</h1>
        <button className="mt-4 px-4 py-2 md:px-6 md:py-2 bg-black text-white text-lg md:text-xl rounded-lg">
          Download
        </button>
      </div>
    </div>
  );
};

export default Kin;
