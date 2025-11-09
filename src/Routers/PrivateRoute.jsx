import { use } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../Providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user } = use(AuthContext);
  return user ? children : <Navigate to="/" />;
};

export default PrivateRoute;
