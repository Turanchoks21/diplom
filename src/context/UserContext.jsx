import React, { createContext, useContext, useState } from "react";

const UsersContext = createContext();

export const useUsers = () => useContext(UsersContext);

export function UsersProvider({ children }) {
  const [users, setUsers] = useState([]);

  function addUser(user) {
    setUsers((prevUsers) => [...prevUsers, user]);
  }

  function clearUsers() {
    setUsers([]);
    localStorage.removeItem("users");
  }

  return (
    <UsersContext.Provider value={{ users, addUser, clearUsers }}>
      {children}
    </UsersContext.Provider>
  );
}

export default UsersProvider;
