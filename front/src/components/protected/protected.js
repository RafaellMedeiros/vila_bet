import React from "react";
import { Navigate } from "react-router-dom";
function Protected({ isLogged, permission, children }) {
  if (!isLogged) {
    console.log(isLogged);
    return <Navigate to="/" replace />;
  }

  return children;
}
export default Protected;
