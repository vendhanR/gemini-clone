import React from "react";

import { FaCaretDown } from "react-icons/fa";

const Heading = () => {
  return (
    <div className="fixid z-40 top-0  w-full flex items-center justify-between pr-6 pl-16 md:pl-5 py-10 h-[10vh] ">
      <div>
        <div className="flex items-center gap-1">
          <p className="font-normal text-[1.25rem] text-gray-100  ">Gemini</p>
          <span className="text-gray-100">
            <FaCaretDown />
          </span>
        </div>
        <p className="font-normal text-gray-200 text-sm">1.5 Flash</p>
      </div>
      <div>
        <div className="w-8">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Heading;
