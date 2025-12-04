import React, { createContext } from "react";

export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  const authInfo = {
    name: "khal bill nodi",
  };
  return (
    <AuthContext.Provider value={{ authInfo }}>
      {/* Main part who will have access to this context */}
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;

/**
 * create context with null default value
 * create AuthProvider
 * set a value : authInfo (name)
 * use the AuthProvider to wrap the RouterProvider in main.jsx
 * access the children props to render nested components: authProviders({children}) in the main.jsx
 */
