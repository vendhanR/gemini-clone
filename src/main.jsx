import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import PromptContextProvider from "./context/PromptContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PromptContextProvider>
      <App />
    </PromptContextProvider>
  </StrictMode>
);
