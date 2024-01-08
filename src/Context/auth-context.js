import React, { useState, useEffect } from "react";

const Authcontext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextprovider = ({ children }) => {
  const [islogeding, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };
  return (
    <Authcontext.Provider
      value={{
        isLoggedIn: islogeding,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {children}
    </Authcontext.Provider>
  );
};

export default Authcontext;
