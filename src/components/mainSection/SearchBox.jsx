import React, { useContext, useEffect, useRef } from "react";
import { LuImagePlus } from "react-icons/lu";
import { MdKeyboardVoice } from "react-icons/md";
import { ContextForPrompt } from "../../context/PromptContextProvider";
import { IoSend } from "react-icons/io5";
import run from "../../config/config";
import { Context } from "../../App";

const SearchBox = () => {
  const inputRef = useRef(null);
    const [isOpen] = useContext(Context);
  
  const { input, setInput ,runChat} =
    useContext(ContextForPrompt);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleKeyDown(e) {
    if(e.key === "Enter") {
      e.preventDefault();
      runChat();
    }
  }

  return (
    <div className={`w-[100vw] pt-4  z-30 fixed bottom-0 flex flex-col items-center justify-center h-[15vh] ${isOpen ?"" : "" } `}>
      <div className={`border border-gray-400 border-opacity-35 rounded-full flex items-center justify-center w-[90%]  ${isOpen ? "md:w-[60%] md:mr-56" : "md:w-[70%] md:mr-10" }  h-16 px-2`}>
        <div className="flex items-center w-full">
          <span className="hover:bg-[#3d3f42] p-3 rounded-full  bg-opacity-80">
            <LuImagePlus className="text-white text-2xl cursor-pointer" />
          </span>
          <input
            type="text"
            className="bg-[#1e1f20] w-full px-2 outline-none text-gray-100 "
            placeholder="Ask Gemini"
            ref={inputRef}
            value={input}
            onKeyDown={handleKeyDown}
            onInput={(e) => {
              setInput(e.target.value);
            }}
          />
        </div>
        <span
          onClick={runChat}
          className={`cursor-pointer ${
            input?.length > 0
              ? "bg-[#3d3f42] p-3 rounded-full bg-opacity-25"
              : " hover:bg-[#3d3f42] p-3 rounded-full  bg-opacity-25"
          } `}
        >
          {input?.length > 0 ? (
            <IoSend className="text-white text-lg" />
          ) : (
            <MdKeyboardVoice className="text-white text-2xl" />
          )}
        </span>
      </div>
      <p className={`text-white z-50 text-[0.65rem] ${isOpen ? "md:mr-56" : " md:mr-10" } py-3`}>Gemini can make mistakes, so double-check it</p>
    </div>
  );
};

export default SearchBox;
