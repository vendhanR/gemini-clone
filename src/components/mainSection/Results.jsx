import React, { useContext } from "react";
import { ContextForPrompt } from "../../context/PromptContextProvider";

const Results = () => {
  const { loading, resultData, showResult, recentPrompt } =
    useContext(ContextForPrompt);

    console.log(typeof resultData)
  return (
    <>
      <div className=" h-[73vh] overflow-auto z-20 flex px-5 sm:px-10  md:px-24">
        {!showResult ? (
          <div className=" w-full flex justify-center items-center ">
            <h1 className="text-4xl text-purple-400 font-medium font-sans">
              Hello
            </h1>
          </div>
        ) : (
          <div className="w-full">
            <div className="flex gap-5 items-center my-6">
              <div className="w-8">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt="profile"
                />
              </div>
              <h1 className="text-white">{recentPrompt}</h1>
            </div>
            <div className="flex gap-5 mt-10">
              <div className="w-8">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="profile"
                />
              </div>
              {loading ? (
                <>
                  <div className="w-full flex flex-col gap-2">
                    {/* <p className="text-white">loading</p> */}
                    <div className="border-none rounded-md bg-white h-4 w-full bg-gradient-to-bl from-gray-500  to-blue-800 animate-wave-tr "></div>
                    <div className="border-none rounded-md bg-white h-4 w-[90%] bg-gradient-to-tr from-gray-500  to-blue-800 animate-wave-tr"></div>
                    <div className="border-none rounded-md bg-white h-4 w-[50%] bg-gradient-to-tl from-gray-500  to-blue-800 animate-wave-tr"></div>
                  </div>
                </>
              ) : (
                <p
                  className="text-white p-[16px] leading-relaxed text-sm"
                  dangerouslySetInnerHTML={{ __html:  resultData }}
                ></p>
              )}
              {/* result */}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Results;
