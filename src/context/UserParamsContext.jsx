import React, { createContext, useContext, useState } from 'react';

// Создаем контекст
const UserParamsContext = createContext();

// Хук для использования контекста
export const useUserParams = () => useContext(UserParamsContext);

// Провайдер для оборачивания компонентов
export const UserParamsProvider = ({ children }) => {
  const [userParams, setUserParams] = useState({ lefty: false });

  return (
    <UserParamsContext.Provider value={{ userParams, setUserParams }}>
      {children}
    </UserParamsContext.Provider>
  );
};
