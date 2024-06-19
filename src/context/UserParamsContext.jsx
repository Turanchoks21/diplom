import React, { createContext, useContext, useState, useEffect } from 'react';

const UserParamsContext = createContext();

export const useUserParams = () => useContext(UserParamsContext);

export const UserParamsProvider = ({ children }) => {
  const [userParams, setUserParams] = useState(() => {
    const savedParams = localStorage.getItem('userParams');
    return savedParams ? JSON.parse(savedParams) : { lefty: false, selectedGames: [] };
  });

  useEffect(() => {
    localStorage.setItem('userParams', JSON.stringify(userParams));
  }, [userParams]);

  return (
    <UserParamsContext.Provider value={{ userParams, setUserParams }}>
      {children}
    </UserParamsContext.Provider>
  );
};
