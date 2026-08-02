import { useState, createContext } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(
    localStorage.getItem("currentUserName")
      ? { name: localStorage.getItem("currentUserName") }
      : null,
  );

  function signUp(name, password) {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find((u) => u.name === name)) {
      return { success: false, error: "User already exists" };
    }
    const newUser = { name, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUserName", name);
    setUser({ name });
    return { succcess: true };
  }

  function login(name, password) {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u) => u.name === name && u.password === password,
    );
    
    if (!user) {
      return { success: false, error: "Invalid name or password" };
    }
    localStorage.setItem("currentUserName", name);
    setUser({ name });
    return { succes: true };
  }

  function logout() {
    localStorage.removeItem("currentUserName");
    setUser(null);
  }
  return (
    <AuthContext.Provider value={{ signUp, user, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
}
