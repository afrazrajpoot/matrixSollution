import React, { createContext, useContext, useState } from 'react';

// Create a context
const GlobalContext = createContext();

// Create a provider component
export const GlobalProvider = ({ children }) => {
  const [state, setState] = useState(false);
  const [contactState, setContactState] = useState(false)

  // Define functions to update the global state
  

 

  return (
    <GlobalContext.Provider value={{ state,setState,contactState,setContactState }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to consume the global state
export const useGlobalContext = () => useContext(GlobalContext);
