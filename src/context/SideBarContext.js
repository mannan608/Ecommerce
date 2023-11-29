import React, { createContext, useState } from "react";

const SideBarContext = createContext();

const SideBarProvider = ({ children }) => {
  const [IsOpen, setIsopen] = useState(false);
  const handleClose = () => {
    setIsopen(false);
  };
  return (
    <SideBarContext.Provider value={{ IsOpen, setIsopen, handleClose }}>
      {children}
    </SideBarContext.Provider>
  );
};

export { SideBarContext, SideBarProvider };
