import React from "react";
import { Navigate } from "react-router-dom";
import useApi from "../../services/api";
function Protected({ children }) {
  const api = useApi();

  const hastoken = localStorage.getItem("token");
  console.log(hastoken);

  if (hastoken === null) {
    return <Navigate to="/" replace />;
  } else {
    return children;
  }
}
export default Protected;
