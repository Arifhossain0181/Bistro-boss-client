import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contextProvider/AuthProvider";
import Useadmin from "../Hooks/Useadmin";

const Adminroutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = Useadmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <p>Loading...</p>;
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default Adminroutes;
