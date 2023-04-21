import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const RestrictedRoutes = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  if (user) {
    return !user.accessToken ? <Outlet /> : <Navigate to="/dashboard" />;
  } else {
    return <Outlet />;
  }
};

export default RestrictedRoutes;
