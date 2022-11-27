import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
export const AuthContext = createContext({
  email: "",
  password: "",
});

export const AuthContextProviderWrapper = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const eventListener = onAuthStateChanged(auth, (user) => {
      console.log(user);
      setCurrentUser(user);
    });
    return () => {
      eventListener();
    };
  }, []);
  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
};
