import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = ({ loggedIn }) => {
  // debugger
  return loggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
