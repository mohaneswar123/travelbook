import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) 
{
  const [isCustomerLoggedIn, setIsCustomerLoggedIn] = useState(() => {
    return localStorage.getItem('isCustomerLoggedIn') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('isCustomerLoggedIn', isCustomerLoggedIn);
  }, [isCustomerLoggedIn]);

  return (
    <AuthContext.Provider
      value={{
        isCustomerLoggedIn,
        setIsCustomerLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);