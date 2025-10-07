import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create context
export const AuthContext = createContext();

// Provider component to wrap the app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // { username, userid }
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [loading, setLoading] = useState(true);

  /**
   * Check authenticated user on app start
   * If token exists, validate it with API
   */
  useEffect(() => {
    const checkUser = async () => {
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get("/api/user/checkUser", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.data.username && res.data.userid) {
          setUser({ username: res.data.username, userid: res.data.userid });
        } else {
          throw new Error("Invalid user data");
        }
      } catch (err) {
        console.error("User check failed:", err);
        logout(); // clear user and token if check fails
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, [token]);

  /**
   * Login function
   * Stores token in localStorage and sets user info
   */
  const login = (token, username, userid) => {
    setToken(token);
    localStorage.setItem("token", token);
    setUser({ username, userid });
  };

  /**
   * Logout function
   * Clears user and token
   */
  const logout = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
