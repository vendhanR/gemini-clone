import React from "react";
import { useState } from "react";
import { createContext } from "react";
import run from "../config/config";

export const ContextForPrompt = createContext();

const PromptContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [recentPrompt, setRecentPrompt] = useState("");

  const contextValues = {
    input,
    setInput,

    runChat,
    showResult,
    recentPrompt,

    loading,
    resultData,
  };

  async function runChat() {
    setLoading(true);
    setResultData("");
    setShowResult(true);
    setRecentPrompt(input);
    const response = await run(input);
    console.log(response);
    let responseArr = response.split("**");
    let newResponse;
    for (let i = 0; i < responseArr.length; i++) {
      if (i === 0 || i ===2 || i ===3 || i % 2 !== 1) {
        newResponse +=  responseArr[i] + "<br/>" ;
      } else {
        newResponse += "<b>" + responseArr[i] + "</b>";
      }
    }

    console.log(responseArr);
    let formatedResponse = newResponse.split("*").join("<br/>")
    let formatedResponseArr = formatedResponse.split(' ')
    for (let i = 0; i < formatedResponseArr.length; i++) {
      const nextWord = formatedResponseArr[i];
      delayPara(i,nextWord+" ")
    }
   
    setLoading(false);
  }

  function delayPara(index,nextWord) {
    setTimeout(() => {
      setResultData(prev => prev+nextWord);
    },75*index)
  }

  return (
    <ContextForPrompt.Provider value={contextValues}>
      {props.children}
    </ContextForPrompt.Provider>
  );
};

export default PromptContextProvider;
