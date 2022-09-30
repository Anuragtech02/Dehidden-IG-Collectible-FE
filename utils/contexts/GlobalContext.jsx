import { createContext, useState } from "react";

const GlobalContext = createContext({});

export const GlobalContextProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState(null);

  return (
    <GlobalContext.Provider
      value={{
        walletAddress,
        setWalletAddress,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
