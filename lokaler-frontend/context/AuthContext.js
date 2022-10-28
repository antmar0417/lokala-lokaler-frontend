// --------- Context API ---------
import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
// import { NEXT_URL } from "@/config/index";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // Test with user
  // const [user, setUser] = useState({ name: "Anton" });
  const [error, setError] = useState(null);

  // const router = useRouter();

  // useEffect(() => checkUserLoggedIn(), []);

  // --------- Register user ---------
  const register = async (user) => {
    console.log(user);
  };

  // --------- Login user ---------
  const login = async ({ email: identifier, password }) => {
    console.log({ identifier, password });
  };

  // --------- Logout user ---------
  const logout = async () => {
    console.log("logout");
  };

  // --------- Check if user is logged in ---------
  const checkUserLoggedIn = async (user) => {
    console.log(user);
  };

  return (
    <AuthContext.Provider value={{ user, error, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// exporting to _app.js
export default AuthContext;
