import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { authInfo } = useContext(AuthContext);
  const { user, loading } = authInfo;
  if (loading) {
    return <span className="loading loading-spinner loading-xl"></span>;
  }
  if (user) {
    return children;
  }
  return (
    <div>
      <Navigate to="/login"></Navigate>
    </div>
  );
};

export default PrivateRoute;
