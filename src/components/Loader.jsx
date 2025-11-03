// "use client";

// import { FiLoader } from "react-icons/fi";

// export default function Loader() {
//   return (
//     <div className="w-full h-screen flex items-center justify-center bg-white">
//       <FiLoader className="text-5xl animate-spin" />
//     </div>
//   );
// }

"use client";

import React from "react";

export default function Loader() {
  return (
    <div className="w-full h-full min-h-[60vh] flex gap-6 p-5 justify-center bg-white">
      
    
      <div className="w-full max-w-xl flex flex-col gap-4">
        <div className="w-full h-10 bg-gray-200 rounded-lg animate-pulse"></div>
        <div className="w-full h-[400px] bg-gray-200 rounded-lg animate-pulse"></div>
        <div className="w-full h-48 bg-gray-200 rounded-lg animate-pulse"></div>
      </div>

        <div className="w-full max-w-sm">
        <div className=" w-[300px] h-[300px] bg-gray-200 rounded-lg animate-pulse"></div>
      </div>


    </div>
  );
}

