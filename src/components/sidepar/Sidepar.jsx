import React, { Children, useContext, useEffect, useState } from "react";

import { FaPlus } from "react-icons/fa6";
import { IoReorderThree } from "react-icons/io5";
import { RiVipDiamondLine } from "react-icons/ri";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { GiBackwardTime } from "react-icons/gi";
import { AiFillSetting } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import { Context } from "../../App";

const Sidepar = () => {
  const [isOpen, setIsOpen] = useContext(Context);

  function my(){
    if(window.innerWidth > 800){
      console.log("800>")
      setIsOpen(true);
    }else {
      setIsOpen(false);
    } 
  }
  useEffect(() => {
    my()
  },[ ])

  window.addEventListener("resize",my)

  return (
    <>
      <div
        className="absolute z-50 top-4 left-4 hover:bg-[#3d3f42] inline-flex  rounded-full p-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <IoReorderThree className="text-gray-200 text-2xl" />
      </div>
      <div
        className={`bg-[#282a2c] z-40 inline-flex flex-col justify-between  transition-width 
        ease-linear duration-200  p-4 absolute bottom-0 top-0 pt-20 md:relative  md:z-40 ${
          isOpen ? "left-0 w-[80%]  md:w-[33vw] " : "w-[4.5rem] -left-20 md:left-0 md:w-[4.5rem]"
        }`}
      >
        <div>
          <div
            className={`bg-[#1e1f20] flex items-center cursor-pointer  gap-4 rounded-full p-2 py-3 ${
              isOpen || "justify-center"
            }`}
          >
            <FaPlus className="text-gray-500 text-base " />
            {isOpen && (
              <span className="text-gray-200 font-medium text-sm">
                New chat
              </span>
            )}
          </div>

          {/* Recents */}
          {isOpen && (
            <>
              <p className="text-gray-200 font-medium  mt-4 px-2">Recent</p>
              <div className="bg-[#3d3f42] flex items-center gap-4 rounded-full p-2 py-2 mt-3 cursor-pointer">
                <FiMessageSquare className="text-gray-200 ml-1 mt-1" />
                <span className="text-gray-200 font-medium text-sm">
                  What is react......
                </span>
              </div>
            </>
          )}
        </div>

        {/* bottom icons */}
        <div className="flex flex-col gap-3">
          <div
            className={
              "hover:bg-[#3d3f42]  rounded-full p-2 py-2 inline-flex items-center gap-4 cursor-pointer"
            }
          >
            <div className={"text-gray-200 text-lg ml-1"}>
              <RiVipDiamondLine />
            </div>
            {isOpen && (
              <span className={"text-gray-200 font-medium text-sm  "}>
                Gelp manager
              </span>
            )}
          </div>
          <div
            className={
              "hover:bg-[#3d3f42]  rounded-full p-2 py-2 inline-flex items-center gap-4 cursor-pointer"
            }
          >
            <div className={"text-gray-200 text-lg ml-1"}>
              <IoMdHelpCircleOutline />
            </div>
            {isOpen && (
              <span className={"text-gray-200 font-medium text-sm "}>Help</span>
            )}
          </div>

          <div
            className={
              "hover:bg-[#3d3f42]  rounded-full p-2 py-2 inline-flex items-center gap-4 cursor-pointer"
            }
          >
            <div className={"text-gray-200 text-lg ml-1"}>
              <GiBackwardTime />
            </div>
            {isOpen && (
              <span className={"text-gray-200 font-medium text-sm "}>
                Activity
              </span>
            )}
          </div>
          <div
            className={
              "hover:bg-[#3d3f42]  rounded-full p-2 py-2 inline-flex items-center gap-4 cursor-pointer mb-6"
            }
          >
            <div className={"text-gray-200 text-lg ml-1"}>
              <AiFillSetting />
            </div>
            {isOpen && (
              <span className={"text-gray-200 font-medium text-sm "}>
                Settings
              </span>
            ) }
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidepar;
