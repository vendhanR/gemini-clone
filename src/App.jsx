import { createContext, useState } from "react";
import MainSection from "./components/mainSection/MainSection";
import Sidepar from "./components/sidepar/Sidepar";

export const Context = createContext();

function App() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <Context.Provider value={[isOpen, setIsOpen]}>
        <Sidepar />
        <MainSection />
      </Context.Provider>
    </>
  );
}

export default App;
