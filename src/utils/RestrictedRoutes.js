import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const RestrictedRoutes = () => {
  const { user, loading } = useContext(AuthContext);

  if (!loading) {
    if (user) {
      return <Navigate to="/dashboard" />;
    } else {
      return <Outlet />;
    }
  }
};

export default RestrictedRoutes;
