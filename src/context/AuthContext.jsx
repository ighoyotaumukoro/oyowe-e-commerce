import { useState, createContext, useContext } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(
    localStorage.getItem("currentUserName")
      ? { name: localStorage.getItem("currentUserName") }
      : null,
  );

  function signUp(name, email, password) {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find((u) => u.name === name && u.email === email)) {
      return { success: false, error: "User already exists" };
    }
    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUserName", name, email);
    setUser({ name, email });
    return { succcess: true };
  }

  function login(name, email, password) {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u) => u.name === name && u.email === email && u.password === password,
    );
    
    if (!user) {
      return { success: false, error: "Invalid email or password" };
    }
    localStorage.setItem("currentUserName", name, email);
    setUser({ name, email });
    return { success: true };
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

export function useAuth(){
  const context = useContext(AuthContext);

  return context;
}
