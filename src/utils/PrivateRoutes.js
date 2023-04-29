import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const PrivateRoutes = () => {
  const { user, loading } = useContext(AuthContext);

  if (!loading) {
    if (user) {
      return user.accessToken ? <Outlet /> : <Navigate to="/login" />;
    } else {
      return <Navigate to="/login" />;
    }
  }
};

export default PrivateRoutes;
