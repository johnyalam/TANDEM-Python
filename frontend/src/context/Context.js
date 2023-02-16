import React, { createContext, useState } from "react";
const TandemContext = createContext();

const TandemProvider = ({ children }) => {
  
  

  
  return (
    <TandemContext.Provider
      value={{
        
      }}
    >
      {children}
    </TandemContext.Provider>
  );
};
export { TandemProvider, TandemContext };